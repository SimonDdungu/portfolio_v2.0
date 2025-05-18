import { useField } from "formik"

interface inputfield {
label: string,
[key: string]: string | boolean
}

const ContactInputField = ({label, ...props}: inputfield) => {

    const [field, meta] = useField(props)
  return (
    <div className="basis-full mb-2 pb-6 relative">
        <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white ">
            {label}
        </label>
        <input 
            {...field}
            {...props}
            spellCheck={false}
            className={`appearance-none block w-full bg-gray-950 text-white border-2 border-gray-800 focus:border-green-500 rounded-2xl 
            py-3 px-4 leading-tight focus:outline-none placeholder:text-xs ${meta.touched && meta.error ? "border-red-600" : ""}`}
            required
        />
        {meta.touched && meta.error && <p className="text-red-500 absolute bottom-0 left-1 text-xs tracking-wide">{meta.error}</p>}
    </div>
  )
}

export default ContactInputField