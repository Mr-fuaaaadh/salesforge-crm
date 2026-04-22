import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Stage {
  id: string;
  name: string;
  color: string;
  probability?: number;
  isWin?: boolean;
  isLoss?: boolean;
}

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#64748b",
];

const initialLeadStages: Stage[] = [
  { id: "ls-1", name: "New", color: "#6366f1" },
  { id: "ls-2", name: "Contacted", color: "#8b5cf6" },
  { id: "ls-3", name: "Qualified", color: "#06b6d4" },
  { id: "ls-4", name: "Proposal Sent", color: "#f59e0b" },
  { id: "ls-5", name: "Negotiation", color: "#ec4899" },
];

const initialDealStages: Stage[] = [
  { id: "ds-1", name: "Prospect", color: "#6366f1", probability: 10 },
  { id: "ds-2", name: "Qualified", color: "#8b5cf6", probability: 25 },
  { id: "ds-3", name: "Proposal", color: "#06b6d4", probability: 50 },
  { id: "ds-4", name: "Negotiation", color: "#f59e0b", probability: 70 },
  { id: "ds-5", name: "Contract", color: "#10b981", probability: 90 },
  { id: "ds-6", name: "Won", color: "#10b981", probability: 100, isWin: true },
  { id: "ds-7", name: "Lost", color: "#ef4444", probability: 0, isLoss: true },
];

