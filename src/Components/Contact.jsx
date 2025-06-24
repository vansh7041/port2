import { useFormik } from 'formik'
import React from 'react'


const Contact = () => {
    const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values)
      alert("Form submitted successfully!")
    }
  })
  return (
<>
<div id='contact' className="min-h-screen relative flex-col  flex items-center justify-center p-6">
    <h1 className='text-center text-white text-5xl mt-50 font-bold'>Contact <span className='text-blue-500'>Me</span> </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-blue-100 p-8 rounded-xl mt-14 mb-10 shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl text-blue-800 font-bold mb-6 text-center">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-1">Message</label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            rows="4"
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200 w-full font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>

 
</>
  )
}

export default Contact
