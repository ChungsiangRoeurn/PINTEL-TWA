"use client";

import {
  Columns3Cog,
  House,
  LayoutGrid,
  ScanBarcode,
  Ticket,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuBarProps {
  branchId: string;
}

export default function MenuBar({ branchId }: MenuBarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: `/${branchId}/home`,
      icon: <House size={20} />,
      label: "ទំព័រដើម",
    },
    {
      href: `/${branchId}/dashboard`,
      icon: <LayoutGrid size={20} />,
      label: "ផ្ទាំងព័ត៏មាន",
    },
    {
      href: `/${branchId}/scan`,
      icon: <ScanBarcode size={24} />,
      label: "",
      special: true, // middle button
    },
    {
      href: `/${branchId}/sales`,
      icon: <Ticket size={20} />,
      label: "ការលក់",
    },
    {
      href: `/${branchId}/settings`,
      icon: <Columns3Cog size={20} />,
      label: "ការកំណត់",
    },
  ];

  return (
    <div className="fixed bottom-1 pb-2 left-0 right-0 border-t max-w-md w-full mx-auto p-2 bg-white flex justify-between items-center">
      {menuItems.map((item, i) => {
        const isActive = pathname === item.href;

        if (item.special) {
          return (
            <Link
              key={i}
              href={item.href}
              className="flex flex-col items-center gap-1 -mb-1 text-sm text-[#E41E3F]"
            >
              <div className="bg-[#E41E3F] p-3 rounded-full text-white">
                {item.icon}
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={i}
            href={item.href}
            className={`flex flex-col gap-1 items-center text-sm ${
              isActive ? "text-[#E41E3F]" : "text-gray-400"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
