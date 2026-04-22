export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Won"
  | "Lost";

export type Priority = "Low" | "Medium" | "High" | "Urgent";

export type DealStage =
  | "Prospect"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Contract"
  | "Won"
  | "Lost";

export type TaskType =
  | "Call"
  | "Email"
  | "Follow-up"
  | "Meeting"
  | "Proposal"
  | "Reminder";

export type TaskStatus = "Pending" | "InProgress" | "Completed" | "Overdue";

export type NotificationType = "lead" | "reminder" | "deal" | "team" | "system";

export type MessageChannel = "Email" | "Call" | "WhatsApp" | "SMS" | "Note";

export type LifecycleStage =
  | "Subscriber"
  | "Lead"
  | "MQL"
  | "SQL"
  | "Opportunity"
  | "Customer"
  | "Evangelist";

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: LeadStatus;
  assignedTo: string;
  dealValue: number;
  priority: Priority;
  lastContact: string;
  nextFollowUp: string;
  tags: string[];
  notes: string;
}

export interface DealTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Deal {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  contact: string;
  value: number;
  probability: number;
  expectedCloseDate: string;
  stage: DealStage;
  owner: string;
  notes: string;
  tasks: DealTask[];
  attachments: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  avatar: string;
  lifecycleStage: LifecycleStage;
  totalRevenue: number;
  dealsCount: number;
  lastInteraction: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  dealsClosedThisMonth: number;
  totalRevenue: number;
  callsMade: number;
  meetingsHeld: number;
  conversionRate: number;
  monthlyTarget: number;
  commission: number;
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
  assignedTo: string;
  relatedTo: string;
  notes: string;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  avatar?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: string;
  start: string;
  end: string;
  attendees: string[];
  description: string;
  recurring: boolean;
  customerId?: string;
  dealId?: string;
}

export interface Message {
  id: string;
  channel: MessageChannel;
  from: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
  status: string;
  attachments: string[];
}

export interface Report {
  id: string;
  name: string;
  type: string;
  dateRange: string;
  filters: Record<string, string>;
  data: unknown;
}

export interface ActivityFeedItem {
  id: string;
  type: string;
  description: string;
  user: string;
  timestamp: string;
  relatedTo?: string;
}
