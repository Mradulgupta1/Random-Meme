                                  // ॥ श्री गणेशाय नमः ॥ 

import React, { useEffect, useState } from "react";
import axios from "axios"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Random(){


    // const [gif, setGif] = useState("");

    // const [loading, setLoading] = useState(false);
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();

    

    

    return(
        <div className="w-1/2 mt-[15px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5">
            <h1 className="text-2xl underline uppercase mt-4 font-bold">A Random Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }

            {/* <img src={gif} width="450" loading="lazy"/> */}
            
            <button onClick={() => fetchData()} className="w-10/12 mb-[20px] text-lg py-2 rounded-lg bg-yellow-400 text-center">Generate</button>
        </div>
    )
    
}

export default Random;