import React from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { Tilt } from 'react-tilt'
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [loading, setLoading] = useState(false);
  const handleChange = (e)=>{
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_81jbt4s",
        "template_ojqd54i",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        "N0CiWrnd3_l4oWc1z"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }
  return (
    <>
    <div className={`${styles.padding} mx-auto xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left","ease-in",0.2,1)} className='flex-[0.75] p-8 rounded-xl'>
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <p className={`${styles.sectionHeadText} text-center`}>Contact</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl ml-[170px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center'
      >
        <Tilt>
        <div options={{scale:0.5, max:1}} className='flex flex-col justify-center h-[350px] w-[280px] rounded-xl bg-white-800 shadow-xl'>
          <img src="/assets/intro.jpg" alt="image" className='h-[270px] w-[250px] ml-4 shadow-card mb-4 rounded-lg' />
          <p className='contact font-semibold text-black-600 text-xl text-right mr-3'>Let's talk</p>
        </div>

        </Tilt>
      </motion.div>
    </div>
    <div className='w-full mb-4'>
      <marquee behavior="scroll" scrollamount="20" direction="right">
        <p className='project text-5xl'>Thank you for visiting</p>
      </marquee>
      </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact");