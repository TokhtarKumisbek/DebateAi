// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import celebrities, { Celebrity } from '../../app/celebrities';

// const CelebrityPage: React.FC = () => {
//   const router = useRouter();
//   const { name } = router.query;
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [celebrity, setCelebrity] = useState<Celebrity | null>(null);

//   useEffect(() => {
//     if (name && typeof name === 'string') {
//       const foundCelebrity = celebrities.find((celeb) => celeb.name.toLowerCase().replace(/ /g, '-') === name);
//       setCelebrity(foundCelebrity || null);
//     }
//   }, [name]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:3001/ask-question', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ question })
//     });
//     const data = await res.json();
//     setResponse(data.videoUrl);
//   };

//   if (!celebrity) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-red-500">Celebrity not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Ask a Question to {celebrity.name}</h1>
//           <img
//             src={celebrity.image}
//             alt={celebrity.name}
//             className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
//           />
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="question" className="block text-lg font-medium text-gray-700">
//               Question:
//             </label>
//             <input
//               type="text"
//               id="question"
//               name="question"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               required
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your question here"
//             />
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {response && (
//           <div className="mt-8 p-4 bg-gray-200 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-2">Response:</h2>
//             <pre className="text-left whitespace-pre-wrap">{response}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CelebrityPage;




// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import celebrities, { Celebrity } from '../../app/celebrities'; // Adjusted import path

// const CelebrityPage: React.FC = () => {
//   const router = useRouter();
//   const { name } = router.query;
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [celebrity, setCelebrity] = useState<Celebrity | null>(null);

//   useEffect(() => {
//     if (name && typeof name === 'string') {
//       const foundCelebrity = celebrities.find((celeb) => celeb.name.toLowerCase().replace(/ /g, '-') === name);
//       setCelebrity(foundCelebrity || null);
//     }
//   }, [name]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:3001/ask-question', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ question, celebrity: celebrity?.name })
//     });
//     const data = await res.json();
//     setResponse(data.videoUrl);
//   };

//   if (!celebrity) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-red-500">Celebrity not found</h1>
//       </div>
//     );
//   }

//   return (

//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <div className="flex items-center justify-center text-center">
//           <h1 className="text-4xl font-bold mb-4">Ask a Question to {celebrity.name}</h1>
//           <img
//             src={celebrity.image}
//             alt={celebrity.name}
//             className="w-64 h-64 object-cover rounded-full mx-4"
//             style={{ width: "30%", height: "30%", borderRadius: "50%" }}
//           />
//         </div> <br/>

//         <form onSubmit={handleSubmit} className="space-y-6" style={{ display: "flex"}}>
//           <div>
//             <label htmlFor="question" className="block text-lg font-medium text-gray-700">
//               Question:
//             </label>
//             <input
//               type="text"
//               id="question"
//               name="question"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               required
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your question here"
//             />
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {response && (
//           <div className="mt-8 p-4 bg-gray-200 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-2">Response:</h2>
//             <video controls src={response} className="w-full"></video>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CelebrityPage;




import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import celebrities, { Celebrity } from '../../app/celebrities'; // Adjusted import path

const CelebrityPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState<string[]>([]);
  const [celebrity, setCelebrity] = useState<Celebrity | null>(null);

  useEffect(() => {
    if (name && typeof name === 'string') {
      const foundCelebrity = celebrities.find((celeb) => celeb.name.toLowerCase().replace(/ /g, '-') === name);
      setCelebrity(foundCelebrity || null);
    }
  }, [name]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/ask-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question, celebrity: celebrity?.name })
    });
    const data = await res.json();
    setResponses((prevResponses) => [...prevResponses, data.videoUrl]);
  };

  if (!celebrity) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">Celebrity not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 flex">
        <div style={{ flex: 1, marginRight: '20px' }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Ask a Question to {celebrity.name}</h1>
            <img
              src={celebrity.image}
              alt={celebrity.name}
              className="w-64 h-64 object-cover rounded-full mx-auto mb-4"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="question" className="block text-lg font-medium text-gray-700">
                Question:
              </label>
              <input
                type="text"
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your question here"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h2 className="text-2xl font-bold mb-4">Video History</h2>
          {responses.map((response, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Response {index + 1}:</h3>
              <video controls src={response} className="w-full"></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CelebrityPage;
