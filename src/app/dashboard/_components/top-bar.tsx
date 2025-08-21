"use client";

import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";

interface Props {
  name: string;
}

const Topbar = ({ name }: Props) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <p className="text-sm text-muted-foreground">Admin Dashboard</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full border">
            <CircleUser className="h-5 w-5 text-primary" />
            <span className="sr-only">Profile</span>
          </Button>
          <div className="text-sm">
            <p className="font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
