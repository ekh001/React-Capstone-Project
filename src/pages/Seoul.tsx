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

// socials and links imports
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
import Header from '../assets/images/seoul-bg.jpg'

// ss photo imports
import namsan from '../assets/images/namsantower.jpg';
import bongeunsa from '../assets/images/bongeunsa.jpg';
import seokchon from '../assets/images/seokchonlake.jpg';

// eats photo imports
import liams from '../assets/images/liams.jpg';
import oreno from '../assets/images/oreno.jpg'
import highhouse from '../assets/images/highouse.jpg'


// drinks imports:
import shutter from '../assets/images/shutter54.jpg';
import coco from '../assets/images/cocolounge.jpg';
import carnivore from '../assets/images/carnivore.jpg';

// coffee imports:
import whitewhale from '../assets/images/whitewhale.jpg';
import ismile from '../assets/images/ismile.jpg';
import aroundday from '../assets/images/aroundday.jpg';



import AskChatGPT from '../components/AskChatGPT';


// interface for photo/label
interface Photo {
    src: string;
    label: string;
    address: string;
    description: string;
}

// photo grid
const SeoulCarousel = () => {

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
        { src: namsan, label: 'N Seoul Tower', address: 'N서울타워 서울 용산구 남산공원길 105',
                description: 'N Seoul Tower is an iconic landmark towering over the city of Seoul, South Korea. It offers breathtaking views of the city and is a symbol of love and hope for many.' },
        { src: bongeunsa, label: 'Bongeunsa', address: '봉은사 서울 강남구 봉은사로 531 봉은사',
                description: "Bogeunsa Temple, located in the heart of Seoul, offers a moment of serenity amongst the ever-busy city." },
        { src: seokchon, label: 'Seokchon Lake', address: '서울 송파구 잠실동',
            description: "Seokchon Lake is a picturesque lake adjacent to the towering (get it?) Lotte Tower, and is a beatiful place to go for a stroll. Come for the cherry blossoms in spring, flee because of the couples incessantly taking selfies." },       
    ];

    // food photos:
    const foodPhotos: Photo[] = [
        { src: oreno, label: "Oreno Ramen", address: '오레노라멘송파 서울 송파구 백제고분로45길 17-3 일층',
            description: "A kiosk-order Japanese style Ramen shop. Extra noodles available upon request, but not extra stomachs for seconds." },
        { src: liams, label: "Liam's Cakery", address: '오레노라멘송파 서울 송파구 백제고분로45길 17-3 일층',
        description: "A lusciously decadent bakery for cupcakes and cakes."  },
        { src: highhouse, label: 'High House', address: '하이하우스 서울 마포구 성미산로 161-10 2층',
        description: "A taco house in the heart of the quiet side of Hongdae. Vegan-friendly, GF-fam friendly, everything made in house."  },       
    ];

    // drink photos:
    const drinkPhotos: Photo[] = [
        { src: carnivore, label: "Carnivore Lounge", address: '서울 성동구 서울숲4길 20-1 지하1층',
            description: "Pop into this old-fashioned basement lounge for an old fashioned so good, you'll look past the self-proclaimed alpha male bartender's problematic views towards women" },
        { src: coco, label: "Coco Lounge", address: '코코라운지 서울 송파구 올림픽로32길 7',
        description: "A rooftop lounge on the salacious side of Jamsil with a stunning view of Lotte Tower"  },
        { src: shutter, label: 'Shutter 54', address: 'shutter54 서울 송파구 백제고분로45길 22-1 1층',
        description: "A hole-in-the-wall (literally, it seats less than ten) bar headed by the former lead bartender of Seoul's Grand Hyatt. Come for the mojitos, stay for the cats."  },       
    ];

    // coffee photos:
    const coffeePhotos: Photo[] = [
        { src: whitewhale, label: "White Whale Coffee Roasters", address: '화이트 웨일 서울 송파구 가락로33길 29',
            description: " The best single origin Ethiopia iced Americano from the best independent roaster you will ever have in your life." },
        { src: aroundday, label: "Around Day", address: '어라운드데이 서울 성동구 서울숲2길 24-1',
        description: "A rooftop cafe with some questionably unsafe stairs to a great view of Seoul Forest."  },
        { src: ismile, label: 'I Smile', address: '아이스마일 카페 서울 송파구 가락로39길 42',
        description: "Owned and operated by a sweet, plant-obsessed family that loves to treat guests to their culinary and coffee experiments."  },       
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


    <Navbar />

{/* Header */}

    <div 
      style={{ backgroundImage: `url(${Header})` }}
      className="justify-center bg-cover bg-fixed
      pt-36 pb-36 mb-20 -mt-36"
    >
        <h1 style={{ fontFamily: 'Calistoga' }}
        className="text-center text-9xl text-white drop-shadow-2xl"
        data-aos="fade-down"
        >
            Seoul
        </h1>
    </div>

{/* SS Section */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10"
        data-aos="fade-left"
        >
            <h1 
            style={{ fontFamily: 'Delicious Handrawn' }}
            className="text-8xl lg:py-44 sm:py-20 md:py-5
            text-fuchsia-500 drop-shadow-2xl bg-white
            hover:text-fuchsia-800 transition ease-linear duration-1000"
            >
                Sights to See
            </h1>

            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >
                <Slider 
                {...settings}
                >
                
                    {ssPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'
                        >

                        {/* photo */}
                        <img 
                        src={photo.src} 
                        className='object-cover w-full h-96 rounded-t-md' 
                        alt={photo.label} 
                        />

                        {/* label */}                    
                        <div 
                        className="bottom-0 left-0 right-0 py-5 px-36 rounded-b-md 
                        bg-fuchsia-950 text-white"
                        >
                            <Accordion>                                   
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                >
                                <Typography
                                >
                                    {photo.label}
                                </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography
                                    >
                                        Address: 
                                        {photo.address}
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
                data-aos="fade-right"
                >


            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >

                <Slider {...settings}>
                
                    {foodPhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'
                        >

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
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
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
            text-fuchsia-500 drop-shadow-2xl bg-white
            hover:text-fuchsia-800 transition ease-linear duration-1000"
            >
                Eats to Eat
            </h1>
        </div>


{/* Drinks Section */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-left"
        >
            <h1 style={{ fontFamily: 'Delicious Handrawn' }}
            className="text-8xl lg:py-44 sm:py-20 md:py-5
            text-fuchsia-500 drop-shadow-2xl bg-white
            hover:text-fuchsia-800 transition ease-linear duration-1000"
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
                        className='relative'
                        >

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

{/* Coffee */}
        <div 
        className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 "
        data-aos="fade-right"
        >
            {/* Carousel */}
            <div 
            className="bg-fuchsia-950 rounded-xl drop-shadow-2xl"
            >
                <Slider {...settings}
                >
                
                    {coffeePhotos.map((photo) => (
                        <div 
                        key={photo.src} 
                        className='relative'
                        >

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
            text-fuchsia-500 drop-shadow-2xl bg-white
            hover:text-fuchsia-800 transition ease-linear duration-1000"
            >
                Land of the All-Day Coffee
            </h1>
        </div>

{/* Tattoo Section */}
        <div 
        className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1
        p-5 text-center m-10 justify-center"
        data-aos="fade-up"
        >

            {/* Carousel */}
            <div 
            className="flex flex-col items-center p-10 rounded-xl drop-shadow-2xl justify-center sm:py-5"
            >
                <InstagramEmbed 
                    url="https://www.instagram.com/p/Cj5uAErLb02/" width={328} 
                />   
                
                <button 
                className="place-items-center justify-center mt-10 p-3 mb-5 rounded-md
                 bg-sky-400 text-white hover:text-sky-700 hover:bg-sky-300 
                 transition ease-linear duration-200"
                 >
                    <Link 
                    to="https://pf.kakao.com/_xcsQxgxb" target="_blank" 
                    className="flex-items-center lg:inline-block lg:mt-0 mr-4 ml-4 text-xl"
                    >
                        Contact Yeobaeg
                    </Link>
                </button>     
            </div>
            
            
            <div 
            className="flex flex-col items-center p-10 "
            >

                <h1 
                style={{ fontFamily: 'Delicious Handrawn' }} 
                className="text-9xl lg:py-44 sm:py-20 md:py-5 text-fuchsia-500  bg-white
                hover:text-fuchsia-800 transition ease-linear duration-1000"
                >
                    Get 
                </h1>
                <h1 
                style={{ fontFamily: 'Delicious Handrawn' }} 
                className="text-9xl lg:py-24 sm:py-20 md:py-5 text-fuchsia-500  bg-white
                hover:text-fuchsia-800 transition ease-linear duration-1000"
                >
                    Inked
                </h1>
            </div>

            <div 
            className="rounded-xl drop-shadow-2xl flex justify-center sm:py-5"
            >
                <InstagramEmbed 
                    url="https://www.instagram.com/p/CqklKfWrzng/" width={328} 
                />           
            </div>
        </div>


{/* OpenAI */}
        <AskChatGPT></AskChatGPT>
        
        </>
    );
};

export default SeoulCarousel;