function StageRow({
  stage,
  showProb,
  onDelete,
  onRename,
  onColorChange,
  onProbChange,
  onWinToggle,
  onLossToggle,
}: {
  stage: Stage;
  showProb: boolean;
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onColorChange: (id: string, color: string) => void;
  onProbChange?: (id: string, val: number) => void;
  onWinToggle?: (id: string) => void;
  onLossToggle?: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/40 group hover:border-border/80 transition-smooth">
      <GripVertical
        size={14}
        className="text-muted-foreground cursor-grab shrink-0"
      />
      {/* Color picker */}
      <div className="relative shrink-0">
        <div
          className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer"
          style={{ backgroundColor: stage.color }}
        />
        <input
          type="color"
          value={stage.color}
          onChange={(e) => onColorChange(stage.id, e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-6 h-6 rounded-full"
          aria-label="Stage color"
        />
      </div>
      <Input
        value={stage.name}
        onChange={(e) => onRename(stage.id, e.target.value)}
        className="h-8 text-sm flex-1 min-w-0 bg-transparent border-transparent hover:border-border focus:border-border"
        data-ocid={`settings.stages.${stage.id}.input`}
      />
      {showProb && onProbChange && (
        <div className="flex items-center gap-1.5 shrink-0">
          <Input
            type="number"
            min={0}
            max={100}
            value={stage.probability ?? 0}
            onChange={(e) => onProbChange(stage.id, Number(e.target.value))}
            className="h-8 text-xs w-16 text-center"
            data-ocid={`settings.stages.${stage.id}.probability.input`}
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      )}
      {showProb && onWinToggle && (
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-[10px] text-muted-foreground">Win</span>
          <Switch
            checked={!!stage.isWin}
            onCheckedChange={() => onWinToggle(stage.id)}
            className="scale-75"
            data-ocid={`settings.stages.${stage.id}.win.switch`}
          />
        </div>
      )}
      {showProb && onLossToggle && (
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-[10px] text-muted-foreground">Loss</span>
          <Switch
            checked={!!stage.isLoss}
            onCheckedChange={() => onLossToggle(stage.id)}
            className="scale-75"
            data-ocid={`settings.stages.${stage.id}.loss.switch`}
          />
        </div>
      )}
      <button
        type="button"
        onClick={() => onDelete(stage.id)}
        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-smooth shrink-0"
        aria-label="Delete stage"
        data-ocid={`settings.stages.${stage.id}.delete_button`}
      >
        <Trash2 size={13} />
      </button>
    </div>
  );
}

export function SalesStagesTab() {
  const [leadStages, setLeadStages] = useState<Stage[]>(initialLeadStages);
  const [dealStages, setDealStages] = useState<Stage[]>(initialDealStages);

  const mutate = (
    setter: React.Dispatch<React.SetStateAction<Stage[]>>,
    id: string,
    patch: Partial<Stage>,
  ) =>
    setter((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  function addLeadStage() {
    setLeadStages((p) => [
      ...p,
      {
        id: `ls-${Date.now()}`,
        name: "New Stage",
        color: COLORS[p.length % COLORS.length],
      },
    ]);
  }
  function addDealStage() {
    setDealStages((p) => [
      ...p,
      {
        id: `ds-${Date.now()}`,
        name: "New Stage",
        color: COLORS[p.length % COLORS.length],
        probability: 50,
      },
    ]);
  }

  return (
    <div className="space-y-5">
      {/* Color legend */}
      <Card className="p-4 border border-border/60 bg-muted/20">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium mr-1">
            Quick colors:
          </span>
          {COLORS.map((c) => (
            <div
              key={c}
              className="w-5 h-5 rounded-full border border-border/30"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </Card>

      {/* Lead Stages */}
      <Card className="p-6 border border-border/60 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-semibold text-base">
              Lead Stages
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Drag to reorder the stages in your lead pipeline.
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {leadStages.length} stages
          </Badge>
        </div>
        <Separator />
        <div className="space-y-2">
          {leadStages.map((stage) => (
            <StageRow
              key={stage.id}
              stage={stage}
              showProb={false}
              onDelete={(id) =>
                setLeadStages((p) => p.filter((s) => s.id !== id))
              }
              onRename={(id, name) => mutate(setLeadStages, id, { name })}
              onColorChange={(id, color) =>
                mutate(setLeadStages, id, { color })
              }
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-8 text-xs gap-1.5"
          onClick={addLeadStage}
          data-ocid="settings.stages.lead.add_button"
        >
          <Plus size={12} /> Add Stage
        </Button>
      </Card>

      {/* Deal Stages */}
      <Card className="p-6 border border-border/60 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-semibold text-base">
              Deal Stages
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Configure probability and win/loss designations for deals.
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {dealStages.length} stages
          </Badge>
        </div>
        <Separator />
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground px-3 pb-1">
          <div className="w-6 shrink-0" />
          <div className="w-6 shrink-0" />
          <div className="flex-1">Stage Name</div>
          <div className="w-16 text-center shrink-0">Probability</div>
          <div className="shrink-0 w-12 text-center">Win</div>
          <div className="shrink-0 w-12 text-center">Loss</div>
          <div className="w-5" />
        </div>
        <div className="space-y-2">
          {dealStages.map((stage) => (
            <StageRow
              key={stage.id}
              stage={stage}
              showProb={true}
              onDelete={(id) =>
                setDealStages((p) => p.filter((s) => s.id !== id))
              }
              onRename={(id, name) => mutate(setDealStages, id, { name })}
              onColorChange={(id, color) =>
                mutate(setDealStages, id, { color })
              }
              onProbChange={(id, probability) =>
                mutate(setDealStages, id, { probability })
              }
              onWinToggle={(id) =>
                mutate(setDealStages, id, {
                  isWin: !dealStages.find((s) => s.id === id)?.isWin,
                })
              }
              onLossToggle={(id) =>
                mutate(setDealStages, id, {
                  isLoss: !dealStages.find((s) => s.id === id)?.isLoss,
                })
              }
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-8 text-xs gap-1.5"
          onClick={addDealStage}
          data-ocid="settings.stages.deal.add_button"
        >
          <Plus size={12} /> Add Stage
        </Button>
      </Card>

      <div className="flex justify-end">
        <Button
          size="sm"
          className="h-9 px-5"
          data-ocid="settings.stages.save.submit_button"
        >
          Save Stages
        </Button>
      </div>
    </div>
  );
}
