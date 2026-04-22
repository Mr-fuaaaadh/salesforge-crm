import { cn } from "@/lib/utils";

interface UserAvatarProps {
  name: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg";
  online?: boolean;
  className?: string;
}

const sizeClasses = {
  xs: "w-6 h-6 text-[9px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

const indicatorSizes = {
  xs: "w-1.5 h-1.5",
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    "bg-blue-500 text-white",
    "bg-violet-500 text-white",
    "bg-indigo-500 text-white",
    "bg-emerald-600 text-white",
    "bg-amber-500 text-white",
    "bg-rose-500 text-white",
    "bg-teal-500 text-white",
    "bg-cyan-500 text-white",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function UserAvatar({
  name,
  src,
  size = "md",
  online,
  className,
}: UserAvatarProps) {
  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);

  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn("rounded-full object-cover", sizeClasses[size])}
        />
      ) : (
        <div
          className={cn(
            "rounded-full flex items-center justify-center font-display font-semibold",
            sizeClasses[size],
            colorClass,
          )}
          title={name}
        >
          {initials}
        </div>
      )}
      {online !== undefined && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            indicatorSizes[size],
            online ? "bg-emerald-500" : "bg-muted-foreground",
          )}
        />
      )}
    </div>
  );
}
