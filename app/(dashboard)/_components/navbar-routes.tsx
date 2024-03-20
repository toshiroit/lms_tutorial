"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.startsWith("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto ">
      {isTeacherPage || isTeacherPage ? (
        <Link href={"/"}>
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="w-4 h-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/course">
          <Button size={"sm"} variant={"ghost"}>
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
