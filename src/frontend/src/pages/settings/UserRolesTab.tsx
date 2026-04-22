import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Edit2, Plus, Shield, Trash2, Users } from "lucide-react";
import { useState } from "react";

interface Role {
  id: string;
  name: string;
  description: string;
  members: number;
  color: string;
  system: boolean;
}

const initialRoles: Role[] = [
  {
    id: "r-1",
    name: "Admin",
    description: "Full access to all features and settings.",
    members: 2,
    color: "bg-destructive/10 text-destructive border-destructive/20",
    system: true,
  },
  {
    id: "r-2",
    name: "Sales Manager",
    description: "Manage team members, view all deals and reports.",
    members: 4,
    color: "bg-primary/10 text-primary border-primary/20",
    system: true,
  },
  {
    id: "r-3",
    name: "Sales Rep",
    description: "Access assigned leads, deals, tasks and customers.",
    members: 14,
    color: "bg-accent/10 text-accent border-accent/20",
    system: true,
  },
  {
    id: "r-4",
    name: "Viewer",
    description: "Read-only access to dashboards and reports.",
    members: 6,
    color: "bg-muted text-muted-foreground border-border",
    system: true,
  },
  {
    id: "r-5",
    name: "Finance",
    description: "Access billing, invoices and revenue reports.",
    members: 2,
    color: "bg-warning/10 text-warning border-warning/20",
    system: false,
  },
];

export function UserRolesTab() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  function addRole() {
    setRoles((p) => [
      ...p,
      {
        id: `r-${Date.now()}`,
        name: "New Role",
        description: "Custom role with configurable permissions.",
        members: 0,
        color: "bg-muted text-muted-foreground border-border",
        system: false,
      },
    ]);
  }

  return (
    <div className="space-y-5">
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-semibold text-base">User Roles</h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Define roles and their access levels. Configure permissions in the
              Permissions tab.
            </p>
          </div>
          <Button
            size="sm"
            className="h-9 gap-1.5"
            onClick={addRole}
            data-ocid="settings.roles.add.button"
          >
            <Plus size={13} /> New Role
          </Button>
        </div>
        <Separator />
        <div className="space-y-3">
          {roles.map((role, i) => (
            <div
              key={role.id}
              data-ocid={`settings.roles.item.${i + 1}`}
              className="flex items-start sm:items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:border-border transition-smooth group"
            >
              <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center shrink-0">
                <Shield size={18} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold">{role.name}</span>
                  <Badge
                    variant="outline"
                    className={cn("text-[10px] h-4 px-1.5", role.color)}
                  >
                    {role.system ? "System" : "Custom"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {role.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                <Users size={12} />
                <span>
                  {role.members} {role.members === 1 ? "member" : "members"}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-smooth">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  data-ocid={`settings.roles.edit.${i + 1}`}
                  aria-label="Edit role"
                >
                  <Edit2 size={13} />
                </Button>
                {!role.system && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 hover:text-destructive"
                    onClick={() =>
                      setRoles((p) => p.filter((r) => r.id !== role.id))
                    }
                    data-ocid={`settings.roles.delete_button.${i + 1}`}
                    aria-label="Delete role"
                  >
                    <Trash2 size={13} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
