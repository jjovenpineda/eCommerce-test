import React from "react";
import { links, SidebarLinks } from "@/constants/links";
import Link from "next/link";

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";

export default function Sidebar() {
  return <>{renderLinks()}</>;
}

const renderLinks = async (/* links: links[] */) => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  return (
    <div className="space-y-2 py-10 ">
      {res.map((link: any, index: any) => (
        <div
          key={index}
          className="pl-4 py-1 hover:bg-slate-100 transition-colors cursor-pointer active:bg-slate-200"
        >
          {!link.subLinks ? (
            <Link
              key={index}
              href={"/products/" + link.id.toString()}
              className="line-clamp-1"
            >
              {link.title}
            </Link>
          ) : (
            <Popover>
              <PopoverTrigger className="flex gap-6 items-center w-full">
                <div className="cursor-pointer ">{link.label}</div>
                <ChevronRight size={20} />
              </PopoverTrigger>
              {/*  <PopoverContent side="right" sideOffset={10} className="p-0">
                {renderLinks(link.subLinks)}
              </PopoverContent> */}
            </Popover>
          )}
        </div>
      ))}
    </div>
  );
};

/* const test = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return res[0].title;
};
 */
