"use client";
import { useState } from "react";
import SideBar from "./health-page/sidebar/page";
import Profile from "./health-page/profile/page";
import Chart from "@/app/health-page/utils";
import Image from "next/image";
import Table from "@/components/Table";

const sampleData = [
  {
    name: "Hypertension",
    Description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    name: "Type 2 Diabetes",
    Description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    name: "Asthma",
    Description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    Description: "Degenerative joint disease",
    status: "Untreated",
  },
];

export default function homePage() {
  return (
    <main className="min-h-screen justify-between gap-0 mt-6 mb-4 flex flex-row overflow-hidden">
      <div className="flex">
        <SideBar />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col container w-[48rem] h-[42.063rem] rounded-2xl opacity-100 bg-white overflow-hidden shrink-0 p-3">
          <p className="card-title-24pt m-2 pb-6 font-extrabold text-left">
            Diagnosis History
          </p>
          <div className="container bg-[#F4F0FE] rounded-xl w-[45.375rem] h-[18.625rem] opacity-100 pt-2">
            <Chart />
          </div>
          <div className="flex flex-row justify-between gap-2 mt-4 overflow-hidden">
            <div className="flex flex-col container bg-[#E0F3FA] rounded-xl w-[14.25rem] h-[15.125rem] opacity-100 p-0">
              <div className="flex flex-col justify-between items-start">
                <Image
                  src="/images/respiratory rate.svg"
                  alt="Respiratory-rate"
                  width={96}
                  height={96}
                  className="p-5 opacity-100"
                />
                <p className="font-Manrope font-medium text-[#072635] text-base text-left px-6">
                  Respiratory Rate
                </p>
                <p className="font-Manrope font-extrabold text-[#072635] text-2xl text-left px-6">
                  20 bpm
                </p>
                <div className="mt-3">
                  <p className="body-regular-14 text-left pt-6 px-6">Normal</p>
                </div>
              </div>
            </div>
            <div className="flex container bg-[#FFE6E9] rounded-xl w-[14.25rem] h-[15.125rem] opacity-100 p-0">
              <div className="flex flex-col justify-between items-start">
                <Image
                  src="/images/temperature.svg"
                  alt="Temperature"
                  width={96}
                  height={96}
                  className="p-5 opacity-100"
                />
                <p className="font-Manrope font-medium text-[#072635] text-base text-left px-6">
                  Temperature
                </p>
                <p className="font-Manrope font-extrabold text-[#072635] text-2xl text-left px-6">
                  98.6°F
                </p>
                <div className="mt-3">
                  <p className="body-regular-14 text-left pt-6 pb-4 px-6">
                    Normal
                  </p>
                </div>
              </div>
            </div>
            <div className="flex container bg-[#FFE6F1] rounded-xl w-[14.25rem] h-[15.125rem] opacity-100 p-0">
              <div className="flex flex-col justify-between items-start">
                <Image
                  src="/images/HeartBPM.svg"
                  alt="Heart Rate"
                  width={96}
                  height={96}
                  className="p-5 opacity-100"
                />
                <p className="font-Manrope font-medium text-[#072635] text-base text-left px-6">
                  Heart Rate
                </p>
                <p className="font-Manrope font-extrabold text-[#072635] text-2xl text-left px-6">
                  78 bpm
                </p>
                <div className="flex mt-3 px-6">
                  <Image
                    src="/images/ArrowDown.svg"
                    alt="Arrow Down"
                    className="bg-transparent pb-4"
                    width={11}
                    height={6}
                  />
                  <p className="body-regular-14 text-left pb-4 px-2">
                    Lower than Average
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col container w-[48rem] h-[21.813rem] rounded-2xl opacity-100 bg-white overflow-hidden shrink-0 p-3 mt-6 mb-4">
          <p className="card-title-24pt mx-2 mt-2 pb-4 font-extrabold text-left">
            Diagnostic List
          </p>
          <div className="flex flex-col">
            <Table data={sampleData} />
          </div>
        </div>
      </div>
      <div className="flex">
        <Profile />
      </div>
    </main>
  );
}
