import React from 'react';
import Header from './Header.js'
import Imagelist from './Imagelist.js'
import './App.css';

import images from './data.js'

// const items = [
//   '1',
//   '2',
//   '3'
// ]

function App() {
  return (
      <main>
      <Header />
      <Imagelist images={images}/>
      {/* <ul>
                {items.map(item => <li> toot </li>)}
            </ul> */}
      </main>
  );
}

export default App;
