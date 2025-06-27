import React from "react";
import Link from "next/link";
import { links } from "@/constants/links";
import { TopbarLinks } from "@/constants/links";
import { Heart, Search, ShoppingCartIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <div className="flex w-full justify-between p-4 pt-10">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <nav>{renderLinks(TopbarLinks)}</nav>
      <SearchBar />
      <div className="flex gap-4 items-center">
        <Heart size={20} />
        <ShoppingCartIcon size={20} />
      </div>
    </div>
  );
}

const renderLinks = (links: links[]) => {
  return (
    <div className="flex space-x-12  justify-center  py-2">
      {links.map((link, index) => (
        <div key={index}>
          {!link.subLinks ? (
            <div className="">
              <Link href={link.url}>{link.label}</Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <div className="">{link.label}</div>
              </PopoverTrigger>
              <PopoverContent>{renderLinks(link.subLinks)}</PopoverContent>
            </Popover>
          )}
        </div>
      ))}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="relative flex max-w-sm w-full">
      <Input
        placeholder="What are you looking for?"
        className="bg-slate-100 border-0"
      />
      <Search size={18} className="absolute right-2 top-1/2 -translate-y-1/2" />
    </div>
  );
};
