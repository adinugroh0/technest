"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

export function ColourfulTextDemo() {
  return (
    <div>
      {/* home */}
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden px-6 py-10 md:p-10">
        {/* Bagian Kiri (Teks dan Tombol) */}
        <div className="flex-1 flex flex-col gap-6 md:gap-7">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black font-sans">
            This is <ColourfulText text="TechNeest" /> <br /> Membuat Pekerjaan
            Anda Mudah
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-black font-sans">
            Berfokus pada pengembangan perangkat lunak dan solusi inovatif. Kami
            menciptakan lingkungan yang mendukung pertumbuhan ide-ide teknologi,
            membantu bisnis dari berbagai sektor untuk mengoptimalkan proses
            mereka melalui teknologi yang disesuaikan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const target = document.getElementById("Ungullan");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-2 rounded-md bg-[#B2E173] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Layanan
            </button>
            <button
              onClick={() => (window.location.href = "/Kontak")}
              className="px-8 py-2 rounded-md bg-white border-2 border-teal-500 text-black font-bold transition duration-200 hover:bg-[#B2E173] hover:text-black   hover:border-[#B2E173]">
              Contact
            </button>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="flex-1 flex items-center justify-center md:justify-end mb-6 md:mb-0">
          <Image
            src="/background.png"
            alt="Background Image"
            className="object-cover"
            width={700}
            height={500}
          />
        </div>
      </div>
      {/* Kartu layanan*/}
      <div
        id="Ungullan"
        className="w-full flex flex-wrap items-center justify-center ">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold  text-black relative z-2 font-sans pt-20">
          Bidang Unggulan
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center pt-12 gap-6 px-4">
          <BackgroundGradient className="rounded-[16px] max-w-xs p-3 sm:p-6 bg-white dark:bg-zinc-900">
            <Image
              src="/web.png"
              alt="Pengembangan Web"
              height={300}
              width={300}
              className="object-contain"
            />
            <p className="text-base sm:text-lg text-black mt-3 mb-2 dark:text-neutral-200">
              Pengembangan Web
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Kami menciptakan Web yang dirancang khusus untuk memenuhi
              kebutuhan unik bisnis Anda, baik itu aplikasi mobile, web, atau
              desktop.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[16px] max-w-xs p-3 sm:p-6 bg-white dark:bg-zinc-900">
            <Image
              src="/konsultasi.png"
              alt="Konsultasi Teknologi"
              height={300}
              width={300}
              className="object-contain"
            />
            <p className="text-base sm:text-lg text-black mt-3 mb-2 dark:text-neutral-200">
              Konsultasi Teknologi
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Memberikan saran strategis tentang bagaimana teknologi dapat
              digunakan untuk mencapai tujuan bisnis Anda.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[16px] max-w-xs p-3 sm:p-6 bg-white dark:bg-zinc-900">
            <Image
              src="/intgrasi.png"
              alt="Integrasi Teknologi"
              height={300}
              width={300}
              className="object-contain"
            />
            <p className="text-base sm:text-lg text-black mt-3 mb-2 dark:text-neutral-200">
              Integrasi Teknologi
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Menghubungkan berbagai sistem dan platform agar bisnis Anda lebih
              efisien.
            </p>
          </BackgroundGradient>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center gap-10 ">
        <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold  text-black relative z-2 font-sans pt-20">
          Artikel Terbaru
        </h2>
        <div className="flex  gap-6">
          <div className=" flex rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#89BD43]">
                Mengapa Solusi Teknologi Kustom Penting untuk Bisnis Anda
              </h3>
              <p className="text-gray-700 text-base mt-2">
                Dalam dunia bisnis yang semakin kompetitif, memiliki solusi
                teknologi yang tepat dapat menjadi pembeda antara kesuksesan dan
                kegagalan.
              </p>
              <div>
                <Link href="/Berita">
                  <p className="text-blue-500 hover:text-blue-700 font-semibold">
                    Baca Selengkapnya
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ColourfulTextDemo;
