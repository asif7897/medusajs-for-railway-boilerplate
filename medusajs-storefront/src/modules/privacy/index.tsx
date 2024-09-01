import { Privacy_List } from '@lib/util/privacy'
import React from 'react'

const Privacy = () => {
    return (
        <>
            <div className="flex py-8 px-6 flex-col gap-y-[30px]">
                <div className="flex flex-col pb-[35px]">
                    <h1 className="text-[40px] leading-[1.2] text-[#000] font-[700] poppins animate-fade-in">
                        Privacy And Policy
                    </h1>
                </div>
                <div className="flex flex-wrap gap-y-[20px]">
                    {Privacy_List.map((item, index) => {
                        const brand = 'Sea Sky'
                        const parts = item.split(new RegExp(`(${brand})`, 'gi'))
                        return (
                            <p 
                                key={index} 
                                className='para_text poppins text-[18px] text-[#333] font-[400] leading-[1.7] transition-all duration-300 ease-in-out hover:text-[#000] hover:translate-x-[5px]'
                            >
                                {parts.map((part, i) =>
                                    part.toLowerCase() === brand.toLowerCase() ? (
                                        <span key={i} className="font-[600] text-[#000] poppins">
                                            {part}
                                        </span>
                                    ) : (
                                        part
                                    )
                                )}
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Privacy
