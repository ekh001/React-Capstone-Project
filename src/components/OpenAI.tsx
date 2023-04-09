import React, { useState } from 'react';


// const TravelQuestion: React.FC = () => {
  
//   const [answer, setAnswer] = useState('');  

//   const handleQuestion = async () => {
//     try {
//       const response = await fetch('https://api.openai.com/v1/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': 'Bearer ' + API_KEY,
//         },
//         body: JSON.stringify({
//             model: 'gpt-3.5-turbo',
//             prompt: 'Got a question!' + answer,
//             max_tokens: 50,
//             temperature: 0.5,
//             top_p: 0.3,
//             frequency_penalty: 0.5,
//             presence_penalty: 0
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         setAnswer(data.choices[0].text);
//       } else {
//         throw new Error('Network response was not ok.');
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleQuestion}>Ask a question</button>
//       {answer && <p>{answer}</p>}
//     </div>
//   );
// };

// export default TravelQuestion;
