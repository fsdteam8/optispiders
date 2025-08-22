"use client";

const AlertModal = dynamic(() => import("@/components/ui/alert-modal"), {
  ssr: false,
});
import { logoutAction } from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut, Users } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import Logo from "../../../../public/logo/logo.png";

const routes = [
  {
    id: 1,
    label: "Contact Management",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: 2,
    label: "Blog Management",
    icon: Users,
    href: "/dashboard/blog-management",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const pathname = usePathname();

  const onLogout = () => {
    startTransition(() => {
      logoutAction().then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }

        router.push("/");
      });
    });
  };

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-white">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b p-6 flex justify-center items-center">
            <div className="relative h-[80px] w-[120px]">
              <Image src={Logo} alt="logo" fill />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-auto p-3">
            <ul className="space-y-2">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive =
                  route.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(route.href);

                return (
                  <li key={route.id}>
                    <Link
                      href={route.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2
          ${
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }
        `}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{route.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="border-t p-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-primary hover:text-primary/80"
              onClick={() => setOpen(true)}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onLogout}
        loading={isPending}
        title="Are you sure you want to log out?"
        message=""
      />
    </>
  );
};

export default Sidebar;
