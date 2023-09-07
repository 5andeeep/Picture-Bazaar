import React, { useState, useEffect } from "react";
import SingleImage from "./SingleImage";
import Loading from "./Loading";

// access data from .env file..
// "Client_id" process.env.REACT_APP_CLIENT_ID

const base = "https://api.unsplash.com/";

const SearchBar = () => {
    const [loading, setLoading] = useState(false); //Loading
    const [photos, setPhotos] = useState([]); //Photos
    const [page, setPage] = useState(1); //page
    const [query, setQuery] = useState(""); //query

    const fetchImages = async () => {
        setLoading(true);
        let url;
        let urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;

        if (query) {
            url = ` ${base}search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}${urlPage}${urlQuery}`;
        } else {
            url = `${base}photos/?client_id=${process.env.REACT_APP_CLIENT_ID}${urlPage}`;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPhotos((oldPhoto) => {
                if (query && page == 1) {
                    return data.results;
                } else if (query) {
                    return [...oldPhoto, ...data.results];
                } else {
                    return [...oldPhoto, ...data];
                }
            });
        } catch (error) {
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, [page]);

    useEffect(() => {
        const event = window.addEventListener("scroll", () => {
            if (
                (!loading && window.innerHeight + window.scrollY) >=
                document.body.scrollHeight - 2
            ) {
                setPage((oldPage) => {
                    return oldPage + 1;
                });
            }
        });
        return () => window.removeEventListener("scroll", event);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        fetchImages();
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setPage(1);
            fetchImages();
        }
    };

    return (
        <>
            <div className="search-comp">
                <div className="logo">
                    <span>Picture</span> <span>Bazaar</span>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setQuery(event.target.value)}
                    value={query}
                    id="search-input"
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSubmit} id="search-btn">
                    Search
                </button>
            </div>
            <div className="gallery">
                {photos &&
                    photos.map((image, index) => {
                        return <SingleImage key={index} {...image} />;
                    })}
            </div>
            {loading && <Loading />}
        </>
    );
};

export default SearchBar;
