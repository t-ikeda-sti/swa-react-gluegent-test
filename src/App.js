import React, { useState, useEffect } from 'react';

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

(async () => {
console.log(JSON.stringify(await getUserInfo()));
})();

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/user`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
