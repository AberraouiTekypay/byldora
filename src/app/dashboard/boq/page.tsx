'use client';

import React, { useState } from 'react';
import { 
  UploadCloud, 
  Search, 
  Clock, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';
import { BoqItem } from '@/types/procurement';

export default function BoqIntelligencePage() {
  const { boqItems, addBoqItems, currentProject } = useProcurementStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const categories = ['All', 'Civil & Structural', 'MEP & HVAC', 'Façade & Envelope', 'Finishes'];

  const filteredItems = boqItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.specification.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.itemNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulateUpload = () => {
    const sampleNewItems: BoqItem[] = [
      {
        id: `boq-${Date.now()}-1`,
        itemNumber: '05.02.10',
        packageCode: 'PKG-ELEC-05',
        packageName: 'Medium Voltage Distribution Transformers',
        category: 'MEP & HVAC',
        description: 'Oil-Immersed Distribution Transformer 1600 kVA 22kV / 400V Tier-2 EcoDesign Compliant',
        specification: 'IEC 60076, Dyn11 vector group, low loss amorphous core with DGPT2 protection',
        unit: 'Unit',
        quantity: 2,
        estimatedRateMAD: 220000,
        totalEstimatedMAD: 440000,
        leadTimeWeeks: 20,
        isLongLead: true,
      },
      {
        id: `boq-${Date.now()}-2`,
        itemNumber: '08.04.01',
        packageCode: 'PKG-DOOR-08',
        packageName: 'Acoustic & Fire Rated Architectural Doors',
        category: 'Finishes',
        description: 'Solid Core Acoustic Wooden Doorsets EI 60 with Heavy Duty Stainless Steel Ironmongery',
        specification: 'EN 1634-1 certified fire resistance, Rw 38dB acoustic reduction, concealed hinges',
        unit: 'Unit',
        quantity: 120,
        estimatedRateMAD: 4200,
        totalEstimatedMAD: 504000,
        leadTimeWeeks: 6,
        isLongLead: false,
      }
    ];

    addBoqItems(sampleNewItems);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadModalOpen(false);
      setUploadSuccess(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-1">
            <span>BOQ INTELLIGENCE STUDIO</span>
            <span>&bull;</span>
            <span>{currentProject?.name}</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Bill of Quantities Schedule (2,481 Items)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Structured line items, trade lot bundles, and long-lead delivery horizon tracking.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setUploadModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold rounded-[8px] transition-colors shadow-xs"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Upload New BOQ File</span>
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-4">
          <span className="text-[11px] font-mono text-slate-400 block uppercase">Total Parsed</span>
          <span className="text-xl font-black font-mono text-slate-900 mt-1 block">2,481 lines</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-4">
          <span className="text-[11px] font-mono text-slate-400 block uppercase">Estimated Volume</span>
          <span className="text-xl font-black font-mono text-slate-900 mt-1 block">MAD 82.4M</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-4">
          <span className="text-[11px] font-mono text-slate-400 block uppercase">Long-Lead Critical</span>
          <span className="text-xl font-black font-mono text-amber-600 mt-1 block">42 items</span>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-4">
          <span className="text-[11px] font-mono text-slate-400 block uppercase">Bundled into RFQs</span>
          <span className="text-xl font-black font-mono text-[#16A34A] mt-1 block">27 packages</span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search line items by description, code, or technical standard..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#2563EB] focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-[6px] font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0B1220] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Main BOQ Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-mono text-xs">
              <tr>
                <th className="py-3 px-5">ITEM #</th>
                <th className="py-3 px-5">DESCRIPTION &amp; TECHNICAL SPECIFICATION</th>
                <th className="py-3 px-5">TRADE LOT</th>
                <th className="py-3 px-5">QTY &amp; UNIT</th>
                <th className="py-3 px-5">EST. RATE (MAD)</th>
                <th className="py-3 px-5">TOTAL (MAD)</th>
                <th className="py-3 px-5">LEAD TIME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-5 font-mono font-bold text-slate-700">
                    {item.itemNumber}
                  </td>
                  <td className="py-3.5 px-5 max-w-md">
                    <div className="font-semibold text-[#0F172A] leading-snug">
                      {item.description}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {item.specification}
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                      {item.category}
                    </span>
                    <span className="block text-[11px] font-mono text-slate-400 mt-0.5">
                      {item.packageCode}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-mono font-medium text-slate-800">
                    {item.quantity.toLocaleString()} {item.unit}
                  </td>
                  <td className="py-3.5 px-5 font-mono text-slate-700">
                    MAD {item.estimatedRateMAD.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                    MAD {item.totalEstimatedMAD.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-5 font-mono text-xs">
                    {item.isLongLead ? (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Clock className="w-3 h-3" /> {item.leadTimeWeeks} wks (Long lead)
                      </span>
                    ) : (
                      <span className="text-slate-500">
                        {item.leadTimeWeeks} weeks
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>Displaying {filteredItems.length} parsed line items matching filter criteria</span>
          <span className="font-mono">Standard: CSI MasterFormat / Eurocode Compliant</span>
        </div>
      </div>

      {/* Upload Modal Simulator */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-[14px] max-w-lg w-full p-6 shadow-2xl border border-slate-300">
            <h3 className="text-lg font-bold text-[#0F172A] mb-1">
              Upload Construction Bill of Quantities
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Select or drop your multi-tab Excel (.xlsx), CSV, or scanned PDF bill schedule.
            </p>

            <div className="border-2 border-dashed border-slate-300 rounded-[10px] p-8 text-center bg-slate-50 hover:bg-slate-100/60 transition-colors">
              <UploadCloud className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                Drop your BOQ spreadsheet here, or <span className="text-[#2563EB] cursor-pointer">browse</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Supports Excel (.xlsx, .xls), CSV, and PDF schedules up to 50MB
              </div>
            </div>

            {uploadSuccess && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-[8px] text-xs font-semibold text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>BOQ Ingested Successfully! 2 additional trade items parsed and appended.</span>
              </div>
            )}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setUploadModalOpen(false)}
                className="px-4 py-2 border border-slate-300 rounded-[8px] text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSimulateUpload}
                className="px-5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[8px] text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate Ingestion &amp; Parse</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
