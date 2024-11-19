"use client";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import PatientCard from "@/components/PatientCard";

export default function SideBar() {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  const patients = [
    {
      id: 1,
      imageSrc: "/images/Layer8/Layer 8.png",
      name: "Emily Williams",
      gender: "Female",
      age: 18,
    },
    {
      id: 2,
      imageSrc: "/images/Layer1/Layer 1.png",
      name: "Ryan Johnson",
      gender: "Male",
      age: 45,
    },
    {
      id: 3,
      imageSrc: "/images/Layer3/Layer 3.png",
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
    },
    {
      id: 4,
      imageSrc: "/images/Layer2/Layer 2.png",
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
    },
    {
      id: 5,
      imageSrc: "/images/Layer6/Layer 6.png",
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
    },
    {
      id: 6,
      imageSrc: "/images/Layer12/Layer 12.png",
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
    },
    {
      id: 7,
      imageSrc: "/images/Layer10/Layer 10.png",
      name: "Olivia Brown",
      gender: "Female",
      age: 32,
    },
    {
      id: 8,
      imageSrc: "/images/Layer9/Layer 9.png",
      name: "Tyler Davis",
      gender: "Male",
      age: 19,
    },
    {
      id: 9,
      imageSrc: "/images/Layer4/Layer 4.png",
      name: "Kevin Anderson",
      gender: "Male",
      age: 30,
    },
    {
      id: 10,
      imageSrc: "/images/Layer5/Layer 5.png",
      name: "Dylan Thompson",
      gender: "Male",
      age: 36,
    },
    {
      id: 11,
      imageSrc: "/images/Layer7/Layer 7.png",
      name: "Nathan Evans",
      gender: "Male",
      age: 58,
    },
    {
      id: 12,
      imageSrc: "/images/pexels-photo/pexels-photo-1.png",
      name: "Mike Nolan",
      gender: "Male",
      age: 31,
    },
  ];

  const handlePatientClick = (patientId: number) => {
    setSelectedPatient(patientId);
  };

  return (
    <div className="flex flex-col container w-[22.938rem] h-[65.875rem] mx-4 pt-3 px-1.5 bg-white opacity-100 rounded-2xl">
      <div className="flex flex-row justify-between items-center pb-4">
        <h3 className="card-title-24pt font-extrabold text-left pl-4 opacity-100">
          Patients
        </h3>
        <IconButton
          imageSrc="/images/search_FILL0_wght300_GRAD0_opsz24.svg"
          className="bg-transparent px-0"
          width={16}
          height={16}
        />
      </div>
      <div className="flex flex-col overflow-y-visible overflow-x-hidden scrollbar-custom pr-2">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            imageSrc={patient.imageSrc}
            name={patient.name}
            gender={patient.gender}
            age={patient.age}
            className={`${
              selectedPatient === patient.id
                ? "bg-[#D8FCF7] opacity-100"
                : "bg-white"
            } rounded-lg cursor-pointer`}
            action={() => handlePatientClick(patient.id)}
          />
        ))}
      </div>
    </div>
  );
}
