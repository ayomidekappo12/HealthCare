"use client";
import { useState } from "react";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import PrimaryButton from "@/components/PrimaryButton";
export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const labResults = ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays"];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col container w-[22.938rem] h-[46.25rem] mx-4 py-5 px-3 bg-white opacity-100 rounded-2xl">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/Layer2/Layer 2.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
            loading="lazy"
          />
          <h1 className="card-title-24pt font-extrabold text-center">
            Jessica Taylor
          </h1>
        </div>
        <div className="flex flex-col items-start space-y-3 px-3 opacity-100">
          <IconButton
            imageSrc="/images/BirthIcon.svg"
            value="Date Of Birth"
            text="August 23, 1996"
          />
          <IconButton
            imageSrc="/images/FemaleIcon.svg"
            value="Gender"
            text="Female"
          />
          <IconButton
            imageSrc="/images/PhoneIcon.svg"
            value="Contact Info."
            text="(415) 555-1234"
          />
          <IconButton
            imageSrc="/images/PhoneIcon.svg"
            value="Emergency Contacts"
            text="(415) 555-5678"
          />
          <IconButton
            imageSrc="/images/InsuranceIcon.svg"
            value="Insurance Provider"
            text="Sunrise Health Assurance"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 mt-5">
          <PrimaryButton
            id="Show All Information"
            type="button"
            aria-label="Show All Information"
            text="Show All Information"
            disabled={loading}
            className="body-emphasized-14pt text-[#072635] font-bold items-center py-3 px-10 rounded-full bg-[#01F0D0] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col container w-[22.938rem] h-auto mt-6 mb-2 mx-4 py-4 px-3 bg-white opacity-100 rounded-2xl">
        <p className="card-title-24pt mx-2 mt-1 pb-2 font-extrabold text-left font-Manrope">
          Lab Results
        </p>
        <div className="flex flex-col">
          {labResults.map((result, index) => (
            <div
              key={index}
              className="flex flex-row w-[19.688rem] h-[2.5rem] justify-between items-center gap-8 mx-2 px-3 my-1 hover:bg-[#F6F7F8]"
            >
              <p className="text-left font-Manrope font-medium text-[#072635] text-base">
                {result}
              </p>
              <Image
                src="/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Arrow Down"
                className="bg-transparent"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
