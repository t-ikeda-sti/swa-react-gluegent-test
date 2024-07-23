import React from 'react';

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

async function App() {
  const userInfo = await getUserInfo();
  return <div>Login User: {JSON.stringify(userInfo, undefined, 2)}</div>;
}

export default App;
