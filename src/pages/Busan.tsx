// program imports - Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// program imports - Accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from 'react-router-dom'

// animations import
import AOS from 'aos'
import 'aos/dist/aos.css'

// component imports
import Navbar from '../components/NavBar';
import PageTransition from '../components/PageTransition';


// button imports:
import Modal from '../components/Modal'
import React, { useState, useEffect } from 'react'
import { server_calls } from '../api/server';

import { useGetData } from '../custom-hooks/FetchData';

// background imports
import Header from '../assets/images/busan.jpg'

// ss photo imports
import temple from '../assets/images/haedong.jpg';
import museum from '../assets/images/busanartmuseum.jpg';

// eats photo imports
import senso from '../assets/images/ryusenso.jpg';
import sushi from '../assets/images/yongichobap.jpg'



// drinks imports:
import joseph from '../assets/images/joseph.jpg';
import oasis from '../assets/images/oasis.jpg';


// play imports:
import beach from '../assets/images/haeundae.jpg';
import spa from '../assets/images/spaland.jpg';


import AskChatGPT from '../components/AskChatGPT';


// interface for photo/label
interface Photo {
    src: string;
    label: string;
    address: string;
    description: string;
}

// photo grid
const BusanCarousel = () => {

    // animation stuff:
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    // button stuff:
    const [ open, setOpen ] = useState(false);
    const { destinationData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    // sightseeing photos:
    const ssPhotos: Photo[] = [
        { src: temple, label: 'The Temple by the Sea (Haedongyongungsa)', address: '해동용궁사 부산 기장군 기장읍 용궁길 86 해동용궁사',
                description: 'Climb down some (a lot) of steps to a breathtaking temple sitting on the coast of Busan.' },
        { src: museum, label: 'Busan Art Museum', address: '부산시립미술관 부산 해운대구 APEC로 58',
                description: "Busan's ultimate contemporary art museum" },
        
    ];

    // food photos:
    const foodPhotos: Photo[] = [
        { src: senso, label: "Ryu Senso Ramen", address: '류센소 광안직영점 부산 수영구 남천바다로33번길 27 1층 류센소 광안직영점',
            description: "The best ramen in the city." },
        { src: sushi, label: "Yongi Chobap", address: '용이초밥 부산 수영구 광남로108번길 11',
        description: "A spot to enjoy some sushi by the ocean that provided it (maybe. I'm not going to make assumptions as to where they get their seafood here)."  },
  
    ];

    // drink photos:
    const drinkPhotos: Photo[] = [
        { src: joseph, label: "Joseph", address: '조셉 부산 수영구 광안로61번나길 4 1층',
            description: "Joseph approves of this bar recommendation" },
        { src: oasis, label: "Bar Oasis", address: '바 오아시스 부산 수영구 광안해변로 237 2층 201호 오아시스',
        description: "A lounge with a view of the ocean"  },
        
    ];

    // play photos:
    const playPhotos: Photo[] = [
        { src: spa, label: 'SpaLand by Centum City', address: '스파랜드 부산 해운대구 센텀남대로 35 신세계백화점센텀시티점',
                description: 'Hands down the greatest thing ever brought into fruition. 10/10. No notes. You must add this to your plans.' },

        { src: beach, label: 'Haeundae Beach', address: '주소보기부산광역시 해운대구 우동',
            description: "Haeundae Beach is the second-most popular beach in Busan. The perfect spot to play in the waves and watch the sunset." },        
    ];


    // carousel settings:
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // height: 900,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    // page transition
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

    // modal stuff:
    <>
    <Modal 
    id={selectionModel}
    open={open} 
    onClose={handleClose}       
    />    

{/* Header */}
    <div 
      style={{ backgroundImage: `url(${Header})` }}
      className="justify-center bg-cover bg-fixed
      pt-36 pb-36 mb-20 -mt-36"
      data-aos="fade-down"
    >
        <Navbar />
        
        <h1 
        style={{ fontFamily: 'Calistoga' }}
        className="text-center text-9xl text-white drop-shadow-2xl"
        >
            Busan
        </h1>
    </div>




{/* SS Section */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-right"
        >
            <h1 
            style={{ fontFamily: 'Delicious Handrawn' }}
            className="text-8xl lg:py-44 sm:py-20 md:py-5
            text-fuchsia-500 drop-shadow-2xl bg-white"
            >
                Sights to See
            </h1>

            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >
           
                <Slider {...settings}>
                
                    {ssPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'>

                            {/* photo */}
                            <img 
                            src={photo.src} 
                            className='object-cover w-full h-96 rounded-t-md' 
                            alt={photo.label} />

                            {/* label */}                    
                            <div 
                            className="bottom-0 left-0 right-0 py-5 px-36 rounded-b-md 
                            bg-fuchsia-950 text-white"
                            >
                            <Accordion>                                   
                                <AccordionSummary 
                                expandIcon={<ExpandMoreIcon />}
                                >
                                <Typography
                                >
                                    {photo.label}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography
                                >
                                    Address: {photo.address}
                                </Typography>
                                <Typography
                                >
                                    {photo.description}
                                </Typography>
                                </AccordionDetails>          
                            </Accordion>
                        </div>

                        <div>
                            <button
                            className='
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                place-items-center rounded-md justify-center
                                p-3 text-xl 
                                bg-black bg-opacity-60 text-white 
                                hover:bg-fuchsia-950 hover:border
                                hover:border-black hover:bg-opacity-80 hover:text-white transition ease-linear duration-200'
                            onClick={() => handleOpen()}
                            >
                                Add New Destination
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>


{/* Food Section */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-left"
        >

            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >
                <Slider {...settings}>
                
                    {foodPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'>

                        {/* photo */}
                            <img 
                            src={photo.src} 
                            className='object-cover w-full h-96 rounded-t-md' 
                            alt={photo.label} />

                            {/* label */}                    
                            <div 
                            className="bottom-0 left-0 right-0 py-5 px-36 rounded-b-md 
                            bg-fuchsia-950 text-white"
                            >
                            <Accordion>                                   
                                <AccordionSummary 
                                expandIcon={<ExpandMoreIcon />}
                                >
                                <Typography
                                >
                                    {photo.label}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography
                                >
                                    Address: {photo.address}
                                </Typography>
                                <Typography
                                >
                                    {photo.description}
                                </Typography>
                                </AccordionDetails>          
                            </Accordion>
                        </div>

                        <div>
                            <button
                            className='
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                place-items-center rounded-md justify-center
                                p-3 text-xl 
                                bg-black bg-opacity-60 text-white 
                                hover:bg-fuchsia-950 hover:border
                                hover:border-black hover:bg-opacity-80 hover:text-white transition ease-linear duration-200'
                            onClick={() => handleOpen()}
                            >
                                Add New Destination
                            </button>
                        </div>
                </div>
            ))}
            </Slider>
            </div>

                <h1 style={{ fontFamily: 'Delicious Handrawn' }}
                className="text-8xl lg:py-36 sm:py-20 md:py-5
                text-fuchsia-500 drop-shadow-2xl bg-white"
                >
                    Eats to Eat
                </h1>
        </div>


{/* Drinks Section */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-right"
        >
            <h1 style={{ fontFamily: 'Delicious Handrawn' }}
            className="text-8xl lg:py-44 sm:py-20 md:py-5
            text-fuchsia-500 drop-shadow-2xl bg-white"
            >
                Drinks to Drink
            </h1>

            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >
                <Slider {...settings}>
                
                    {drinkPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'>

                            {/* photo */}
                            <img 
                            src={photo.src} 
                            className='object-cover w-full h-96 rounded-t-md' 
                            alt={photo.label} />

                            {/* label */}                    
                            <div 
                            className="bottom-0 left-0 right-0 py-5 px-36 rounded-b-md 
                            bg-fuchsia-950 text-white"
                            >

                            <Accordion>                                   
                                <AccordionSummary 
                                expandIcon={<ExpandMoreIcon />}
                                >
                                <Typography
                                >
                                    {photo.label}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography
                                >
                                    Address: {photo.address}
                                </Typography>
                                <Typography
                                > 
                                {photo.description}
                                </Typography>
                                </AccordionDetails>          
                            </Accordion>
                        </div>

                        <div>
                            <button
                            className='
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                place-items-center rounded-md justify-center
                                p-3 text-xl 
                                bg-black bg-opacity-60 text-white 
                                hover:bg-fuchsia-950 hover:border
                                hover:border-black hover:bg-opacity-80 hover:text-white transition ease-linear duration-200'
                            onClick={() => handleOpen()}
                            >
                                Add New Destination
                            </button>
                        </div>
                </div>
            ))}
            </Slider>  
            </div>
        </div>

{/* Let's Play */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-left"
        >


    {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >

                <Slider {...settings}>
                
                    {playPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'>

                            {/* photo */}
                            <img 
                            src={photo.src} 
                            className='object-cover w-full h-96 rounded-t-md' 
                            alt={photo.label} />

                            {/* label */}                    
                            <div 
                            className="bottom-0 left-0 right-0 py-5 px-36 rounded-b-md 
                            bg-fuchsia-950 text-white"
                            >
                                <Accordion>                                   
                                    <AccordionSummary 
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                    <Typography
                                    >
                                        {photo.label}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography
                                    >
                                        Address: {photo.address}
                                    </Typography>
                                    <Typography
                                    > 
                                    {photo.description}
                                    </Typography>
                                    </AccordionDetails>          
                                </Accordion>
                            </div>
                            
                            <div>

                                <button
                                className='
                                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                    place-items-center rounded-md justify-center
                                    p-3 text-xl 
                                    bg-black bg-opacity-60 text-white 
                                    hover:bg-fuchsia-950 hover:border
                                    hover:border-black hover:bg-opacity-80 hover:text-white transition ease-linear duration-200'
                                onClick={() => handleOpen()}
                                >
                                    Add New Destination
                                </button>
                        </div>
                </div>
            ))}
            </Slider>
            
            </div>
            <h1 style={{ fontFamily: 'Delicious Handrawn' }}
            className="text-8xl lg:py-36 sm:py-20 md:py-5
            text-fuchsia-500 drop-shadow-2xl bg-white"
            >
                Let's Play
            </h1>
        </div>

{/* </PageTransition> */}
        <AskChatGPT></AskChatGPT>
        
        </>
    );
};

export default BusanCarousel;