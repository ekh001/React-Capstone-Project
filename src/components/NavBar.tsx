import { useState } from 'react'
import { Link } from 'react-router-dom'

import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {

    // constants
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.href = '/';
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    const [open, setOpen] = useState(true)
    
    return (

        <nav 
        className='flex items-center w-full justify-between flex-wrap p-3 
        bg-black bg-opacity-0'
        >
            <div 
            className='flex items-center flex-shrink-0 text-white '
            >
            </div>


                <button
                onClick={dropDown}
                className={`flex items-center px-3 py-2 border border-fuchsia-800 bg-white bg-opacity-70 rounded-full  
                ${!isVisible && "rotate-180"} duration-300`}

                 >

                    <i 
                    className="fa-solid fa-arrow-up-from-bracket" style={{color: "#c954c5",}}
                    >
                    </i>

                </button>

                { isVisible ? ( 
                    <div 
                    style={{ transition: 'all 5s' }} 
                    className={`w-full flex text-center transition-all ease-out duration-500`}
                    >
                        <div 
                        className='text-sm flex-grow'
                        >
                            <button 
                            className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                                border-fuchsia-800 border-2
                                hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                            >
                                <div>
                                    <Link 
                                    to='/intro' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-fuchsia-600 hover:text-white mr-4 ml-4"
                                        >
                                            Home
                                    </Link>
                                </div>
                            </button>

                            <button 
                            className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                            border-fuchsia-800 border-2
                            hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                        >
                                <div>
                                    <Link 
                                    to='/seoul' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-fuchsia-600 hover:text-white mr-4 ml-4"
                                    >
                                        Seoul
                                    </Link>
                                </div>
                            </button>

                            <button 
                            className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                            border-fuchsia-800 border-2
                            hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                        >
                                <div>
                                    <Link 
                                    to='/busan' 
                                    onClick={ clicked } 
                                    className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-fuchsia-600 hover:text-white mr-4 ml-4"
                                    >
                                        Busan
                                    </Link>
                                </div>
                            </button>
                            <>
                            { auth.currentUser && (
                            <button 
                                className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                                border-fuchsia-800 border-2
                                hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                            >
                                <div>
                                    <Link 
                                        to='/dashboard' 
                                        onClick={ clicked } 
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-fuchsia-600 hover:text-white mr-4 ml-4"
                                    >
                                        My Saved Places
                                    </Link>
                                </div>
                            </button>
                            )}
                            </>

                            {
                                !auth.currentUser ?
                                <>

                                <button 
                                className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                                border-fuchsia-800 border-2
                                hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                            >
                                    <div>
                                        <Link 
                                        to="/" 
                                        onClick={ () => { signInOnClick()}} 
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-fuchsia-600 hover:text-white mr-4 ml-4"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </button>
                                </>
                                :
                                <>

                                <button 
                                className="p-2 m-5 bg-fuchsia-200 opacity-80 justify-center rounded-md 
                                border-fuchsia-800 border-2
                                hover:text-fuchsia-700 hover:bg-fuchsia-300 transition ease-linear duration-200"
                            >
                                    <div>
                                        <Link 
                                        to="/" 
                                        onClick={ () => { signOutOnClick()}} 
                                        className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                        text-fuchsia-600 hover:text-white mr-4 ml-4"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </button>
                                </>
                            }
                        </div>
                    </div>
                    ) : ( 
                    <></> 
                )}

        </nav>
  );
};

export default Navbar
