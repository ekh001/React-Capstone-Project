import LandingImage from '../assets/images/landing-img9.jpg'
import Background from '../assets/images/home-bg.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


import React from 'react';

import PageTransition from '../components/PageTransition';




function Home() {

  const [isVisible, setIsVisible] = useState(false)


  const clicked = () => {
    setIsVisible(false)
  }

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  
    // Modal Style:
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'rgba(135,206,235)',
      color: '	rgba(0,0,128)',
      border: '4px solid rgba(0, 191, 255)',
      borderRadius: '20px',
      boxShadow: 24,
      p: 4,
    }

      // Page Transition:
    const pageVariants = {
      initial: {
        opacity: 0,
        x: "100vw",
      },
      animate: {
        opacity: 1,
        x: "0",
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 10,
        },
      },
      exit: {
        opacity: 0,
        x: "-100vw",
        transition: {
          ease: "easeInOut",
        },
      },
    };

  return (


    <div 
    style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
    className=" justify-center  bg-cover bg-fixed h-screen"
    >

      <div 
        style={{ height: '100%' }} 
        className="flex justify-center place-items-center"
      >

      <PageTransition pageVariants={pageVariants}>

        <div 
        className="grid place-items-center m-5 bg-white bg-opacity-100 
        rounded-md drop-shadow-xl"
        >

          <div 
          className="grid grid-cols-2 place-items-center"
          >

            <h1 
            style={{ fontFamily: 'Delicious Handrawn' }}
            className="flex-grow p-10 text-center text-6xl tracking-wide text-fuchsia-800"
            >
              <p>
                Where are we headed?
              </p>

            <div 
            className='grid grid-cols-2 gap-4 place-items-center mt-10'
            >
              <button 
              className='flex flex-grow place-items-center rounded-md 
              justify-center mt-5 p-3 text-xl font-sans  bg-sky-300 bg-opacity-40 text-sky-600 
              hover:text-white hover:bg-sky-300 hover:border hover:border-sky-600  
              transition ease-linear duration-200'
              >
                <Link 
                to='/Seoul' onClick={ clicked } 
                className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4"
                >
                  Seoul
                </Link>
              </button>        

              
              <button 
              className='flex flex-grow place-items-center rounded-md 
              justify-center mt-5 p-3 text-xl font-sans  bg-sky-300 bg-opacity-40 text-sky-600 
              hover:text-white hover:bg-sky-300 hover:border hover:border-sky-600  
              transition ease-linear duration-200'
              >
                <Link 
                to='/busan' onClick={ clicked } 
                className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4"
                >
                  Busan
                </Link>
              </button> 
            </div>       
          </h1>  

          <img 
            src={LandingImage} alt="" 
            className="h-96 rounded-r-md w-full" 
            /> 
        </div>  
    </div>
    </PageTransition> 
  </div>
    </div>

  )
}



export default Home
