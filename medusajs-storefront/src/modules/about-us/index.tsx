

import { About_Us_List } from '@lib/util/about-us-list'
import React from 'react'

const AboutUsPage = () => {
    return (
        <>
            <div className="flex flex-col py-10 px-6 bg-gray-50">
                <div className="flex flex-col items-center pb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2 poppins text-center">
                        About Us
                    </h1>
                </div>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {/* Introduction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            1. Who We Are
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Welcome to SeaSky Ltd, your destination for high-quality ready-made suits and personalized fashion solutions. Established in 2004, we are dedicated to blending elegance with practicality in our lifestyle fashion. Whether you’re looking for the perfect suit or need customization, we ensure you look and feel exceptional.
                        </p>
                    </section>

                    {/* Our Services */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            2. Our Services
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            We offer a range of services to meet your fashion needs:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-base text-gray-700 leading-relaxed poppins">
                            <li><strong>Ready-Made Suits:</strong> Explore our collection of expertly crafted ready-made suits designed for various styles and occasions.</li>
                            <li><strong>Customizations:</strong> Get a perfect fit and style tailored to your needs within 30 minutes.</li>
                            <li><strong>Product Adjustments:</strong> Enjoy easy exchanges or refunds within seven days if there are any issues with your purchase.</li>
                            <li><strong>Complimentary Accessories:</strong> Receive a complimentary brush with every purchase to keep your garments in top condition.</li>
                        </ul>
                    </section>

                    {/* Customer Satisfaction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            3. Customer Satisfaction
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Your satisfaction is our priority. We are committed to ensuring that every product and service meets the highest standards of quality. For any concerns or assistance, our dedicated team is here to help you.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            4. Contact Us
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            For any complaints or questions, please contact us at:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-base text-gray-700 leading-relaxed poppins">
                            <li><strong>Phone:</strong> 09666-720023</li>
                            <li><strong>Email:</strong> <a href="mailto:seaskytailors@gmail.com" className="text-blue-600 hover:underline">seaskytailors@gmail.com</a></li>
                        </ul>
                        <p className='text-base text-gray-700 leading-relaxed poppins mt-4'>
                            Established in 2004, SeaSky Ltd has been providing exceptional fashion solutions and customer service for over a decade. We look forward to assisting you with your fashion needs.
                        </p>
                    </section>

                    {/* Additional Text from About_Us_List */}
                    {About_Us_List.map((item, index) => {
                        const brand = 'Sea Sky'
                        const parts = item.split(new RegExp(`(${brand})`, 'gi'))
                        return (
                            <section key={index} className="mb-8">
                                <p className='text-base text-gray-700 leading-relaxed poppins'>
                                    {parts.map((part, i) =>
                                        part.toLowerCase() === brand.toLowerCase() ? (
                                            <span key={i} className="font-semibold text-gray-900 poppins">
                                                {part}
                                            </span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            </section>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AboutUsPage

