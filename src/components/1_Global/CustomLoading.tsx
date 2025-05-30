import {ClipLoader} from "react-spinners"

const CustomLoading = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center z-20 bg-gray-950/50">
        <ClipLoader 
        color="gray"
        size={75}
        />
    </div>
  )
}

export default CustomLoading