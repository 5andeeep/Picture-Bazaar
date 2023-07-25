import './App.css';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState([]);
  // console.log(info);
  return (
    <div className="App">
      <SearchBar setInfo={setInfo}/>
      <ImageList images={info}/>
    </div>
  );
}

export default App;
