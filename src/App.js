import React from 'react';

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

function App() {
  const value = "World";
  (async () => console.log(await getUserInfo()))();
  return <div>Hello {value}</div>;
}

export default App;
