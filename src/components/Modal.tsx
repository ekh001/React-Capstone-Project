import TravelForm from './TravelForm';

// Note to self: type and interface are very similar; their differences lie in theoreticals that I don't need to worry about yet
type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className="fixed w-full max-w-3/6 h-96 flex overflow-auto mt-24 justify-center align-middle 
            bg-gray-300 bg-opacity-0 z-10"
            >
                <div 
                    className='max-w-150px w-4/5 h-3/5 fixed flex z-1  bg-white drop-shadow-2xl rounded-xl overflow-y-auto'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <div 
                    className="w-full flex flex-col max-h-96"
                    >
                    <div 
                    className="flex flex-row space-apart justify-end"
                    >
                            <p 
                                className="flex justify-center m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                                onClick={props.onClose}>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </p>
                        </div>
                        <div 
                            className="flex flex-col items-center text-center mt-3 p-2"
                            >

                            <TravelForm id={ props.id }/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Modal
