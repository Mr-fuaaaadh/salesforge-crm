import { Zap } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Form panel */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 lg:flex-none lg:w-[480px] xl:w-[540px]">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Zap size={20} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-foreground leading-tight">
                SalesForge
              </p>
              <p className="text-xs text-muted-foreground">CRM Platform</p>
            </div>
          </div>
          {children}
        </div>
      </div>

      {/* Illustration panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-card border-l border-border">
        {/* Animated gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.65 0.14 243 / 0.2)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.68 0.15 270 / 0.2)" }}
        />

        <div className="relative flex flex-col justify-center items-start p-16 z-10">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
              <Zap size={12} />
              Enterprise CRM
            </span>
            <h2 className="font-display font-bold text-4xl text-foreground leading-tight mb-4">
              Close deals faster
              <br />
              <span className="text-primary">with SalesForge</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              The modern CRM built for high-performance sales teams. Track
              leads, manage pipelines, and grow revenue.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="space-y-3 w-full max-w-sm">
            {[
              {
                title: "Pipeline Management",
                desc: "Visual kanban with drag-and-drop stages",
              },
              {
                title: "Smart Analytics",
                desc: "Real-time insights and revenue forecasting",
              },
              {
                title: "Team Collaboration",
                desc: "Shared workspace with activity feeds",
              },
            ].map((feature, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: static list
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-8 p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 max-w-sm w-full">
            <p className="text-sm text-foreground italic mb-3">
              "SalesForge increased our team's close rate by 42% in the first
              quarter."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                MC
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">
                  Maria Chen
                </p>
                <p className="text-[10px] text-muted-foreground">
                  VP of Sales, Meridian Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
