"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Techneest</p>
          <p className="mt-2">
            Tempat tujuan Anda untuk wawasan teknologi, berita, dan tren.
          </p>
          <div className="mt-4">
            <Link href="#" className="text-[#89BD43] hover:text-blue-600 mx-3">
              Home
            </Link>
            <Link
              href="/VisiMisi"
              className="text-[#89BD43] hover:text-blue-600 mx-3">
              Visi & Misi
            </Link>
            <Link
              href="#Unggullan"
              className="text-[#89BD43] hover:text-blue-600 mx-3">
              Bidang Unggulan
            </Link>

            <Link
              href="/Berita"
              className="text-[#89BD43] hover:text-blue-600 mx-3">
              Blog
            </Link>
            <Link
              href="/Kontak"
              className="text-[#89BD43] hover:text-blue-600 mx-3">
              Kontak
            </Link>
          </div>
          <p className="mt-6 text-sm">© 2025 Technees. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
