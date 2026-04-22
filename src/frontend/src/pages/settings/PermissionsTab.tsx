import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Action = "View" | "Create" | "Edit" | "Delete";
type RoleKey = "admin" | "manager" | "rep" | "viewer";

const ROLES: { key: RoleKey; label: string; color: string }[] = [
  { key: "admin", label: "Admin", color: "text-destructive" },
  { key: "manager", label: "Sales Manager", color: "text-primary" },
  { key: "rep", label: "Sales Rep", color: "text-accent" },
  { key: "viewer", label: "Viewer", color: "text-muted-foreground" },
];

const ACTIONS: Action[] = ["View", "Create", "Edit", "Delete"];

const FEATURES = [
  "Leads",
  "Deals",
  "Customers",
  "Reports",
  "Settings",
  "Team",
  "Calendar",
  "Messages",
];

type PermMatrix = Record<string, Record<RoleKey, Record<Action, boolean>>>;

function buildDefault(): PermMatrix {
  const m: PermMatrix = {};
  for (const feat of FEATURES) {
    m[feat] = {} as Record<RoleKey, Record<Action, boolean>>;
    for (const role of ROLES) {
      m[feat][role.key] = {
        View: true,
        Create: role.key !== "viewer",
        Edit: role.key !== "viewer",
        Delete: role.key === "admin" || role.key === "manager",
      };
    }
  }
  return m;
}

export function PermissionsTab() {
  const [matrix, setMatrix] = useState<PermMatrix>(buildDefault);

  function toggle(feat: string, role: RoleKey, action: Action) {
    setMatrix((prev) => ({
      ...prev,
      [feat]: {
        ...prev[feat],
        [role]: { ...prev[feat][role], [action]: !prev[feat][role][action] },
      },
    }));
  }

  function toggleRow(feat: string, val: boolean) {
    setMatrix((prev) => {
      const updated = { ...prev[feat] };
      for (const role of ROLES) {
        updated[role.key] = { View: val, Create: val, Edit: val, Delete: val };
      }
      return { ...prev, [feat]: updated };
    });
  }

  function toggleCol(role: RoleKey, val: boolean) {
    setMatrix((prev) => {
      const updated = { ...prev };
      for (const feat of FEATURES) {
        updated[feat] = {
          ...updated[feat],
          [role]: { View: val, Create: val, Edit: val, Delete: val },
        };
      }
      return updated;
    });
  }

  function isColAllOn(role: RoleKey) {
    return FEATURES.every((f) => ACTIONS.every((a) => matrix[f][role][a]));
  }

  function isRowAllOn(feat: string) {
    return ROLES.every((r) => ACTIONS.every((a) => matrix[feat][r.key][a]));
  }

  return (
    <div className="space-y-5">
      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">
            Permissions Matrix
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Configure granular access for each role across all CRM features.
          </p>
        </div>
        <Separator />
        {/* Legend */}
        <div className="flex items-center gap-3 flex-wrap">
          {ACTIONS.map((a) => (
            <div key={a} className="flex items-center gap-1.5">
              <Checkbox
                checked={true}
                onCheckedChange={() => {}}
                className="w-3.5 h-3.5"
              />
              <span className="text-[11px] text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
        {/* Scrollable table */}
        <div className="overflow-x-auto -mx-1 px-1">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground">
                <th className="text-left font-medium pb-3 pr-4 w-36">
                  Feature
                </th>
                <th className="text-center pb-3 pr-2 w-12 text-[10px] text-muted-foreground">
                  All
                </th>
                {ROLES.map((role) => (
                  <th key={role.key} className="pb-3 px-2" colSpan={4}>
                    <div className="flex flex-col items-center gap-1">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] h-5 px-2", role.color)}
                      >
                        {role.label}
                      </Badge>
                      <div className="flex gap-1 text-[9px] text-muted-foreground">
                        {ACTIONS.map((a) => (
                          <span key={a} className="w-5 text-center">
                            {a[0]}
                          </span>
                        ))}
                      </div>
                      {/* Toggle all column */}
                      <Checkbox
                        checked={isColAllOn(role.key)}
                        onCheckedChange={(v) => toggleCol(role.key, !!v)}
                        className="w-3 h-3"
                        aria-label={`Toggle all ${role.label}`}
                        data-ocid={`settings.permissions.col_${role.key}.checkbox`}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feat, fi) => (
                <tr
                  key={feat}
                  data-ocid={`settings.permissions.row.${fi + 1}`}
                  className={cn(
                    "border-t border-border/30",
                    fi % 2 === 0 ? "bg-muted/10" : "",
                  )}
                >
                  <td className="py-2.5 pr-4 text-sm font-medium">{feat}</td>
                  <td className="py-2.5 pr-2 text-center">
                    <Checkbox
                      checked={isRowAllOn(feat)}
                      onCheckedChange={(v) => toggleRow(feat, !!v)}
                      className="w-3.5 h-3.5"
                      aria-label={`Toggle all ${feat}`}
                      data-ocid={`settings.permissions.row_all_${feat.toLowerCase()}.checkbox`}
                    />
                  </td>
                  {ROLES.map((role) =>
                    ACTIONS.map((action) => (
                      <td
                        key={`${role.key}-${action}`}
                        className="py-2.5 px-1.5 text-center"
                      >
                        <Checkbox
                          checked={matrix[feat][role.key][action]}
                          onCheckedChange={() => toggle(feat, role.key, action)}
                          className="w-3.5 h-3.5"
                          aria-label={`${role.label} ${action} ${feat}`}
                          data-ocid={`settings.permissions.${feat.toLowerCase()}_${role.key}_${action.toLowerCase()}.checkbox`}
                        />
                      </td>
                    )),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            className="h-9 px-5"
            data-ocid="settings.permissions.save.submit_button"
          >
            Save Permissions
          </Button>
        </div>
      </Card>
    </div>
  );
}
