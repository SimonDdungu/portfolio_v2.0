"use client"
import React from "react"
import { ContactSchema } from './ContactValidation'
import { Form, Formik, FormikHelpers } from 'formik'
import ContactInputField from './ContactInputField'
import ContactTextField from './ContactTextField'
import Socials from "./Socials"

interface contactvalues {
  first_name: string,
  last_name: string,
  email: string,
  message: string
}

const Contact = () => {

  const handleForm = (values: contactvalues, actions: FormikHelpers<contactvalues>) => {
    console.log(values)
    actions.resetForm()
  }
  return (

    <section id="contact" className='py-20 px-5 bg-gray-950'>

      <div className="md:max-w-3xl mx-auto">

      
        <div className="mb-10">
          <h2 className='text-3xl text-center font-semibold tracking-wide mb-3'>Contact Me</h2>
          <p className="text-gray-400 text-center">Get in touch with me</p>
        </div>

        <div className="mb-3">
          <Formik
          onSubmit={handleForm}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          }}
            validationSchema={ContactSchema}
            >
              {() => (
                <Form noValidate className="bg-gray-900 p-8 rounded-2xl">
                  <div className='flex flex-col lg:flex-row lg:gap-8'>
                    <ContactInputField
                      label='First Name'
                      name='first_name'
                      type='text'
                      placeholder='Enter your First Name'
                    />
                    <ContactInputField
                      label='Last Name'
                      name='last_name'
                      type='text'
                      placeholder='Enter your Last Name'
                    />
                  </div>

                  <ContactInputField
                      label='Email'
                      name='email'
                      type='email'
                      placeholder='Enter your Email'
                    />

                    <ContactTextField
                      label='Message'
                      name='message'
                      placeholder='Enter your Message'
                    />

                    <button type='submit' 
                    className='rounded-lg text-sm px-4 py-2 bg-white text-black cursor-pointer
                    hover:bg-gray-300 transition-all ease-in duration-200'>
                      Send Message
                    </button>
                </Form>
              )}
          </Formik>
        </div>
        
          <Socials />

        </div>

    </section>
  )
}

export default Contact