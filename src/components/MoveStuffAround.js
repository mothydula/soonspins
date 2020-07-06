import React from 'react'
import Ticker from 'react-ticker'
import { useState, useEffect } from 'react'
const MoveStuffAround = () => {
    const [index, setIndex] = useState(0)
    const [artists, setArtists] = useState({"ee2": "ee", "ww2": "ww"})
    const [artistNames, setArtistNames] = useState(["ww", "ee", ])
    useEffect(() => {
        fetch('/artists').then(res => res.json()).then(data => {
            //setArtists(data)
            setArtistNames(Object.entries(data).map((entry, i) => entry[0]))
        })
    }, [])
    useEffect(() => {
        
    }, [artists])
    //let artistNames = ["ee", "ee", "ww"]
    
    console.log(artistNames)
    return (
        <Ticker offset="run-in" speed={10} height="auto">
            {({ index }) => (
            <div>
                <h1>{artistNames[index]}</h1>
            </div>
        )}
        </Ticker>
    );
}

export default MoveStuffAround