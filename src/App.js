import React from 'react';
import Avatar from './components/Avatar'

function App() {
  const homer = {
    firstName:"Homer",
    lastName:"Simpsons",
    image:"https://www.stickees.com/files/cartoon/the-simpsons/2378-network-sticker.png"
  }
  const bart = {
    firstName:"Bart",
    lastName:"Simpsons",
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png"
  }
  return (
    <div className="App">
      <Avatar {...homer}/>
      <Avatar {...bart}/>
    </div>
  );
}

export default App;
