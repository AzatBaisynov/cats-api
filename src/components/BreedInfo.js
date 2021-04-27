import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export const BreedInfo = () => {
    const {id} = useParams();
    const [breed, setBreed] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("https://api.thecatapi.com/v1/breeds/")
            .then(json => {
                setBreed(json.data.find(el => {
                    return el.id === id
                }))
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Spinner />
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="max-h-96 md:h-screen">
                    <img className="w-screen h-screen object-cover object-top" src={breed?.image?.url} alt=""/>
                </div>
                <div className="flex bg-gray-100 p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h1 className="text-3xl uppercase mb-3">{breed.name}</h1>
                        <p className="font-semibold mb-5">{breed.temperament}</p>
                        <p className="mb-5">{breed.description}</p>
                        <p className="text-xl">{breed.origin}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}