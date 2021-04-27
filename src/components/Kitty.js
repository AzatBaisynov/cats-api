import React, {useState, useEffect} from 'react'
import axios from "axios";

export const Kitty = () => {
    const [cat, setCat] = useState([])

    const getCat = () => {
        axios("https://api.thecatapi.com/v1/images/search")
            .then(kitty => {
                setCat(kitty.data[0].url)
            })
    }

    useEffect(() => {
        getCat()
    }, [])



    return (
        <div className="main">
            <button onClick={getCat}>Another</button>
            <img src={cat} alt=""/>
        </div>
    )
}