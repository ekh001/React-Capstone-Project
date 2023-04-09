import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },

]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { destinationData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`),
        setTimeout(() => {window.location.reload()}, 1000);
    }

    return (
        <>

        

        {/* 1. Modal (popup) */}
            <Modal 
                id={selectionModel}
                open={open} 
                onClose={handleClose}       
            />

        {/* 2. Data Table section */}

        
        <div 
        className={"container mx-10 my-10 flex flex-col"}
        style={{ height: 400, width: '90%'}}
        >
            <p 
            className="p-3 bg-white text-center text-xl text-sky-700"
            >
                Select a destination if you need to make some changes:
            </p>
                 



            <DataGrid 
             rows={destinationData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}/>

        </div>

        {/*2.  Buttons */}
        <div 
        className='flex flex-row justify-center'
        >
            <div>
                <button
                className='place-items-center justify-center m-3 p-3 mb-5 
                bg-fuchsia-300 bg-opacity-40 text-fuchsia-600 rounded-md 
                hover:bg-fuchsia-300 hover:border
                hover:border-fuchsia-600 hover:text-white transition ease-linear duration-200'
               
                onClick={() => handleOpen()}
                >
                    Add New Destination
                </button>

                <button
                className='place-items-center justify-center m-3 p-3 mb-5 
                bg-fuchsia-300 bg-opacity-40 text-fuchsia-600 rounded-md 
                hover:bg-fuchsia-300 hover:border
                hover:border-fuchsia-600 hover:text-white transition ease-linear duration-200'
               
                onClick={handleOpen}
                >
                    Update Trip Info
                </button>

                <button
                className='place-items-center justify-center m-3 p-3 mb-5 
                bg-fuchsia-300 bg-opacity-40 text-fuchsia-600 rounded-md 
                hover:bg-fuchsia-300 hover:border
                hover:border-fuchsia-600 hover:text-white transition ease-linear duration-200'
               
                onClick={deleteData}
                >
                    Delete Destination
                </button>
            </div>
        </div>
    </>
  )
}

export default DataTable