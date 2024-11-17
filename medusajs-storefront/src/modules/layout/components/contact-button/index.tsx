"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
// import { useNavigate } from 'react-router-dom'


const ContactButtons = () => {
    const navigate = useRouter()
    const newArr = [
        {
            id: 0,
            name: "Mobile",
            text: "09666-720023",
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731797717/phone-6013_l3zlez.svg",
            link: "#"

        },
        {
            id: 1,
            name: "Store Locator",
            text: "Find Our Store",
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731797586/pin-location-4355_dkjhgn.svg",
            link: "/shop-address"
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-y-[25px] mt-[20px] md:mb-[0px] mb-[20px] ">
                {newArr.map((item, index) => {
                    return (
                        <>
                            <div onClick={() => {
                                navigate.push(item.link)
                            }} key={index} className="w-[270px] address_box cursor-pointer flex gap-x-[13px] h-[70px] rounded-[10px] items-center border border-[#adadad] border-solid py-[10px] px-[30px] pr-[40px]">
                                <div className="">
                                    <img className="h-[25px]" src={item.image} />
                                </div>
                                <div className="w-[1px] bg-[#fff] h-[40px]" />
                                <div className="pl-[7px] flex flex-col">
                                    <p className="text-[12px] leading-[1.5] font-[400] poppins">{item.name}</p>
                                    <p className="text-[16px] leading-[1.5] font-[500] poppins">{item.text}</p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default ContactButtons