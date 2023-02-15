import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font h-screen">
      <Navbar />
      <section className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              title='map' className='absolute inset-0'
              width="100%" height="100%" style={{ filter: "opacity(0.7)" }} loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8085847995!2d-79.51814024914754!3d43.71840381053681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses!2sco!4v1675983121262!5m2!1ses!2sco"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">
                  Toronto <br />
                  Ontario, Canada, 84654
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <p className="text-indigo-400 leading-relaxed">andres@hotmail.com</p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className=" leading-relaxed">+1 647548657801</p>
              </div>
            </div>
          </div>
          <form action="" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">Contact me</h2>
            <p className="leading-relaxed mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, magnam ut? Illo odio deserunt nemo fugit autem iusto eligendi tempora corrupti aperiam, perspiciatis, veniam eaque rerum accusantium, fugiat magni provident.</p>
            <div className="relative mb-4">
              <label htmlFor="" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring' />
            </div>
            <div className="relative mb-4">
              <label htmlFor="" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="text" className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring' />
            </div>
            <div className="relative mb-4">
              <label htmlFor="" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg- border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact