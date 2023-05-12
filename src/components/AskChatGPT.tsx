import React from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'
import questionLogo from '../assets/images/question.svg'

const AskChatGPT = () => {

  // modal constants
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // openai const

  const [tweet, setTweet] = useState("");
  const [question, setQuestion] = useState('');
  const [sentiment, setSentiment] = useState("");
  const API_KEY = 'sk-#';

  // openai function
  async function callOpenAIAPI(){
    console.log("Calling OpenAI API...");

    const APIBody = {
      "model": "text-davinci-003",
      "prompt": "Answer this question correctly, but like you're very annoyed by the question, and remind the user that you're much smarter than they are: " + question,
      "temperature": 0.8,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.5,
      "presence_penalty": 0.0
    }

    await fetch('https://api.openai.com/v1/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(APIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setSentiment(data.choices[0].text.trim());
    })
  }
  console.log(tweet);
  return (
    <>
<div className='fixed bottom-0 right-0 w-3/6 bg-white bg-opacity-0'>
  <div className='grid grid-cols-1 place-items-end px-10  drop-shadow-2xl'>
    <button
      className=' bg-fuchsia-500 p-3 m-3 h-24 w-24 rounded-full text-fuchsia-800
      drop-shadow-2xl
      hover:bg-fuchsia-700 hover:text-white
      transition ease-linear duration-200'
      onClick={() => setIsModalOpen(true)}
    >
      <img src={questionLogo} alt="Home"
      className=''
      />
    </button>
  </div>
</div>
      <ReactModal 
      isOpen={isModalOpen} onRequestClose={closeModal}
      >
      <h2 
      style={{ fontFamily: 'Delicious Handrawn' }}
      className='text-fuchsia-800 text-5xl p-5 text-center mb-4'>Need help planning?</h2>
      
        <textarea
          className='block w-full mb-4 p-2 border-2 border-fuchsia-800 drop-shadow-lg rounded-xl text-center text-2xl'
          onChange={(e) => setQuestion(e.target.value)}
          placeholder='Type your travel question here! Skippy, our helpful AI, will happily answer it for you.'
          cols={50}
          rows={10}
        />
        <div className='flex justify-center space-x-4'>
          <button
            className='bg-fuchsia-400 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700
            transition ease-linear duration-200'
            onClick={callOpenAIAPI}
          >
            Ask Me Anything
          </button>
          <button
            className='bg-fuchsia-400 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700
            transition ease-linear duration-200'
            onClick={closeModal}
          >
            Exit
          </button>
          </div>
        {sentiment !== '' && (
          <div 
          className='grid grid-cols-1 text-center place-items-center p-10 text-xl
          transition ease-linear duration-200'>
            <h3
            style={{ fontFamily: 'Delicious Handrawn' }}
            className='text-fuchsia-800 text-3xl p-5 text-center tracking-wide'>{sentiment}</h3>
          </div>
        )}
      </ReactModal>
    </>
  );
}

export default AskChatGPT
