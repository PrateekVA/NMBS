import React, { useEffect, useState } from 'react';

function App() {
  const [xmlData, setXmlData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/xml')
      .then(res => res.text())
      .then(data => setXmlData(data));
  }, []);

  return (
    <div>
      <h2>XML from Backend</h2>
      <pre>{xmlData}</pre>
    </div>
  );
}

export default App;
