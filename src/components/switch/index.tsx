"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { SwitchProps, SwitchRef } from "./types";
import { Label } from "../label";

export const Switch = forwardRef<SwitchRef, SwitchProps>(
  ({ className, id, label, ...props }, ref) => {
    const Comp = (
      <SwitchPrimitives.Root
        id={id}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          className,
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          )}
        />
      </SwitchPrimitives.Root>
    );

    if (!label) {
      return Comp;
    }

    return (
      <div className="flex gap-1.5 items-center">
        {Comp}
        <Label htmlFor={id}>{label}</Label>
      </div>
    );
  },
);

Switch.displayName = SwitchPrimitives.Root.displayName;
