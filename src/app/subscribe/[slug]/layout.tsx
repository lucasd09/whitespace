import { Logo } from "@/components/logo";
import { PropsWithChildren } from "react";

export default function SubscribeLayout({ children }: PropsWithChildren) {
  return <div className="min-h-screen flex flex-col items-center justify-between bg-white p-4">
    <div className="w-full"><Logo /></div>

    {children}

    <footer className="flex flex-col gap-2 sm:flex-row py-3 w-full shrink-0 items-center border-t">
      <p className="text-xs text-muted-foreground">
        © 2025 Whitespace. All rights reserved.
      </p>
    </footer>
  </div>
}