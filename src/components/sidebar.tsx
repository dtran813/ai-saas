"use client";

import Link from "next/link";
import Image from "next/image";
import { Nunito } from "next/font/google";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/constant";

const nunito = Nunito({ weight: "700", subsets: ["latin"] });

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#202c46] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-10 w-10">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", nunito.className)}>
            All For One
          </h1>
        </Link>
        <div className="space-y-1">
          {ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white"
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-6 w-6", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
