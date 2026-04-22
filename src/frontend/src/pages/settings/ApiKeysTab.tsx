import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Check,
  Copy,
  ExternalLink,
  Plus,
  Trash2,
  Webhook,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ApiKey {
  id: string;
  name: string;
  preview: string;
  created: string;
  lastUsed: string;
  active: boolean;
}

const initialKeys: ApiKey[] = [
  {
    id: "k-1",
    name: "Production API Key",
    preview: "sf_prod_••••••••••••4f2a",
    created: "Jan 10, 2026",
    lastUsed: "2 hours ago",
    active: true,
  },
  {
    id: "k-2",
    name: "Development API Key",
    preview: "sf_dev_••••••••••••9e1c",
    created: "Feb 3, 2026",
    lastUsed: "5 days ago",
    active: true,
  },
  {
    id: "k-3",
    name: "Zapier Integration Key",
    preview: "sf_int_••••••••••••2b8d",
    created: "Mar 15, 2026",
    lastUsed: "1 day ago",
    active: false,
  },
];

const webhooks = [
  {
    id: "wh-1",
    name: "Lead Created",
    url: "https://hooks.zapier.com/abc/123",
    active: true,
  },
  {
    id: "wh-2",
    name: "Deal Closed",
    url: "https://hooks.slack.com/services/xyz",
    active: true,
  },
];

const GENERATED_KEY = "sf_prod_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2";

export function ApiKeysTab() {
  const [keys, setKeys] = useState<ApiKey[]>(initialKeys);
  const [showModal, setShowModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [revokeTarget, setRevokeTarget] = useState<string | null>(null);

  function generateKey() {
    if (!newKeyName.trim()) return;
    setGeneratedKey(GENERATED_KEY);
    setKeys((p) => [
      ...p,
      {
        id: `k-${Date.now()}`,
        name: newKeyName,
        preview: `sf_prod_••••••••••••${Math.random().toString(36).slice(-4)}`,
        created: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        lastUsed: "Never",
        active: true,
      },
    ]);
  }

  function copyKey() {
    navigator.clipboard.writeText(generatedKey).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  }

  function revokeKey(id: string) {
    setKeys((p) => p.filter((k) => k.id !== id));
    setRevokeTarget(null);
    toast.success("API key revoked");
  }

  function closeModal() {
    setShowModal(false);
    setNewKeyName("");
    setGeneratedKey("");
    setCopied(false);
  }

  return (
    <div className="space-y-5">
      {/* Keys table */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-semibold text-base">API Keys</h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage programmatic access credentials.
            </p>
          </div>
          <Button
            size="sm"
            className="h-9 gap-1.5"
            onClick={() => setShowModal(true)}
            data-ocid="settings.api.generate.button"
          >
            <Plus size={13} /> Generate Key
          </Button>
        </div>
        <Separator />
        <div className="space-y-2">
          {keys.map((k, i) => (
            <div
              key={k.id}
              data-ocid={`settings.api.item.${i + 1}`}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-2xl border border-border/50 bg-muted/20 hover:border-border/80 transition-smooth group"
            >
              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{k.name}</span>
                  <Badge
                    variant={k.active ? "secondary" : "outline"}
                    className={cn(
                      "text-[10px] h-4 px-1.5",
                      k.active
                        ? "bg-success/10 text-success border-success/20"
                        : "",
                    )}
                  >
                    {k.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p className="text-xs font-mono text-muted-foreground">
                  {k.preview}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <span>Created: {k.created}</span>
                <span>Used: {k.lastUsed}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs gap-1"
                  data-ocid={`settings.api.copy.${i + 1}`}
                  onClick={() =>
                    toast.info("Key preview only — regenerate to get full key")
                  }
                >
                  <Copy size={11} /> Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                  onClick={() => setRevokeTarget(k.id)}
                  data-ocid={`settings.api.delete_button.${i + 1}`}
                  aria-label="Revoke key"
                >
                  <Trash2 size={13} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-warning/10 border border-warning/20">
          <AlertTriangle size={14} className="text-warning shrink-0" />
          <p className="text-xs text-muted-foreground">
            API keys grant full access to your account. Never share or commit
            them to version control.
          </p>
        </div>
      </Card>

      {/* Webhooks */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Webhook size={16} className="text-muted-foreground" />
            <div>
              <h3 className="font-display font-semibold text-base">
                Webhook URLs
              </h3>
              <p className="text-xs text-muted-foreground">
                Receive real-time events at your endpoints.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs gap-1.5"
            data-ocid="settings.api.webhook_add.button"
          >
            <Plus size={11} /> Add Webhook
          </Button>
        </div>
        <Separator />
        <div className="space-y-2">
          {webhooks.map((wh, i) => (
            <div
              key={wh.id}
              data-ocid={`settings.api.webhook.${i + 1}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/40"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold">{wh.name}</p>
                <p className="text-[11px] font-mono text-muted-foreground truncate">
                  {wh.url}
                </p>
              </div>
              <Badge
                variant="secondary"
                className={cn(
                  "text-[10px] h-4 shrink-0",
                  wh.active
                    ? "bg-success/10 text-success border-success/20"
                    : "",
                )}
              >
                {wh.active ? "Active" : "Inactive"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Docs link */}
      <Card className="p-4 border border-border/60 bg-primary/5 border-primary/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">API Documentation</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Full reference, SDKs, and code examples.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs gap-1.5 shrink-0"
            data-ocid="settings.api.docs.link"
          >
            <ExternalLink size={11} /> View Docs
          </Button>
        </div>
      </Card>

      {/* Generate key modal */}
      <Dialog
        open={showModal}
        onOpenChange={(v) => {
          if (!v) closeModal();
        }}
      >
        <DialogContent
          className="max-w-md"
          data-ocid="settings.api.generate.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display">
              {generatedKey ? "Your new API key" : "Generate API Key"}
            </DialogTitle>
            <DialogDescription>
              {generatedKey
                ? "Copy this key now — it will never be shown again."
                : "Give your key a descriptive name to identify it later."}
            </DialogDescription>
          </DialogHeader>
          {!generatedKey ? (
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <Label className="text-xs">Key Name</Label>
                <Input
                  placeholder="e.g. Zapier Integration"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className="h-9"
                  data-ocid="settings.api.key_name.input"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={closeModal}
                  data-ocid="settings.api.generate.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={generateKey}
                  disabled={!newKeyName.trim()}
                  data-ocid="settings.api.generate.confirm_button"
                >
                  Generate
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div className="p-3 rounded-xl bg-muted border border-border font-mono text-xs text-foreground break-all select-all">
                {generatedKey}
              </div>
              <Button
                className="w-full h-9 gap-2"
                onClick={copyKey}
                data-ocid="settings.api.copy_generated.button"
              >
                {copied ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy to Clipboard
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full h-9"
                onClick={closeModal}
                data-ocid="settings.api.generate.close_button"
              >
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Revoke confirmation */}
      <Dialog
        open={!!revokeTarget}
        onOpenChange={(v) => {
          if (!v) setRevokeTarget(null);
        }}
      >
        <DialogContent
          className="max-w-sm"
          data-ocid="settings.api.revoke.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-destructive">
              Revoke API Key
            </DialogTitle>
            <DialogDescription>
              This action is irreversible. Any integrations using this key will
              stop working immediately.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRevokeTarget(null)}
              data-ocid="settings.api.revoke.cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => revokeTarget && revokeKey(revokeTarget)}
              data-ocid="settings.api.revoke.confirm_button"
            >
              Revoke Key
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
