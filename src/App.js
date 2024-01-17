import searchImages from './Api';
import './App.css';
import ImageList from './Components/ImagesList.js';
import Search from './Search.js';
import {useState} from 'react';


function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term)=>{
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
      <div className='header'>
        <Search search={handleSubmit}></Search>
        </div>
        <ImageList imagesPlaceHolder={images}></ImageList>
    </div>
  );
}

export default App;
