import React from 'react'
import {ClipLoader} from "react-spinners"

const loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center z-20 bg-gray-950/50">
        <ClipLoader 
        color="gray"
        size={75}
        />
    </div>
  )
}

export default loading