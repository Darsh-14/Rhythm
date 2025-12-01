import * as React from "react"

// 1. We define the helper function right here (No import needed)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variant === "ghost" ? "bg-transparent hover:bg-white/10" : "bg-primary text-primary-foreground hover:bg-primary/90",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }