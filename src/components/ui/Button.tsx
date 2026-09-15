import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-brand-lavender text-brand-navy hover:bg-brand-lavender/90 px-6 py-3",
      secondary: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-offwhite px-6 py-3",
      tertiary: "text-brand-lavender hover:text-brand-lavender/80 underline-offset-4 hover:underline p-0",
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
