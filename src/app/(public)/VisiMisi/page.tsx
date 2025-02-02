import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className=" flex flex-col justify-center m-11  gap-14 ">
              <div className="flex flex-col   p-10 gap-5">
                <h1 className="flex flex-col  text-5xl font-extrabold text-[#89BD43]">
                  Visi
                </h1>
                <p className="max-w-2xl ">
                  “Menjadi pusat inovasi teknologi yang menginspirasi dan
                  memberdayakan bisnis untuk mencapai potensi penuh mereka”
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/visimisi/visi.png"
                alt="Background Image"
                className="w-2/3 "
                width={700}
                height={500}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex justify-center">
              <Image
                src="/visimisi/misi.png"
                alt="Background Image"
                className="w-2/3 "
                width={700}
                height={500}
              />
            </div>
            <div className=" flex flex-col justify-between p-8  gap-14 ">
              <div className="flex flex-col  justify-start  gap-5">
                <h1 className="flex flex-col  text-5xl font-extrabold text-[#89BD43]">
                  Misi
                </h1>
                <div className="flex gap-2">
                  <Image
                    src="/visimisi/ceklist.png"
                    alt="Background Image"
                    className="w-6 object-contain  "
                    width={500}
                    height={500}
                  />
                  <p className="max-w-2xl  ">
                    Menyediakan solusi teknologi kustom yang memenuhi kebutuhan
                    spesifik klien.
                  </p>
                </div>
                <div className="flex  gap-2">
                  <Image
                    src="/visimisi/ceklist.png"
                    alt="Background Image"
                    className="w-6 object-contain  "
                    width={500}
                    height={500}
                  />
                  <p className="max-w-2xl ">
                    Meningkatkan efisiensi operasional dan pengalaman pelanggan
                    melalui teknologi.
                  </p>
                </div>
                <div className="flex  gap-2">
                  <Image
                    src="/visimisi/ceklist.png"
                    alt="Background Image"
                    className="w-6 object-contain float-start "
                    width={500}
                    height={500}
                  />
                  <p className="max-w-2xl ">
                    Membangun kemitraan jangka panjang dengan klien untuk
                    mendukung pertumbuhan mereka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
