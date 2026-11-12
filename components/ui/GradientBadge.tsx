import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  children: React.ReactNode;
  variant?: "violet" | "cyan" | "emerald";
  pulsing?: boolean;
  className?: string;
}

export default function GradientBadge({
  children,
  variant = "violet",
  pulsing = false,
  className,
}: GradientBadgeProps) {
  const variantStyles = {
    violet: "bg-primary-500/10 text-primary-300 border-primary-500/30",
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  };

  const dotStyles = {
    violet: "bg-primary-400",
    cyan: "bg-accent-cyan",
    emerald: "bg-emerald-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border tracking-wide uppercase font-mono backdrop-blur-md transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {pulsing && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotStyles[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotStyles[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}

