import React from 'react'
import { roomData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { FaConciergeBell, FaSwimmingPool, FaTv, FaUtensils, FaWifi } from 'react-icons/fa'

const HotelDetails = () => {
    
    const {id} = useParams()

    const room = roomData.find((room) => {
        return room.id === parseInt(id)
    })

    return (
      <div className="mx-auto max-w-7xl p-6 grid grid-cols-2 gap-8 ">
        <div className=" lg:col-span-1 md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#3a2623] ">
              {" "}
              {room.name}{" "}
            </h2>
            <p className="text-xl text-[#3a2623] mt-1 ">
              {" "}
              ₹ {room.price.toLocaleString()}{" "}
            </p>
          </div>
          <img
            src={room.image}
            alt={room.name}
            className="w-full rounded-2xl shadow-md "
          />
          <div className="bg-[#fff] p-4 rounded-lg shadow ">
            <h3 className="text-xl font-semibold mb-3 ">Amenities</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600 ">
              <div className="flex items-center gap-2 ">
                <FaWifi /> Wifi
              </div>
              <div className="flex items-center gap-2 ">
                <FaTv /> Cable TV
              </div>
              <div className="flex items-center gap-2 ">
                <FaUtensils /> Restaurant
              </div>
              <div className="flex items-center gap-2 ">
                <FaSwimmingPool /> Pool
              </div>
              <div className="flex items-center gap-2 ">
                <FaConciergeBell /> Room Service
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 mt-6 ">
                Room Description
              </h3>
              <p className="text-gray-600"> {room.description} </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] p-6 mt-18 rounded-lg shadow-md text-[#3a2623] ">
          <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
          <form className="space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg "
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg "
            />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Phone"
              className="w-full border border-gray-300 p-3 rounded-lg "
            />
            <div>
              <label htmlFor="date" className="font-bold">
                Check-in
              </label>
              <input
                type="date"
                name=""
                id=""
                className="w-full border border-gray-300 p-3 rounded-lg "
              />
            </div>
            <div>
              <label htmlFor="date" className="font-bold">
                Check-out
              </label>
              <input
                type="date"
                name=""
                id=""
                className="w-full border border-gray-300 p-3 rounded-lg "
              />
            </div>
            <div>
              <label htmlFor="" className="font-bold">
                Number of Guests
              </label>
              <select
                name="guests"
                id=""
                className="w-full p-3 mb-3 border rounded-lg border-gray-300 "
              >
                {[
                  ...Array(3)
                    .keys()
                    .map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {" "}
                        {i + 1} Guest(s){" "}
                      </option>
                    )),
                ]}
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#3a2623] text-[#fcf2e1] py-2 px-8 font-bold rounded-3xl cursor-pointer hover:bg-[#311f1d] transition delay-70 ease-in-out "
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    );
}

export default HotelDetails
