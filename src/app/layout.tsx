import { EdgeStoreProvider } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Optispiders",
  description:
    "Boost your eCommerce success with OptiSpiders’ AI-powered solutions—drive sales, improve SEO, and outshine competitors with smart content and marketplace strategies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <main>
          <EdgeStoreProvider>
            <div>{children}</div>
            <Toaster />
          </EdgeStoreProvider>
        </main>
      </body>
    </html>
  );
}
