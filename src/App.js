import { useState, useEffect } from 'react';

function App() {
  // State to store image data
  const [images, setImages] = useState([]);

  // Simulated function to fetch bitmap data
  useEffect(() => {
    // Fake bitmap data (this would usually come from a database)
    const fakeBitmapArray = [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUB...",
    ]; // Truncated Base64 data (replace with real images later)

    // Simulate fetching data
    setTimeout(() => {
      setImages(fakeBitmapArray);
    }, 1000); // Fake delay for realism
  }, []);

  return (
    <div>
      <h1>Employee Lookup</h1>
      <div>
        {images.length === 0 ? (
          <p>Loading images...</p>
        ) : (
          images.map((img, index) => (
            <img key={index} src={img} alt={`Employee ${index}`} style={{ width: "100px", margin: "10px" }} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
