"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-1 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Beranda">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/">TechNeest</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Layanan">
          <div className="  text-sm flex flex-col gap-10 p-4">
            <ProductItem
              title="Visi - Misi"
              href="/VisiMisi"
              src="/visimisi/visimisi.png"
              description="Vi - Misi dari techneest"
            />
            <ProductItem
              title="Bidang Unggulan"
              href="/#Ungullan"
              src="/unggulan.png"
              description="Bidang unggulan dari techneest"
            />
            <ProductItem
              title="Contact"
              href="/Kontak"
              src="/kontak.png"
              description="Hubungi kami jika butuh bantuna atau konsultasi"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar;
