import React, { useEffect, useState } from 'react';

// function App() is automatecally called when export is done.

function App() {
  const [message, setMessage] = useState('');

//This useEffect function is chaining function, fetches data from given url, and then assigns and processes data.
  useEffect(() => {
    fetch('http://localhost:5000/About')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

//Returning the message from the Node.js API with some HTML as well.
  return (
    <div>
      <h1>React Frontend</h1>
      <p>API from Node.js says the about of this project: {message}</p>
    </div>
  );
}

export default App;
