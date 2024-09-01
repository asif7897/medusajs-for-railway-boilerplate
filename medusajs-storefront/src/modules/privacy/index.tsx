import { Privacy_List } from '@lib/util/privacy'
import React from 'react'

const Privacy = () => {
    return (
        <>
            <div className="flex flex-col py-10 px-6 bg-gray-50">
                <div className="flex flex-col items-center pb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2 poppins text-center">
                        Privacy and Policies
                    </h1>
                     
                </div>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {/* Introduction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            1. Introduction
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Welcome to SeaSky Ltd, your premier destination for sophisticated suits and lifestyle fashion. Since 2004, we have been dedicated to offering high-quality apparel and accessories for both men and women. Our mission is to blend elegance with everyday practicality, ensuring you look and feel your best.
                        </p>
                    </section>

                    {/* Purpose of This Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            2. Purpose of This Policy
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Objective: To inform users about how we collect, use, and protect their personal information in relation to our e-commerce services.
                        </p>
                    </section>

                    {/* Information Collection */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            3. Information Collection
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Types of Information: We collect personal details, transaction data, and usage patterns through our website and e-commerce interactions.
                        </p>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Methods: Information is gathered through website interactions, purchases, and cookies to enhance your experience.
                        </p>
                    </section>

                    {/* Use of Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            4. Use of Information
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Purpose: Your information helps us improve user experience, process orders, and communicate important updates and promotions.
                        </p>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Third Parties: We may share information with trusted partners to facilitate services and order processing.
                        </p>
                    </section>

                    {/* Data Protection */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            5. Data Protection
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Security Measures: We implement robust security measures to safeguard your personal data from unauthorized access and breaches.
                        </p>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            User Rights: You have the right to access, correct, or request deletion of your personal information by contacting us.
                        </p>
                    </section>

                    {/* Cookies and Tracking */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            6. Cookies and Tracking
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Cookies: We use cookies to enhance your browsing experience and remember your preferences.
                        </p>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Tracking Technologies: Tracking technologies help us analyze user behavior to improve our services.
                        </p>
                    </section>

                    {/* Policy Changes */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            7. Policy Changes
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Updates: We will notify users of any changes to our privacy policy through our website.
                        </p>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Effective Date: Changes will take effect on the date they are posted on our website.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 poppins">
                            8. Contact Information
                        </h2>
                        <p className='text-base text-gray-700 leading-relaxed poppins'>
                            Inquiries: For questions or concerns about our privacy policy, please contact us via the contact form on our website or at support@seasky.com.
                        </p>
                    </section>

                    {/* Additional Text from Privacy_List */}
                    {Privacy_List.map((item, index) => {
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

export default Privacy
