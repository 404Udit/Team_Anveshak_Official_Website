"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function Hide_footer({ children }) {
  const pathname = usePathname();

  // Hide footer on all subteam pages
  const hideFooter = pathname.startsWith("/Current_Team/");

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
