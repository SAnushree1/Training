import React from 'react'

const UserAddress = () => {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 text-gray-800 my-2 mr-5">
        <p className="text-gray-500 font-semibold">Delivery Address</p>
        <p className="font-semibold">Mythri D</p>
        <p className="max-w-100">
          #203, Tower C, Meadow Heights, 4th Block, Sag Baug, Andheri East{" "}
          <br />
          Near Trinity High School, Mumbai -400056
        </p>
        <p>9056 878 xxx</p>
      </div>
  )
}

export default UserAddress