import { useField } from "formik"

interface inputfield {
label: string,
[key: string]: string | boolean
}

const ContactTextField = ({label, ...props}: inputfield) => {

    const [field, meta] = useField(props)

  return (
    <div className="relative mb-4 pb-3">
        <label htmlFor="Message" className="block tracking-wide text-xs font-bold mb-2 uppercase text-white">
            {label}
        </label>
        <textarea 
        {...field}
        {...props}
        className={`appearance-none block w-full text-white border-gray-800  rounded-2xl border-2 py-3 px-4 mb-5 leading-tight 
        focus:outline-none focus:border-green-500 h-40 resize-none bg-gray-950 placeholder:text-xs ${meta.touched && meta.error ? "border-red-600" : ""} `}
        required></textarea>
        {meta.touched && meta.error && <p className="text-red-500 absolute bottom-0 left-1 text-xs tracking-wide">{meta.error}</p>}
    </div>
  )
}

export default ContactTextField