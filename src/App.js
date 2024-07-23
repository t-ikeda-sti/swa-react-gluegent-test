import React from 'react';

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

async function getUser() {
  const response = await fetch('/api/HttpTrigger1');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}


function App() {
  const value = "World";
  (async () => console.log(await getUserInfo()))();
  (async () => console.log(await getUser()))();
  return <div>Hello {value}</div>;
}

export default App;
