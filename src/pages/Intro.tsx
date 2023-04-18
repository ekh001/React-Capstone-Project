import React from 'react'
import IntroImage from '../assets/images/landing-img6.jpg'
import Background from '../assets/images/landing-img2.jpg'
import Navbar from '../components/NavBar'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

import PageTransition from '../components/PageTransition';
import SongPlayer from '../components/SpotifySong'

// animations import
import AOS from 'aos'
import 'aos/dist/aos.css'



function Intro() {

      // animation stuff:
      useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const [isVisible, setIsVisible] = useState(false)


    const clicked = () => {
      setIsVisible(false)
  }

  // login const
  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
        // location.reload();
        console.log('successful login');
    }
}

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };



  return (

    <div 
      style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
      className="justify-center bg-cover bg-fixed h-screen"
    >
    <PageTransition pageVariants={pageVariants}>
    <div 
      className="flex justify-center h-full"
      >
  
      <div 
        className="grid place-items-center p-4 m-10 bg-white  bg-opacity-80 
        rounded-md drop-shadow-xl"
        >
              

              <div 
          className="flex place-items-center"
          >


          <div className='pb-20'>
            <p 
            style={{ fontFamily: 'Calistoga' }}
            className='p-5 text-6xl lg:text-8xl lg:p-10 tracking-wide
            text-fuchsia-900 text-center drop-shadow-2xl'
            data-aos="zoom-out-up"
            >
              SeoulMate
            </p>
            <p 
            style={{ fontFamily: 'Delicious Handrawn' }}
            className='p-5 pt-20 text-5xl lg:text-7xl lg:p-10 tracking-wide
            text-fuchsia-600 text-center drop-shadow-2xl'
            data-aos="zoom-out-down"
            >
              Your Ultimate Korea Travel Buddy
            </p>
          </div>

            <img 
            src={IntroImage} alt="" 
            className="h-3/6 w-2/5 mr-4 ml-4 mt-4 drop-shadow-2xl
            border-2 border-black rounded-full"
            data-aos="zoom-out-right" 
            />
        </div>

        <div 
        className=' grid grid-cols-2 place-items-center'
        data-aos="zoom-out-right"
        >
          

          <button 
          className="p-2  w-5/6 bg-sky-200 opacity-70 justify-center rounded-md
          hover:text-sky-700 text-xl hover:bg-sky-300 transition ease-linear duration-200"
          >
              <div>
                  <Link   
                  onClick={ () => { signInOnClick()}} 
                  to="/intro"
                  className="flex-items-center mt-4 lg:inline-block lg:mt-0
                  text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                  
                  >
                      Log in with <i 
                      className="fa-brands fa-google" 
                      style={{color: "#c954c5",}}
                      >
                      </i>
                  </Link>
              </div>
            </button>
        <SongPlayer></SongPlayer>
        </div>       
      </div>    
    </div>
    </PageTransition>   
  </div>
  
  )
}

export default Intro
