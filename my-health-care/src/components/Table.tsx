"use client";
import React from "react";

interface TableData {
  name: string;
  Description: string;
  status: string;
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between bg-[#F6F7F8] rounded-3xl w-[45.375rem] h-[3rem] opacity-100 mb-2 mx-2.5 px-4">
        <p className="flex-[1.2] text-left body-emphasized-14pt text-[#072635]">
          Problem/Diagnosis
        </p>
        <p className="flex-[2] text-left body-emphasized-14pt text-[#072635]">
          Description
        </p>
        <p className="flex-[0.3] text-left body-emphasized-14pt text-[#072635] pr-6">
          Status
        </p>
      </div>

      <div className="bg-white divide-y divide-gray-50">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.name}
              className="flex flex-row items-center justify-between"
            >
              <p className="flex-[1] px-6 py-4 body-regular-14 text-[#072635] leading-6">
                {item.name}
              </p>
              <p className="flex-[2] px-6 py-4 body-regular-14 text-[#072635] leading-6">
                {item.Description}
              </p>
              <p className="flex-[0.5] px-6 py-4 body-regular-14 text-[#072635] leading-6">
                {item.status}
              </p>
            </div>
          ))
        ) : (
          <div>
            <p className="px-6 py-4 text-center body-regular-14 text-[#072635]">
              No data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
