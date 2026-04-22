import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Building2, CheckCircle2, Upload } from "lucide-react";
import { useState } from "react";

export function CompanyTab() {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="space-y-5">
      {/* Identity */}
      <Card className="p-6 border border-border/60 space-y-6">
        <div>
          <h3 className="font-display font-semibold text-base">
            Company Identity
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Basic info used across the platform.
          </p>
        </div>
        <Separator />
        {/* Logo upload */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center shrink-0">
            <Building2 size={28} className="text-muted-foreground" />
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs gap-1.5"
              data-ocid="settings.company.logo.upload_button"
            >
              <Upload size={12} /> Upload Logo
            </Button>
            <p className="text-[11px] text-muted-foreground mt-1">
              SVG, PNG · Recommended 256×256 px
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs font-medium">Company Name</Label>
            <Input
              defaultValue="SalesForge Inc."
              className="h-9"
              data-ocid="settings.company.name.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Industry</Label>
            <Input
              defaultValue="SaaS / Technology"
              className="h-9"
              data-ocid="settings.company.industry.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Company Size</Label>
            <Input
              defaultValue="50–100 employees"
              className="h-9"
              data-ocid="settings.company.size.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Website</Label>
            <Input
              defaultValue="https://salesforge.io"
              className="h-9"
              data-ocid="settings.company.website.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Company Phone</Label>
            <Input
              defaultValue="+1 (415) 555-0100"
              className="h-9"
              data-ocid="settings.company.phone.input"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs font-medium">Address</Label>
            <Input
              defaultValue="350 Market St, Suite 1200, San Francisco, CA 94105"
              className="h-9"
              data-ocid="settings.company.address.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Tax / VAT ID</Label>
            <Input
              defaultValue="US-45-1234567"
              className="h-9"
              data-ocid="settings.company.tax_id.input"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            onClick={handleSave}
            data-ocid="settings.company.save.submit_button"
            className="h-9 px-5"
          >
            {saved ? (
              <>
                <CheckCircle2 size={14} className="mr-1.5" /> Saved
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </Card>

      {/* CRM Configuration */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">
            CRM Configuration
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Customize how the CRM works for your team.
          </p>
        </div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Fiscal Year Start</Label>
            <Input
              defaultValue="January 1"
              className="h-9"
              data-ocid="settings.company.fiscal_year.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Default Currency</Label>
            <Input
              defaultValue="USD ($)"
              className="h-9"
              data-ocid="settings.company.currency.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Date Format</Label>
            <Input
              defaultValue="MM/DD/YYYY"
              className="h-9"
              data-ocid="settings.company.date_format.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Time Format</Label>
            <Input
              defaultValue="12h (AM/PM)"
              className="h-9"
              data-ocid="settings.company.time_format.input"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            variant="outline"
            data-ocid="settings.company.crm_save.submit_button"
            className="h-9"
          >
            Save Config
          </Button>
        </div>
      </Card>

      {/* Business Hours */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">
            Business Hours
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Set working hours for scheduling and notifications.
          </p>
        </div>
        <Separator />
        <div className="space-y-2">
          {["Monday–Friday", "Saturday", "Sunday"].map((day, i) => (
            <div key={day} className="flex items-center gap-4 py-1.5">
              <span className="text-sm w-32 shrink-0">{day}</span>
              {i === 0 ? (
                <>
                  <Input defaultValue="09:00 AM" className="h-8 text-xs w-28" />
                  <span className="text-muted-foreground text-xs">to</span>
                  <Input defaultValue="06:00 PM" className="h-8 text-xs w-28" />
                </>
              ) : (
                <span className="text-xs text-muted-foreground italic">
                  Closed
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            variant="outline"
            data-ocid="settings.company.hours_save.submit_button"
            className="h-9"
          >
            Save Hours
          </Button>
        </div>
      </Card>
    </div>
  );
}
