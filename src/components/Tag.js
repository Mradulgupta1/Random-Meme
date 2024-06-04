                                  // ॥ श्री गणेशाय नमः ॥ 

import React, { useEffect, useState } from "react";
import axios from "axios"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Tag(){

    const [tag, setTag] = useState("cat");

    const {gif, loading, fetchData} = useGif(tag);

    // const [gif, setGif] = useState("");

    // const [loading, setLoading] = useState(false);
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[])

    // function clickHandler(){
    //     fetchData();
    // }

    function changeHandler(event){
        setTag(event.target.value);
    }

    

    return(
        <div className="w-1/2 mt-[15px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5">
            <h1 className="text-2xl underline mt-4 uppercase font-bold"> Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }

            {/* <img src={gif} width="450" loading="lazy"/> */}

            <input
                className="w-10/12  text-lg py-2 rounded-lg text-center"
                onChange={changeHandler}
                value={tag}
            />
            
            <button onClick={() => fetchData()} className="w-10/12 mb-[20px] text-lg py-2 rounded-lg bg-yellow-400 text-center">Generate</button>
        </div>
    )
    
}

export default Tag;