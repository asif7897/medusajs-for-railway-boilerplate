"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ContactButtons = () => {
  const navigate = useRouter();
  const newArr = [
    {
      id: 0,
      name: "Mobile",
      text: "09666-720023",
      image:
        "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/10507182.png",
      link: "#",
    },
    {
      id: 1,
      name: "Store Locator",
      text: "Find Our Store",
      image:
        "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/25530.jpg",
      link: "/shop-address",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 mt-4 md:mb-0 mb-4">
      {newArr.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate.push(item.link)}
          className="group flex items-center gap-x-3 p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          {/* Icon Section */}
          <div className="flex-shrink-0 bg-gray-100 p-1.5 rounded-full group-hover:bg-gray-200 transition-all duration-500">
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-300 group-hover:bg-gray-400 transition-all duration-500" />

          {/* Text Section */}
          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-all duration-500">
              {item.name}
            </p>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-500 transition-all duration-500">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactButtons;
