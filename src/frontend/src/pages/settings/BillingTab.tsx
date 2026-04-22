import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  CreditCard,
  Download,
  FileText,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For small sales teams just getting started.",
    features: [
      "Up to 5 users",
      "500 leads/mo",
      "1 GB storage",
      "Email support",
      "Basic reports",
    ],
    current: false,
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$79",
    period: "/mo",
    description: "The complete CRM for growing sales teams.",
    features: [
      "Up to 25 users",
      "Unlimited leads",
      "25 GB storage",
      "Priority support",
      "Advanced analytics",
      "API access",
      "Integrations",
    ],
    current: true,
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited users",
      "Unlimited everything",
      "Dedicated storage",
      "24/7 SLA support",
      "Custom integrations",
      "SSO / SAML",
      "Dedicated CSM",
    ],
    current: false,
    highlight: false,
  },
];

const HISTORY = [
  {
    id: "inv-001",
    date: "Apr 1, 2026",
    description: "Professional Plan — April 2026",
    amount: "$79.00",
    status: "Paid",
  },
  {
    id: "inv-002",
    date: "Mar 1, 2026",
    description: "Professional Plan — March 2026",
    amount: "$79.00",
    status: "Paid",
  },
  {
    id: "inv-003",
    date: "Feb 1, 2026",
    description: "Professional Plan — February 2026",
    amount: "$79.00",
    status: "Paid",
  },
  {
    id: "inv-004",
    date: "Jan 1, 2026",
    description: "Professional Plan — January 2026",
    amount: "$79.00",
    status: "Paid",
  },
  {
    id: "inv-005",
    date: "Dec 1, 2025",
    description: "Starter Plan + Upgrade",
    amount: "$50.00",
    status: "Paid",
  },
];

const USAGE = [
  {
    label: "Team Members",
    used: 14,
    limit: 25,
    icon: <Users size={14} />,
    unit: "users",
  },
  {
    label: "Leads",
    used: 8340,
    limit: 999999,
    icon: <Zap size={14} />,
    unit: "leads",
    unlim: true,
  },
  {
    label: "Storage",
    used: 11.2,
    limit: 25,
    icon: <FileText size={14} />,
    unit: "GB",
  },
];

export function BillingTab() {
  return (
    <div className="space-y-5">
      {/* Current plan */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-base">
                Current Plan
              </h3>
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                Professional
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              $79/month · Renews May 1, 2026
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs gap-1.5 shrink-0"
            data-ocid="settings.billing.manage.button"
          >
            <CreditCard size={12} /> Manage Plan
          </Button>
        </div>
        <Separator />
        {/* Usage */}
        <div className="space-y-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Usage this cycle
          </p>
          {USAGE.map((u) => (
            <div key={u.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">{u.icon}</span>
                  <span className="font-medium">{u.label}</span>
                </div>
                <span className="text-muted-foreground">
                  {u.unlim
                    ? `${u.used.toLocaleString()} (Unlimited)`
                    : `${typeof u.used === "number" && u.used < 100 ? u.used : u.used.toLocaleString()} / ${u.limit} ${u.unit}`}
                </span>
              </div>
              <Progress
                value={u.unlim ? 30 : (u.used / u.limit) * 100}
                className="h-1.5"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Plan comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <Card
            key={plan.id}
            data-ocid={`settings.billing.plan_${plan.id}.card`}
            className={cn(
              "p-5 border transition-smooth",
              plan.highlight
                ? "border-primary/40 bg-primary/5 shadow-elevation"
                : "border-border/50",
            )}
          >
            {plan.highlight && (
              <div className="flex items-center gap-1 text-[10px] text-primary font-semibold mb-2">
                <Sparkles size={11} /> CURRENT PLAN
              </div>
            )}
            <div className="mb-3">
              <p className="font-display font-bold text-base">{plan.name}</p>
              <div className="flex items-baseline gap-0.5 mt-1">
                <span className="text-2xl font-display font-bold">
                  {plan.price}
                </span>
                <span className="text-xs text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                {plan.description}
              </p>
            </div>
            <ul className="space-y-1.5 mb-4">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle2 size={11} className="text-success shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.current ? "outline" : "default"}
              size="sm"
              className="w-full h-8 text-xs"
              disabled={plan.current}
              data-ocid={`settings.billing.${plan.id}.button`}
            >
              {plan.current
                ? "Current Plan"
                : plan.id === "enterprise"
                  ? "Contact Sales"
                  : "Upgrade"}
            </Button>
          </Card>
        ))}
      </div>

      {/* Payment method */}
      <Card className="p-6 border border-border/60 space-y-4">
        <h3 className="font-display font-semibold text-base">Payment Method</h3>
        <Separator />
        <div className="flex items-center gap-4">
          <div className="w-12 h-8 rounded-lg bg-muted border border-border flex items-center justify-center">
            <CreditCard size={16} className="text-muted-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Visa ending in 4242</p>
            <p className="text-xs text-muted-foreground">Expires 08/2028</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs"
            data-ocid="settings.billing.update_card.button"
          >
            Update Card
          </Button>
        </div>
      </Card>

      {/* Billing history */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-base">
            Billing History
          </h3>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs gap-1.5"
            data-ocid="settings.billing.download_all.button"
          >
            <Download size={11} /> Download All
          </Button>
        </div>
        <Separator />
        <div className="overflow-x-auto -mx-1 px-1">
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b border-border/40">
                <th className="text-left font-medium pb-2 pr-4">Date</th>
                <th className="text-left font-medium pb-2 pr-4">Description</th>
                <th className="text-right font-medium pb-2 pr-4">Amount</th>
                <th className="text-center font-medium pb-2 pr-4">Status</th>
                <th className="text-right font-medium pb-2">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((inv, i) => (
                <tr
                  key={inv.id}
                  data-ocid={`settings.billing.invoice.${i + 1}`}
                  className="border-b border-border/20 hover:bg-muted/20 transition-smooth"
                >
                  <td className="py-3 pr-4 text-xs text-muted-foreground">
                    {inv.date}
                  </td>
                  <td className="py-3 pr-4 text-xs">{inv.description}</td>
                  <td className="py-3 pr-4 text-xs text-right font-mono font-medium">
                    {inv.amount}
                  </td>
                  <td className="py-3 pr-4 text-center">
                    <Badge
                      variant="secondary"
                      className="text-[10px] h-4 px-1.5 bg-success/10 text-success border-success/20"
                    >
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="py-3 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                      data-ocid={`settings.billing.download_invoice.${i + 1}`}
                      aria-label="Download invoice"
                    >
                      <Download size={12} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
