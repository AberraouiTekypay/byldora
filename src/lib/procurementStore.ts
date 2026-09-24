'use client';

import { useState, useEffect } from 'react';
import {
  Project,
  BoqItem,
  RfqPackage,
  SupplierBid,
  PurchaseOrder,
  UserSession,
  UserRole,
} from '@/types/procurement';
import {
  INITIAL_PROJECT,
  SAMPLE_BOQ_ITEMS,
  INITIAL_PACKAGES,
  INITIAL_BIDS_PKG04,
  INITIAL_PURCHASE_ORDER,
} from './mockData';

const DEFAULT_USER: UserSession = {
  name: 'Tariq Benjelloun',
  email: 't.benjelloun@byldora-enterprise.com',
  organization: 'Atlas Commercial Developments',
  role: 'cpo',
  roleTitle: 'Chief Procurement Officer',
};

export function useProcurementStore() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<UserSession>(DEFAULT_USER);
  const [projects, setProjects] = useState<Project[]>([INITIAL_PROJECT]);
  const [activeProjectId, setActiveProjectId] = useState<string>(INITIAL_PROJECT.id);
  const [boqItems, setBoqItems] = useState<BoqItem[]>(SAMPLE_BOQ_ITEMS);
  const [packages, setPackages] = useState<RfqPackage[]>(INITIAL_PACKAGES);
  const [bids, setBids] = useState<SupplierBid[]>(INITIAL_BIDS_PKG04);
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([INITIAL_PURCHASE_ORDER]);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('byldora_user');
      if (storedUser) setUser(JSON.parse(storedUser));

      const storedProjects = localStorage.getItem('byldora_projects');
      if (storedProjects) setProjects(JSON.parse(storedProjects));

      const storedBoq = localStorage.getItem('byldora_boq');
      if (storedBoq) setBoqItems(JSON.parse(storedBoq));

      const storedPackages = localStorage.getItem('byldora_packages');
      if (storedPackages) setPackages(JSON.parse(storedPackages));

      const storedBids = localStorage.getItem('byldora_bids');
      if (storedBids) setBids(JSON.parse(storedBids));

      const storedPos = localStorage.getItem('byldora_pos');
      if (storedPos) setPurchaseOrders(JSON.parse(storedPos));
    } catch {
      // ignore parsing errors and fallback to initial
    }
    setMounted(true);
  }, []);

  const switchRole = (role: UserRole) => {
    let updated: UserSession;
    if (role === 'cpo') {
      updated = {
        name: 'Tariq Benjelloun',
        email: 't.benjelloun@byldora-enterprise.com',
        organization: 'Atlas Commercial Developments',
        role: 'cpo',
        roleTitle: 'Chief Procurement Officer',
      };
    } else if (role === 'estimator') {
      updated = {
        name: 'Sofia Alami, MRICS',
        email: 's.alami@byldora-enterprise.com',
        organization: 'Atlas Commercial Developments',
        role: 'estimator',
        roleTitle: 'Lead Quantity Surveyor & Estimator',
      };
    } else {
      updated = {
        name: 'Youssef El Mansouri',
        email: 'youssef@atlasclimsystems.ma',
        organization: 'Atlas Clim Systems S.A.',
        role: 'supplier',
        roleTitle: 'Industrial HVAC Supplier & Bidder',
      };
    }
    setUser(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_user', JSON.stringify(updated));
    }
  };

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'spentMAD' | 'awardedCount'>) => {
    const newProj: Project = {
      ...projectData,
      id: `proj-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      spentMAD: 0,
      awardedCount: 0,
    };
    const nextList = [newProj, ...projects];
    setProjects(nextList);
    setActiveProjectId(newProj.id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_projects', JSON.stringify(nextList));
    }
    return newProj;
  };

  const addBoqItems = (items: BoqItem[]) => {
    const next = [...boqItems, ...items];
    setBoqItems(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_boq', JSON.stringify(next));
    }
  };

  const addRfqPackage = (newPkg: Omit<RfqPackage, 'id' | 'submittedBids'>) => {
    const pkg: RfqPackage = {
      ...newPkg,
      id: `pkg-${Date.now()}`,
      submittedBids: 0,
    };
    const next = [pkg, ...packages];
    setPackages(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_packages', JSON.stringify(next));
    }
    return pkg;
  };

  const submitBid = (newBid: Omit<SupplierBid, 'id'>) => {
    const bid: SupplierBid = {
      ...newBid,
      id: `bid-${Date.now()}`,
    };
    const next = [...bids, bid];
    setBids(next);
    // increment package submitted count
    setPackages(packages.map(p => p.id === newBid.rfqId ? { ...p, submittedBids: p.submittedBids + 1, status: 'evaluating' } : p));
    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_bids', JSON.stringify(next));
    }
    return bid;
  };

  const awardBidAndGeneratePo = (bidId: string, authorizedBy: string) => {
    const winningBid = bids.find(b => b.id === bidId);
    if (!winningBid) return null;

    const pkg = packages.find(p => p.id === winningBid.rfqId);
    const activeProject = projects.find(p => p.id === (pkg?.projectId || activeProjectId)) || projects[0];

    const poNumber = `PO-MHP-2026-${Math.floor(100 + Math.random() * 900)}`;
    const tax = Math.round(winningBid.quotedTotalMAD * 0.2);

    const newPo: PurchaseOrder = {
      id: `po-${Date.now()}`,
      poNumber,
      rfqId: winningBid.rfqId,
      projectId: activeProject.id,
      projectName: activeProject.name,
      supplierName: winningBid.supplierName,
      supplierContact: 'Official Authorized Representative',
      supplierAddress: `${winningBid.country} - Verified BYLDORA Supplier Registry`,
      issueDate: new Date().toISOString().split('T')[0],
      deliveryDate: new Date(Date.now() + winningBid.deliveryWeeks * 7 * 86400000).toISOString().split('T')[0],
      totalAmountMAD: winningBid.quotedTotalMAD,
      taxAmountMAD: tax,
      grandTotalMAD: winningBid.quotedTotalMAD + tax,
      retentionPercentage: 10,
      paymentTerms: winningBid.paymentTerms,
      deliveryLocation: `${activeProject.location} — Main Receiving Gate`,
      status: 'issued',
      authorizedBy,
      items: [
        {
          itemNumber: '04.01.01',
          description: `${pkg?.title || 'Contracted Package Equipment'} - Scope compliant supply`,
          unit: 'Lot',
          quantity: 1,
          unitPriceMAD: winningBid.quotedTotalMAD,
          totalMAD: winningBid.quotedTotalMAD,
        }
      ],
    };

    const nextPos = [newPo, ...purchaseOrders];
    setPurchaseOrders(nextPos);
    // update package status
    setPackages(packages.map(p => p.id === winningBid.rfqId ? { ...p, status: 'awarded' } : p));
    // update project awarded count
    setProjects(projects.map(p => p.id === activeProject.id ? { ...p, awardedCount: p.awardedCount + 1, spentMAD: p.spentMAD + winningBid.quotedTotalMAD } : p));

    if (typeof window !== 'undefined') {
      localStorage.setItem('byldora_pos', JSON.stringify(nextPos));
      localStorage.setItem('byldora_packages', JSON.stringify(packages));
    }

    return newPo;
  };

  const resetToDefaults = () => {
    setUser(DEFAULT_USER);
    setProjects([INITIAL_PROJECT]);
    setActiveProjectId(INITIAL_PROJECT.id);
    setBoqItems(SAMPLE_BOQ_ITEMS);
    setPackages(INITIAL_PACKAGES);
    setBids(INITIAL_BIDS_PKG04);
    setPurchaseOrders([INITIAL_PURCHASE_ORDER]);
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  };

  const currentProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return {
    mounted,
    user,
    switchRole,
    projects,
    activeProjectId,
    setActiveProjectId,
    currentProject,
    boqItems,
    packages,
    bids,
    purchaseOrders,
    addProject,
    addBoqItems,
    addRfqPackage,
    submitBid,
    awardBidAndGeneratePo,
    resetToDefaults,
  };
}
