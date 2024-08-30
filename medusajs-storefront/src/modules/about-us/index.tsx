import { About_Us_List } from '@lib/util/about-us-list'
import React from 'react'

const AboutUsPage = () => {
    return (
        <>
            <div className="flex py-8 px-6 flex-col gap-y-[30px]">
                <div className="flex flex-col pb-[35px]" >
                    <h1 className="text-[35px] leading-[1.2] text-[#000] font-[600] poppins">SEA SKY</h1>
                </div>
                <div className="flex flex-wrap gap-y-[20px]">
                    {About_Us_List.map((item, index) => {
                        const brand = 'Sea Sky'
                        const parts = item.split(new RegExp(`(${brand})`, 'gi'));
                        return (
                            <>
                                <p key={index} className='para_text poppins text-[17px] text-[#000] font-[400] leading-[1.6]'>

                                    {parts.map((part, i) =>
                                        part.toLowerCase() == brand.toLowerCase() ? (
                                            <span key={i} className="font-[600] poppins">{part}</span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                               
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AboutUsPage