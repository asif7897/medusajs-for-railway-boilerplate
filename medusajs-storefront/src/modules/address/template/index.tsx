'use client'
import { Address } from "@lib/util/address-list";
import React from "react";
import './style.css'
import { Button } from "Components/Reusable-Modules/buttons";

const Row = ({ name, image, fw }: any) => {
    return (
        <div className="flex items-center gap-x-[10px]">
            <img className="h-[14px]" src={image} />
            <p className={`poppins leading-[1.2] font-[${fw || 400}] text-[15px]`}> {name}</p>
        </div>
    )
}

const Address_page = () => {
    return (
        <>
            <div className="flex py-8 px-6 flex-col gap-y-[30px]">
                <div className="flex flex-col" >
                    <h1 className="text-[35px] leading-[1.2] text-[#000] font-[600] poppins">Find Out Stores</h1>
                    <p className="text-[20px] text-[#000] font-[400] poppins">Visit our outlets today!</p>
                </div>
                <div className="flex flex-wrap gap-y-[32px]">
                    {Address.map((item, index) => {
                        return (
                            <>
                                <div className="flex flex-col w-full gap-y-[18px]" key={item.city}>
                                    <div className="flex items-center gap-x-[10px]" >
                                        <img className="h-[24px]" src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722664620/city-hall-svgrepo-com_kbzibf.svg" />
                                        <p className="font-[600] text-[#000] text-[19px] poppins">{item.city}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] ">
                                        {item.locations.map((it, i) => {
                                            return (
                                                <div key={it.floor} className="address_box_ flex p-[18px] px-[15px] border border-[#dddddd] rounded-[10px] border-solid flex-col gap-y-[15px] justify-between">
                                                    <div className="flex flex-col gap-y-[20px]">
                                                        <Row
                                                            fw={500}
                                                            name={it.address}
                                                            image="
                                                            https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722539010/building-svgrepo-com_oiceka.svg" />

                                                        <Row image="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722539923/call-black_isb8d3.svg" name={it.mobile} />
                                                        <Row image="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722540152/clock-black_k7xbr4.svg" name={it.time} />
                                                    </div>
                                                    <div>
                                                        <div className="h-[1px] w-full bg-[#dddddd]" />
                                                        <div className="details_box_ flex gap-[10px] pt-[10px] justify-center md:flex-row xs:flex-col">
                                                            <Button onClick={() => {
                                                                window.open("https://maps.app.goo.gl/RYzwXWhdjHLc7MeY7", "_blank");
                                                            }} className="map_button">
                                                                <div className="flex items-center gap-1">
                                                                    <img src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722530900/location-icon_chzd0g.svg" className="h-[14px]" />
                                                                    <p className="text-[17px] text-[#fff] poppins font-[500]">
                                                                        Show In Map
                                                                    </p>
                                                                </div>
                                                            </Button>
                                                            <Button className="map_button">
                                                                <div className="flex items-center gap-1.5">
                                                                    <img src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722616608/home-svgrepo-com_1_o6kq8s.svg" className="h-[18px]" />
                                                                    <p className="text-[17px] text-[#fff] poppins font-[500]">
                                                                        Shop Details
                                                                    </p>
                                                                </div>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Address_page