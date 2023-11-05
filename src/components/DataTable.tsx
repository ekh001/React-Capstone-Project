import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { Grid, Card, CardContent, Typography, CardActions, Button, Checkbox } from '@mui/material';
import { useGetData } from '../custom-hooks/FetchData';
import { blueGrey } from '@mui/material/colors';

function DataTable() {
  const [open, setOpen] = useState(false);
  const { destinationData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const deleteData = async (destination: any) => {
    await server_calls.delete(destination.id);
    getData();
    console.log(`Success`);
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
        style={{ width: '90%'}}
      >
        <p 
          className="p-3 text-center text-2xl text-fuchsia-700"
        >
          From here, you can add more stops to your journey, or delete one from the itinerary entirely. If you need to update, 
          just click on the card, click "Update", and enter in your new details. 
        </p>
                  
        <Grid 
          container 
          spacing={2} 
          direction="row"
          alignItems="stretch"
          
        >
          {destinationData.map((destination) => (
            <Grid 
            item key={destination.id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                onClick={() => setSelectionModel([destination.id])}
                sx={{'&:hover': {boxShadow: 5, backgroundColor: '#f9c5fa',
                // transition: 'background-color 0.1s 0.2s' 
              }}}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {destination.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {destination.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {destination.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Notes: {destination.notes}
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => deleteData(destination)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

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
            </div>
        </div>
    </>
  )
}

export default DataTable