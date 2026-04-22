import {
  mockCalendarEvents,
  mockCustomers,
  mockDeals,
  mockLeads,
  mockMessages,
  mockNotifications,
  mockTasks,
  mockTeamMembers,
} from "@/lib/mock-data";
import type {
  CalendarEvent,
  Customer,
  Deal,
  DealStage,
  Lead,
  LeadStatus,
  Message,
  Notification,
  Task,
  TeamMember,
} from "@/types";
import { create } from "zustand";

interface CrmState {
  leads: Lead[];
  deals: Deal[];
  customers: Customer[];
  tasks: Task[];
  notifications: Notification[];
  teamMembers: TeamMember[];
  calendarEvents: CalendarEvent[];
  messages: Message[];

  // Computed
  unreadCount: () => number;
  overdueTasks: () => Task[];

  // Lead actions
  addLead: (lead: Lead) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  updateLeadStatus: (id: string, status: LeadStatus) => void;

  // Deal actions
  moveDeal: (dealId: string, stage: DealStage) => void;
  addDeal: (deal: Deal) => void;
  updateDeal: (id: string, updates: Partial<Deal>) => void;

  // Task actions
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  toggleTaskComplete: (id: string) => void;
  deleteTask: (id: string) => void;

  // Notification actions
  markNotificationRead: (id: string) => void;
  markAllRead: () => void;

  // Customer actions
  addCustomer: (customer: Customer) => void;
  updateCustomer: (id: string, updates: Partial<Customer>) => void;

  // Calendar actions
  addCalendarEvent: (event: CalendarEvent) => void;
  updateCalendarEvent: (id: string, updates: Partial<CalendarEvent>) => void;
  deleteCalendarEvent: (id: string) => void;

  // Message actions
  addMessage: (message: Message) => void;
}

export const useCrmStore = create<CrmState>((set, get) => ({
  leads: mockLeads,
  deals: mockDeals,
  customers: mockCustomers,
  tasks: mockTasks,
  notifications: mockNotifications,
  teamMembers: mockTeamMembers,
  calendarEvents: mockCalendarEvents,
  messages: mockMessages,

  unreadCount: () => get().notifications.filter((n) => !n.read).length,

  overdueTasks: () =>
    get().tasks.filter(
      (t) =>
        t.status === "Overdue" ||
        (t.status !== "Completed" && new Date(t.dueDate) < new Date()),
    ),

  addLead: (lead) => set((state) => ({ leads: [lead, ...state.leads] })),
  updateLead: (id, updates) =>
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, ...updates } : l)),
    })),
  deleteLead: (id) =>
    set((state) => ({ leads: state.leads.filter((l) => l.id !== id) })),
  updateLeadStatus: (id, status) =>
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, status } : l)),
    })),

  moveDeal: (dealId, stage) =>
    set((state) => ({
      deals: state.deals.map((d) => (d.id === dealId ? { ...d, stage } : d)),
    })),
  addDeal: (deal) => set((state) => ({ deals: [deal, ...state.deals] })),
  updateDeal: (id, updates) =>
    set((state) => ({
      deals: state.deals.map((d) => (d.id === id ? { ...d, ...updates } : d)),
    })),

  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
  toggleTaskComplete: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "Completed" ? "Pending" : "Completed" }
          : t,
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n,
      ),
    })),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),

  addCustomer: (customer) =>
    set((state) => ({ customers: [customer, ...state.customers] })),
  updateCustomer: (id, updates) =>
    set((state) => ({
      customers: state.customers.map((c) =>
        c.id === id ? { ...c, ...updates } : c,
      ),
    })),

  addCalendarEvent: (event) =>
    set((state) => ({ calendarEvents: [event, ...state.calendarEvents] })),
  updateCalendarEvent: (id, updates) =>
    set((state) => ({
      calendarEvents: state.calendarEvents.map((e) =>
        e.id === id ? { ...e, ...updates } : e,
      ),
    })),
  deleteCalendarEvent: (id) =>
    set((state) => ({
      calendarEvents: state.calendarEvents.filter((e) => e.id !== id),
    })),

  addMessage: (message) =>
    set((state) => ({ messages: [message, ...state.messages] })),
}));
