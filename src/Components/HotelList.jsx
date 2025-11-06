import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context/RoomContext'
import { FaBath, FaBed, FaUserFriends, FaWifi } from 'react-icons/fa'

const amenitiesList = [
    {
        label: '1-2 persons',
        icon: <FaUserFriends className='text-gray-600' />
    },
    {
        label: 'bath-tub',
        icon: <FaBath className='text-gray-600' />
    },
    {
        label: 'King-size bed',
        icon: <FaBed className='text-gray-600' />
    },
    {
        label: 'Wifi',
        icon: <FaWifi className='text-gray-600' />
    }
]

const HotelList = () => {
    
    const {rooms} = useContext(RoomContext)
    console.log('rooms: ', rooms);

    return (
        <div className='bg-[#fcf2e1] py-16 px-24'>
            <div className='max-w-6xl mx-auto'>
                <h2 className=' headingFont text-4xl  mb-12 text-[#63413c] font-bold tracking-wider ' id='heading' >Rooms & Suites</h2>
                <div className='grid grid-cols-2 gap-20 '>
                    {
                        rooms && rooms.length > 0 ? (
                            rooms.map((room, index) => {
                                const { id: id, image, name, price} = room       
                                return (
                                  <div
                                    key={index}
                                    className="bg-[#fff] shadow rounded-2xl overflow-hidden "
                                  >
                                    <Link to={`/rooms/${id}`}>
                                      <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-80 object-cover"
                                      />
                                    </Link>
                                    <div className="p-5">
                                      <h3 className="text-2xl font-semibold text-[#3a2623] mb-2 ">
                                        {name}
                                      </h3>
                                      <p className="text-gray-600 text-lg mb-4 ">
                                        ₹ {price.toLocaleString()} / night
                                      </p>
                                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                                        {amenitiesList.map((amenity, index) => (
                                          <div
                                            key={index}
                                            className="flex items-center gap-2 "
                                          >
                                            {amenity.icon}{" "}
                                            <span>{amenity.label}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                );
                            })
                        ) : (
                            <p className='text-gray-600 text-lg text-center col-span-full'> Sorry, No rooms available </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HotelList
