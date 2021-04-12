// dependencies
import React, { useState } from "react"
// chakra
import { Box } from "@chakra-ui/react"
// next
import Image from 'next/image'


// component

export default function NoPressure() {

    const [video, setVideo] = useState('')

    const Effortless = "https://www.youtube.com/embed/YqUrHLc0DqM"
    const stucc = "https://www.youtube.com/embed/YA60W05DJlQ"

    function noPressureClick() {
        console.log("button clicked")
        setVideo(randomSongNP());
    }

    function randomSongNP() {
        // move all songs into an array
        const album = [Effortless, stucc];
    
        let song = album[Math.floor(Math.random() * album.length)];
    
        console.log("This is the song" + song)
    
        return song
    }

    return (
        <Box  bg="red">
        <Image src="/img/no-pressure.jpg" onClick={noPressureClick} alt="me" width="150" height="150" />
        </Box>
    )
}