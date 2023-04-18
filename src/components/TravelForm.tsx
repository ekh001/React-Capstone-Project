import React from 'react'

import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import {  chooseName, chooseCategory, chooseLocation, chooseNotes, chooseID  } from '../redux/slices/RootSlice'

// interface
interface TravelFormProps {
  id?: string[],
}

const TravelForm = (props:TravelFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {

    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated itinerary: ${ data } ${ props.id }`);


      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {



      const newDestination = {
        name: data.name,
        location: data.location,
        category: data.category,
        notes: data.notes,

      };
      

      dispatch(chooseName(data.name));
      dispatch(chooseLocation(data.location));
      dispatch(chooseCategory(data.category));
      dispatch(chooseNotes(data.notes));
      dispatch(chooseID(data.id));
      

      server_calls.create(newDestination);
      
      setTimeout( () => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>
            Name of Destination
          </label>
          <Input {...register('name')} name='name' placeholder='Name'/>
        </div>
        <div>
          <label htmlFor='location'>
            Location
          </label>
          <Input {...register('location')} name='location' placeholder='Location'/>
        </div>
        <div>
          <label htmlFor='category'>
            Category
          </label>
          <Input {...register('category')} name='category' placeholder='Category'/>
        </div>
        <div>
          <label htmlFor='notes'>
            Notes
          </label>
          <Input {...register('notes')} name='notes' placeholder='Notes'/>
        </div>

        <div className="flex p-1 justify-center">
          <button
            className='place-items-center justify-center m-3 p-3 mb-5 rounded-md
             bg-sky-300 bg-opacity-40 text-sky-600
             hover:bg-sky-300 hover:border
             hover:border-sky-600 hover:text-white transition ease-linear duration-200'
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default TravelForm