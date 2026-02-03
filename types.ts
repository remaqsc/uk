
export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'CLIENT';

export interface User {
  id: string;
  email: string;
  companyName: string;
  role: Role;
}

export enum ShipmentStatus {
  PROCESSING = 'Processing',
  IN_PRODUCTION = 'In Production',
  QUALITY_CHECK = 'Quality Check',
  IN_TRANSIT = 'In Transit',
  CUSTOMS_CLEARANCE = 'Customs Clearance',
  DELIVERED = 'Delivered'
}

export interface Shipment {
  id: string;
  invoiceId: string;
  trackingNumber: string;
  clientId: string;
  status: ShipmentStatus;
  progress: number;
  lastUpdate: string;
  adminNotes: string;
  clientNotes: string;
}

export interface Invoice {
  id: string;
  clientId: string;
  clientName: string;
  productCost: number;
  shippingCost: number;
  inspectionCost: number;
  miscFees: number;
  totalAmount: number;
  showBreakdown: boolean;
  status: 'Draft' | 'Issued' | 'Paid';
  issuedDate?: string;
  paidDate?: string;
  lastUpdated: string;
}

export type ContentType = 'BLOG' | 'NEWS';
export type ContentStatus = 'Draft' | 'Published';

export interface ContentPost {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  image: string;
  category?: string;
  status: ContentStatus;
  createdAt: string;
}

export type RequestType = 'Sourcing' | 'Shipping' | 'Inspection' | 'Support';

export interface SupportRequest {
  id: string;
  clientId?: string;
  companyName: string;
  email?: string;
  type: RequestType;
  details: string;
  formData: any;
  status: 'Pending Review' | 'In Progress' | 'Completed' | 'Closed';
  assignedTo?: string; // Admin ID
  adminNotes?: string;
  createdAt: string;
}
