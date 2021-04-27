import React, {useEffect, useState} from 'react'
import axios from "axios";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export const Breeds = () => {

    const [breeds, setBreeds] = useState([])
    const [searchCats, setSearchCats] = useState([])

    useEffect(() => {
        axios("https://api.thecatapi.com/v1/breeds/")
            .then(json => {
                setBreeds(json.data)
            })
    }, [])

    const onSearch = (event) => {
        setSearchCats(breeds.filter((el) => {
            return el.name.toLowerCase().includes(event.target.value)
        }))
    }

    return (
        <div className="container mx-auto max-w-screen-lg">
            <div className="relative mr-6 my-2">
                <input onChange={onSearch} type="search" className="bg-gray-100 shadow rounded border-0 p-3 w-1/2"
                       placeholder="Search by name..."/>
            </div>
            <div className="grid gap-4 grid-cols-4">
                {
                    searchCats.map(el => (
                        <Link to={`/breed/${el.id}`} className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                            <img className="w-full object-cover bg-no-repeat max-h-36"
                                 src={el?.image?.url}
                                 alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{el.name}</div>
                                <p className="font-semibold mb-5">{el.temperament}</p>
                                <p className="text-xl">{el.origin}</p>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}