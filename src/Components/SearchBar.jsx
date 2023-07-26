import React,{useState, useEffect} from 'react'
import axios from 'axios';

// access data from .env file..
// "Client_id" process.env.REACT_APP_CLIENT_ID

const SearchBar = ({setInfo}) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchImage();
    }, [])
    

    async function searchImage(){
        try{
            let response = await axios.get("https://api.unsplash.com/search/photos/", {
                params: {
                    query : search || 'anything random',
                    per_page: 30
                },
                headers: {
                    Authorization : `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
                }
            })
            // console.log(response.data.results);
            setInfo(response.data.results);
        }
        catch(e){
            console.log("Error: ", e);
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            searchImage();
        }
    }

    return (
        <div className='search-comp'>
            <div className='logo'><span>Picture</span> <span>Bazaar</span></div>
            <input type="text" placeholder='Search'
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                id='search-input' onKeyPress={handleKeyPress}
            />
            <button onClick={searchImage} id='search-btn'>Search</button>
        </div>
    )
}

export default SearchBar