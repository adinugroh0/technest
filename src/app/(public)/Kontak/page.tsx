"use client";
import React from "react";

interface ColorResource {
  name: string;
  url: string;
  iconBg: string; // warna background untuk “ikon” kecil (jika ingin meniru bulatan)
}

const colorResources: ColorResource[] = [
  {
    name: "Muzli Colors",
    url: "https://colors.muz.li",
    iconBg: "#23C08C",
  },
  {
    name: "Coolors",
    url: "https://coolors.co",
    iconBg: "#40C4FF",
  },
  {
    name: "Colorbox",
    url: "https://colorbox.io",
    iconBg: "#2196F3",
  },
  {
    name: "Picular",
    url: "https://picular.co",
    iconBg: "#AB47BC",
  },
  {
    name: "Color Hunt",
    url: "https://colorhunt.co",
    iconBg: "#FFC107",
  },
  {
    name: "Site Palette",
    url: "https://palette.site",
    iconBg: "#66BB6A",
  },
  {
    name: "Adobe Color",
    url: "https://color.adobe.com",
    iconBg: "#8E24AA",
  },
  {
    name: "Mesh Gradient",
    url: "https://meshgradients.design",
    iconBg: "#EC407A",
  },
];

export default function FreeColors() {
  return (
    <section className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pt-20 pb-16 text-gray-800">
      {/* Heading Atas */}
      <div className="flex w-full items-center justify-between mb-4"></div>
      <h1 className="text-2xl font-bold text-center mb-6">Kontak</h1>

      {/* Grid Resource */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {colorResources.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-md bg-white px-4 py-3 shadow-sm">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: item.iconBg }}>
              {/* Bisa diganti jadi <img /> atau ikon lain */}
              <span className="text-sm font-semibold">{item.name[0]}</span>
            </div>
            <div>
              <p className="font-medium">{item.name}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline">
                {item.url.replace("https://", "")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bagian “Swipe next” di kanan bawah */}
      <div className="mt-6 self-end text-sm text-gray-400">
        Swipe next &rarr;
      </div>
    </section>
  );
}
