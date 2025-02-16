import { useState } from 'react';

function App() {
  // State to store bitmap image data (we'll replace this with real data later)
  const [images, setImages] = useState([]);

  return (
    <div>
      <h1>Employee Lookup</h1>
      <div>
        {images.length === 0 ? <p>No images available</p> : <p>Images will be displayed here</p>}
      </div>
    </div>
  );
}

export default App;
