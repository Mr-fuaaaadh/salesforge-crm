import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  CheckCircle2,
  Eye,
  EyeOff,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { SiGoogle } from "react-icons/si";

export function ProfileTab() {
  const [showPw, setShowPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [twoFa, setTwoFa] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const connectedAccounts = [
    {
      icon: <SiGoogle size={14} />,
      name: "Google",
      email: "alex@gmail.com",
      connected: true,
    },
    {
      icon: <Linkedin size={14} />,
      name: "LinkedIn",
      email: "linkedin.com/in/alexrivera",
      connected: true,
    },
    {
      icon: <Github size={14} />,
      name: "GitHub",
      email: "Not connected",
      connected: false,
    },
  ];

  return (
    <div className="space-y-5">
      <Card className="p-6 border border-border/60 space-y-6">
        <div>
          <h3 className="font-display font-semibold text-base">
            Personal Information
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Update your profile details and public info.
          </p>
        </div>
        <Separator />
        <div className="flex items-center gap-5">
          <div className="relative group cursor-pointer">
            <UserAvatar name="Alex Rivera" size="lg" online />
            <div className="absolute inset-0 rounded-full bg-foreground/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
              <Camera size={14} className="text-background" />
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              data-ocid="settings.profile.avatar.upload_button"
              className="h-8 text-xs"
            >
              Upload Photo
            </Button>
            <p className="text-[11px] text-muted-foreground mt-1">
              JPG, PNG or GIF · Max 2 MB
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Full Name</Label>
            <Input
              defaultValue="Alex Rivera"
              className="h-9"
              data-ocid="settings.profile.full_name.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Job Title</Label>
            <Input
              defaultValue="Senior Account Executive"
              className="h-9"
              data-ocid="settings.profile.job_title.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Email</Label>
            <Input
              type="email"
              defaultValue="alex@salesforge.io"
              className="h-9"
              data-ocid="settings.profile.email.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Phone</Label>
            <Input
              defaultValue="+1 (555) 234-5678"
              className="h-9"
              data-ocid="settings.profile.phone.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Location</Label>
            <Input
              defaultValue="New York, NY"
              className="h-9"
              data-ocid="settings.profile.location.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Timezone</Label>
            <Input
              defaultValue="UTC-5 (Eastern Time)"
              className="h-9"
              data-ocid="settings.profile.timezone.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Language</Label>
            <Input
              defaultValue="English (US)"
              className="h-9"
              data-ocid="settings.profile.language.input"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs font-medium">Bio</Label>
            <Textarea
              defaultValue="Experienced sales professional with 8+ years in SaaS. Focused on enterprise deals and long-term client relationships."
              rows={3}
              className="resize-none text-sm"
              data-ocid="settings.profile.bio.textarea"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            onClick={handleSave}
            data-ocid="settings.profile.save.submit_button"
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

      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">
            Change Password
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Use a strong password you don't reuse.
          </p>
        </div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs font-medium">Current Password</Label>
            <div className="relative">
              <Input
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                className="h-9 pr-9"
                data-ocid="settings.profile.current_password.input"
              />
              <button
                type="button"
                onClick={() => setShowPw((p) => !p)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle password"
              >
                {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">New Password</Label>
            <div className="relative">
              <Input
                type={showNewPw ? "text" : "password"}
                placeholder="••••••••"
                className="h-9 pr-9"
                data-ocid="settings.profile.new_password.input"
              />
              <button
                type="button"
                onClick={() => setShowNewPw((p) => !p)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle new password"
              >
                {showNewPw ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Confirm New Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="h-9"
              data-ocid="settings.profile.confirm_password.input"
            />
          </div>
        </div>
        <div className="flex justify-end max-w-lg">
          <Button
            size="sm"
            variant="outline"
            data-ocid="settings.profile.change_password.submit_button"
            className="h-9"
          >
            Update Password
          </Button>
        </div>
      </Card>

      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">Security</h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Manage two-factor auth and connected accounts.
          </p>
        </div>
        <Separator />
        <div className="flex items-center justify-between py-1">
          <div>
            <p className="text-sm font-medium">Two-Factor Authentication</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Add an extra layer of security to your account
            </p>
          </div>
          <div className="flex items-center gap-2">
            {twoFa && (
              <Badge
                variant="secondary"
                className="text-[10px] h-5 bg-success/10 text-success border-success/20"
              >
                Active
              </Badge>
            )}
            <Switch
              checked={twoFa}
              onCheckedChange={setTwoFa}
              data-ocid="settings.profile.two_fa.switch"
            />
          </div>
        </div>
        <Separator />
        <div>
          <p className="text-sm font-medium mb-3">Connected Accounts</p>
          <div className="space-y-2">
            {connectedAccounts.map((acc) => (
              <div
                key={acc.name}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/40"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-muted-foreground">{acc.icon}</span>
                  <div>
                    <p className="text-xs font-medium">{acc.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {acc.email}
                    </p>
                  </div>
                </div>
                <Button
                  variant={acc.connected ? "outline" : "secondary"}
                  size="sm"
                  className="h-7 text-xs"
                  data-ocid={`settings.profile.connected_${acc.name.toLowerCase()}.button`}
                >
                  {acc.connected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
