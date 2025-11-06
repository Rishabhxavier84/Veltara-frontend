import React from 'react'
import { FaBath, FaCar, FaCocktail, FaConciergeBell, FaShuttleVan, FaSwimmingPool } from 'react-icons/fa'

const services = [
    {
        icon: <FaShuttleVan size={22} />,
        title: "Pick-up and drop",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
    {
        icon: <FaCar size={22} />,
        title: "Parking space",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
    {
        icon: <FaCocktail size={22} />,
        title: "Bar and cocktails",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
    {
        icon: <FaBath size={22} />,
        title: "Hot & cold water",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
    {
        icon: <FaConciergeBell size={22} />,
        title: "Full board",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
    {
        icon: <FaSwimmingPool size={22} />,
        title: "Swimming Pool",
        desc: "We pick you up from the airport or wherever you wish with our own luxury cab services"
    },
]

const Facilities = () => {
    return (
        <div className='bg-[#fcf2e1] py-16 px-14 md:px-20 '>
            <div className='mx-auto max-w-7xl '>
                <div className='mb-12  '>
                    {/* <p className='text-sm tracking-widest uppercase text-gray-600 '>Services</p> */}
                    <h2 className='headingFont  text-4xl font-semibold text-[#3a2623] '>Facilities & Services</h2>
                </div>

                <div className='bg-[#fff] grid md:grid-cols-3 sm:grid-cols-2 gap-10 rounded-2xl '>
                    {
                        services.map((service,index) => (
                            <div key={index} className='flex flex-col items-start space-y-3 p-9 '>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#3a2623] rounded-full p-3 text-[#fff] '>{service.icon}</div>
                                    <h3 className='text-2xl font-semibold text-[#3a2623] '>{service.title}</h3>
                                </div>
                                <p className='text-gray-500 max-w-xs text-sm '>{service.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Facilities
