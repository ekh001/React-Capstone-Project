import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar'

import { Link } from 'react-router-dom'



// import FooterBackground from '../assets/images/footer-image.svg'
// import HowItWorksBg from '../assets/images/about-bg.svg'
// import AuthorBg from '../assets/images/authors-bg.png'
// import BannedBg from '../assets/images/banned-bg.png'
// import introSource from '../assets/images/intro-image4.jpg'
// import celesteSource from '../assets/images/celesteng.jpg'
// import chimaSource from '../assets/images/CNA-01.jpg'
// import davidSource from '../assets/images/davidjoy3.jpeg'

import PageTransition from '../components/PageTransition';
// import AirVisualWidget from '../components/AirVisual';


// import { InstagramEmbed } from 'react-social-media-embed';
// import { TikTokEmbed } from 'react-social-media-embed';

function About() {

    const [isVisible, setIsVisible] = useState(false)


    const clicked = () => {
      setIsVisible(false)
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
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

    <div>

        <PageTransition pageVariants={pageVariants}>


            {/* Intro */}
            <div 
            // style={{     backgroundImage: `url(${HowItWorksBg})`, 
            // backgroundSize: 'cover',
            // backgroundPosition: 'center center', }}
            className=" pb-72 px-5 text-center text-white text-l "
            >          
            
            
            <Navbar />
            
            <div 
            className="grid grid-cols-2 text-center justify-center-center text-xl place-items-center"
            >
            
                {/* <img 
                src={introSource}  
                style={{ height: '75%', width: 'auto' }} alt="" 
                className='drop-shadow-2xl border-2px border-black'
                /> */}

                <div>
                        <h3 
                        style={{ fontFamily: 'Calistoga' }} 
                        className='text-6xl text-sky-800'
                        >
                            Open Up a New World
                        </h3>
                <p 
                className="p-5 m-5 text-2xl"
                >
                    Picture it: It's Friday night, and it's been a long week.  Time to curl up on the couch 
                    with some tea (or wine, if you're feeling spicy) and a good book. You consult your bookshelf, 
                    only to discover that you've already read everything
                    in it. 
                </p>
                <p 
                className="pb-20 text-2xl"
                >
                    The horror. The sadness. The total and utter devastation. The melodramatics.
                    We've all been there, right? (...right...?) Anyway, don't worry; we've got you. 
                </p> 
                </div>
            </div>
        </div>

        {/* EXPERIMENT */}



            

            {/* Quote */}
            <div 
                className='mt-[-120px] mb-[-200px]'
            >
                <div 
                className="flex p-3 place-items-center justify-center"
                >
                    <div 
                    className='p-5 text-center text-4xl text-sky-800'
                    >
                        {/* <AirVisualWidget /> */}
                        <h1 className='p-5' 
                        >
                            “But we must tell our stories, and not be ensnared by them.”
                        </h1>

                        <p 
                        style={{ fontFamily: 'Calistoga' }} 
                        >
                            Ta-Nehisi Coates, The Water Dancer
                        </p>
                    </div>
                    
                    <iframe width="600" height="300"
                    src="https://www.youtube.com/embed/jlm9E7PxHe4" 
                    title="Inside the Book: Ta-Nehisi Coates (THE WATER DANCER)"
                    >
                    </iframe>
                </div>
            </div>

            {/* Featured Authors */}
            <div 
            // style={{     backgroundImage: `url(${AuthorBg})`, 
            // backgroundSize: 'cover',
            // backgroundPosition: 'center center', }}
            className='pt-96 pb-10'
            >
                <div 
                style={{ fontFamily: 'Calistoga' }} 
                className='text-center text-5xl text-sky-700 drop-shadow-2xl'
                >
                Featuring Work From
                </div>

                <div 
                className="grid grid-cols-3 gap-4 p-3 pb-10"
                >
                    <div 
                    className="p-5 bg-white bg-opacity-80 border-black border-2 drop-shadow-md items-center justify-center"
                    >
                        {/* <img src={celesteSource} alt="" 
                        className='w-full h-5/6 drop-shadow-xl rounded-md'
                        /> */}
                        <p 
                        className=" 
                        text-center mt-4 text-xl"
                        >
                            Celeste Ng
                        </p>    
                    </div>

                    <div 
                    className="p-5 bg-white bg-opacity-80 border-black border-2 drop-shadow-md items-center justify-center"
                    >
                        {/* <img src={chimaSource} alt="" 
                        className='w-full h-5/6 drop-shadow-xl rounded-md'
                        /> */}
                        <p 
                        className=" 
                        text-center mt-3 text-xl"
                        >
                            Chimamanda Ngozi Adichie
                        </p>     
                    </div>

                    <div 
                    className="p-5 bg-white bg-opacity-80 border-black border-2 drop-shadow-md items-center justify-center"
                    >
                        {/* <img src={davidSource} alt="" 
                        className='w-full h-5/6 drop-shadow-xl rounded-md'
                        /> */}
                        <p 
                        className=" 
                        text-center mt-4 text-xl"
                        >
                            David Joy
                        </p>       
                    </div>
                </div>
            </div>



        {/* Bookstore Locator */}
            <div 
            className="bg-white"
            >
                <div 
                className="grid grid-cols-2 gap-10 m-3 p-5 text-center place-items-center justify-center text-sky-800"
                >
                    <div 
                    className="place-items-center justify-center"
                    >
                        <h3 
                        style={{ fontFamily: 'Calistoga' }} 
                        className='text-6xl'
                        >
                            Down With Amazon. Shop Independent
                        </h3>

                        <p 
                        className=' pt-10   text-2xl'
                        >
                            Let's be real, Bezos doesn't need any more money for his
                            ridiculous phallic rockets. You can help stave off the consequences 
                            of late-stage capitalism by supporting your local independent bookstores, like
                            The Novel Neighbor! Click the link to find one 
                            near you. 
                        </p> 


                        <button 
                        className='place-items-center 
                        justify-center mt-24 p-3 mb-5 rounded-md bg-sky-400 text-white 
                        hover:text-sky-700 hover:bg-sky-300 transition ease-linear duration-200'
                        >
                            <Link 
                            to='https://www.indiebound.org/' onClick={ clicked } target="_blank" 
                            className="flex-items-center lg:inline-block lg:mt-0
                            mr-4 ml-4 text-xl"
                            >
                                Onwards to Indiebound
                            </Link>
                        </button>
                    </div>

                    <div>


                        <div 
                        style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            {/* <TikTokEmbed 
                            url="https://www.tiktok.com/@novelneighbor/video/7185323923486117163" width={325} height='90%' 
                            /> */}
                        </div>
                    </div>
                </div>


            {/* Banned Books */}
            <div 
            // style={{     backgroundImage: `url(${BannedBg})`, 
            // backgroundSize: 'cover',
            // backgroundPosition: 'center center', }}
            className='mt-[-300px] mb-[-200px] pt-96 pb-20'
            >
                <div 
                className='grid grid-cols-2 gap-4 m-3 p-5 place-items-center justify-center text-white'
                >
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        {/* <InstagramEmbed 
                        url="https://www.instagram.com/p/CgC4quDvIM4/" width={328} 
                        /> */}
                    </div>


                    <div 
                    className='text-center p-3'
                    >
                        <h3 
                        style={{ fontFamily: 'Calistoga' }} 
                        className="text-6xl text-sky-700 drop-shadow-2xl"
                        >
                            Stand With the Banned
                        </h3>
                        <p 
                    className='pt-10 pb-3 text-center text-2xl'
                    >
                        If you're living in the South (or a concerningly
                        large swath of the US right now), there's a chance 
                        your state is trying to limit access to books that promote crazy 
                        ideas like, "maybe cis white supremacy isn't the greatest 
                        approach to a well-functioning and inclusive society after all," 
                        or "women are people," or "slavery was bad". The Banned Books 
                        Book Club is a monthly virtual banned books club that is 
                        dedicated to advocating for banned books, as well as
                        celebrating free expression.             
                    </p>
                    <div className="airvisual_widget" key="6426122dfa0a35d90eb74a9c"></div>
<script type="text/javascript" src="https://widget.iqair.com/script/widget_v3.0.js"></script>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="airvisual_widget" key="6426122dfa0a35d90eb74a9c"></div>
<script type="text/javascript" src="https://widget.iqair.com/script/widget_v3.0.js"></script> */}

            {/* Empty Footer */}
                <div 
                // style={{ backgroundImage: `url(${FooterBackground})`, 
                //        backgroundSize: 'cover',
                //        backgroundPosition: 'center center', }} 
                       className="className='pt-96  flex place-content-center justify-center place-items-center">                        
                        
                </div>
                
    </PageTransition>

        
</div>
  

  )
}

export default About
