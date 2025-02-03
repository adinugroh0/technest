"use client";
import React from "react";

interface ColorResource {
  name: string;
  url: string;
  iconBg: string; // warna background untuk “ikon” kecil (jika ingin meniru bulatan)
}

const colorResources: ColorResource[] = [
  {
    name: "Rizky",
    url: "089876567",
    iconBg: "#23C08C",
  },
  {
    name: "Dian",
    url: "089876567",
    iconBg: "#40C4FF",
  },
  {
    name: "Farhan",
    url: "089876567",
    iconBg: "#2196F3",
  },
  {
    name: "Naufal",
    url: "089876567",
    iconBg: "#AB47BC",
  },
  {
    name: "Rama",
    url: "089876567",
    iconBg: "#FFC107",
  },
  {
    name: "Fikri",
    url: "089876567",
    iconBg: "#66BB6A",
  },
  {
    name: "Reza",
    url: "089876567",
    iconBg: "#8E24AA",
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
              <p className="text-sm text-[#78994d] ">{item.url}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
