import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import BaseInput from '../ui/BaseInput';
import BaseTextArea from '../ui/BaseTextArea';
import { PiChatCircleDotsFill } from "react-icons/pi";


const Contact = () => {

    async function sendMessage(formData: FormData) {
        'use server'
     
      console.log('send message', formData)
      }

  return (
    <section className="py-8 px-4 md:px-12 sm:py-12 lg:py-16 min-h-screen w-full bg-purple-600 relative overflow-x-clip"> 
<div className='rounded-2xl p-8 md:p-16 h-full grid grid-cols-1 md:grid-cols-2 bg-purple-300/40 z-20 relative backdrop-blur-2xl shadow-2xl '>
<div className='text-white flex flex-col justify-between gap-4 max-w-[400px] '>
    <h2 className='font-black text-lg md:text-2xl text-center md:text-start'>Get in Touch</h2>
    <div className='flex flex-col gap-4'>
        <p className='text-center md:text-start'>Do you have any questions or feedback? We&apos;d love to hear from you.</p>
        <p className='inline-flex items-center gap-2'> <FaPhoneAlt /> +1(343)338-5190</p>
        <p className='inline-flex items-center gap-2'> <IoMail /> hello@revveme.com</p>
        <p className='inline-flex items-center gap-2'> <HiLocationMarker /> 2482 Yonge St Toronto ON M4P 2H5</p>
    </div>
</div>
<div>
<form action={sendMessage} className='w-full max-w-[400px] flex-flex-col py-8' data-testid="contact-form">
            <BaseInput
              placeholder='Firstname Lastname'
              name='fullname'
              id='fullname'
              className='mb-2 w-full'
              hasError={false}
              error={undefined}
              testId="name-input"
            />
            <BaseInput
              placeholder='johndoe@gmail.com'
              name='email'
              id='email'
              className='mb-2'
              hasError={false}
              error={undefined}
              testId="email-input"
            />
            <BaseTextArea 
              placeholder={'Your message'} id={'message'} name={'message'} error={undefined} />
              <button className='bg-white text-black px-6 font-medium text-sm py-2 rounded-lg w-full'>Send Message</button>
          </form>
</div>

</div>
{/* large icons */}

  <PiChatCircleDotsFill className='hidden md:block text-amber-500 text-[10vw] absolute bottom-1/2 -right-10 z-30' />
  <IoMail className='hidden md:block text-green-500 text-[15vw] -rotate-30 absolute -bottom-10 -left-20 z-10' />
  <FaPhoneAlt className='hidden md:block text-amber-500 text-[15vw] absolute bottom-10 right-0 z-10' />
   </section>
  )
}

export default Contact