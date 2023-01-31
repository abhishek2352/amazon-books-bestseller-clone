import React from 'react';
import Bestsellers from './Bestsellers';
import bestsellers from './data';

function App() {
  return (
    <div className="App">
      <Bestsellers bestsellers={bestsellers} />
    </div>
  );
}

export default App;
