import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
}

function Input({ className, icon, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-md border-[1.5px] border-line-strong bg-paper px-3.5 py-2.5",
        "transition-all duration-default ease-default",
        "focus-within:border-blue-600 focus-within:bg-white focus-within:shadow-[0_0_0_3.5px_color-mix(in_srgb,var(--color-blue-600)_14%,transparent)]",
        "[&_svg]:text-slate-400 [&_svg]:transition-colors [&_svg]:duration-default",
        "focus-within:[&_svg]:text-blue-600",
        className
      )}
    >
      {icon && <span className="flex-shrink-0 [&_svg]:size-[17px]">{icon}</span>}
      <input
        className={cn(
          "w-full border-none bg-transparent font-sans text-[15px] font-medium text-ink-text outline-none",
          "placeholder:text-slate-400"
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
