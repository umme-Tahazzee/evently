import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Rules:
 * - base  => shared behaviour only (layout, focus, disabled, svg)
 * - variant => colours, borders, shadows, hover/active feel
 * - size => height, padding, font-size, gap
 * Kono class duplicate/conflict nai, tai twMerge-er upor depend korte hoy na.
 */
const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center whitespace-nowrap",
    "rounded-full border border-transparent bg-clip-padding font-semibold select-none",
    "transition-all duration-200 outline-none",
    "focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-busy:pointer-events-none",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-brand-700 bg-linear-to-b from-brand-400 to-brand-600 text-white shadow-btn-primary",
          "hover:-translate-y-px hover:from-brand-300 hover:to-brand-650",
          "active:translate-y-px active:shadow-btn-primary-active",
        ],
        secondary: [
          "border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to text-brand-700 shadow-btn-secondary",
          "hover:-translate-y-px hover:border-sand-400 hover:shadow-btn-secondary-hover",
          "active:translate-y-0 active:shadow-btn-secondary-active",
        ],
        outline: [
          "border-border bg-background text-foreground",
          "hover:bg-muted aria-expanded:bg-muted",
          "dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ],
        ghost: [
          "text-ink",
          "hover:bg-ink/5 aria-expanded:bg-ink/5",
        ],
        destructive: [
          "bg-destructive/10 text-destructive",
          "hover:bg-destructive/20 focus-visible:ring-destructive/40",
          "dark:bg-destructive/20 dark:hover:bg-destructive/30",
        ],
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-4 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-10 gap-2 px-5 text-sm",
        lg: "h-12 gap-2.5 px-7 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    compoundVariants: [
      // link variant e height/padding lagbe na
      { variant: "link", className: "h-auto rounded-none px-0 shadow-none" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Spinner dekhabe, button disabled hobe na but click block hobe */
    loading?: boolean
  }

function Spinner() {
  return (
    <svg
      className="size-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
      />
    </svg>
  )
}

function Button({
  className,
  variant,
  size,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }