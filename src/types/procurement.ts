export interface Project {
  id: string;
  code: string;
  name: string;
  location: string;
  budgetMAD: number;
  spentMAD: number;
  currency: string;
  status: 'planning' | 'tender_active' | 'in_execution' | 'completed';
  totalBoqItems: number;
  packagesCount: number;
  rfqsCount: number;
  awardedCount: number;
  completionDate: string;
  leadConsultant: string;
  createdAt: string;
  image?: string;
}

export interface BoqItem {
  id: string;
  itemNumber: string;
  packageCode: string;
  packageName: string;
  category: 'Civil & Structural' | 'MEP & HVAC' | 'Façade & Envelope' | 'Finishes' | 'FF&E';
  description: string;
  specification: string;
  unit: string;
  quantity: number;
  estimatedRateMAD: number;
  totalEstimatedMAD: number;
  leadTimeWeeks: number;
  isLongLead: boolean;
}

export interface RfqPackage {
  id: string;
  packageCode: string;
  title: string;
  trade: string;
  projectId: string;
  projectName: string;
  budgetMAD: number;
  deadline: string;
  status: 'draft' | 'issued' | 'bids_received' | 'evaluating' | 'awarded';
  itemsCount: number;
  invitedSuppliers: number;
  submittedBids: number;
  specStandard: string;
}

export interface SupplierBid {
  id: string;
  rfqId: string;
  supplierName: string;
  supplierCode: string;
  country: string;
  channel: 'WhatsApp' | 'Email' | 'Portal' | 'Excel Upload';
  quotedTotalMAD: number;
  normalizedTotalMAD: number;
  specMatchPercentage: number;
  transportIncluded: boolean;
  transportAdjustmentMAD: number;
  paymentTerms: string;
  paymentTermScore: number;
  deliveryWeeks: number;
  complianceStatus: 'Full Match' | 'Minor Discrepancy' | 'Substitutions Proposed';
  notes: string;
  exclusions: string[];
  substitutions: { original: string; proposed: string; variance: string }[];
  isRecommended?: boolean;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  rfqId: string;
  projectId: string;
  projectName: string;
  supplierName: string;
  supplierContact: string;
  supplierAddress: string;
  issueDate: string;
  deliveryDate: string;
  totalAmountMAD: number;
  taxAmountMAD: number;
  grandTotalMAD: number;
  retentionPercentage: number;
  paymentTerms: string;
  deliveryLocation: string;
  status: 'issued' | 'countersigned' | 'fulfilled';
  authorizedBy: string;
  items: {
    itemNumber: string;
    description: string;
    unit: string;
    quantity: number;
    unitPriceMAD: number;
    totalMAD: number;
  }[];
}

export type UserRole = 'cpo' | 'estimator' | 'supplier';

export interface UserSession {
  name: string;
  email: string;
  organization: string;
  role: UserRole;
  roleTitle: string;
}
