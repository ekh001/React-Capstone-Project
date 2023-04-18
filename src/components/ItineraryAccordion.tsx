import { server_calls } from '../api/server';
import { useGetData } from '../custom-hooks/FetchData';
import React, { useState } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function SimpleAccordion() {
    const { destinationData, getData } = useGetData();
   


  return (
    <div style={{ height: 400, width: '90%'}} className='m-10 text-center justify-center place-items-center'>
      {destinationData.map(item => (
        <div className="text-center justify-center place-items-center">
        <Accordion key={item.id}>
            
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=''>Location: {item.location}</Typography>
            <Typography>Notes: {item.notes}</Typography>
            <Typography>Category: {item.category}</Typography>
          </AccordionDetails>          
        </Accordion>
        
        </div>
        
      ))}
      
    </div>
  );
}