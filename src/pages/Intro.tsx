import React from 'react'
import IntroImage from '../assets/images/landing-img6.jpg'
// import IntroBg from '../assets/images/intro-header.png'
import Navbar from '../components/NavBar'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

import PageTransition from '../components/PageTransition';
import SongPlayer from '../components/SpotifySong'



function Intro() {

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
    style={{  height: 'calc(100vh) !important' }}
    className="flex bg-black justify-center bg-cover bg-fixed h-screen"
    >
    <PageTransition pageVariants={pageVariants}>
    <div 
      className="flex justify-center items-center h-full"
      >
  
        <div 
        className="grid place-items-center p-4 m-12 bg-white bg-opacity-20 
        rounded-md drop-shadow-xl"
        >
              

        <div 
        className="grid grid-cols-2 gap-4 items-center p-2 text-center text-white text-xl lg:text-2xl"
        >


          <div>
          <p className='p-5'>
          Welcome to the Korea travel planner! Whether you're a kimchi enthusiast or a K-pop fanatic, we've got you covered with the best recommendations for your next adventure in the Land of the Morning Calm (and BTS). So come with us and let's explore the hidden gems of Korea together!
          </p>
          
          </div>

          <img 
          src={IntroImage}  style={{ height: 'auto', width: 'auto' }} alt="" 
          className='rounded-full drop-shadow-2xl border-2px border-black'
          />
        </div>

        <div 
        className=' grid grid-cols-2 place-items-center'
        >
          

<button 
                                className="p-2  w-3/6 bg-sky-200 opacity-70 justify-center rounded-md
                                hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200"
                                >
                                    <div>
                                        <Link 
                                         
                                        onClick={ () => { signInOnClick()}} 
                                        to="/intro"
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-sky-600 hover:text-white mr-4 ml-4 transition ease-linear duration-200"
                                        >
                                            Login
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
