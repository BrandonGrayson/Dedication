// dependencies
import React from "react";
import VictoryLap from "./VictoryLap";
import { Flex, Box, AspectRatio, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

// fake database
const albumData =
    [
        {
            title: "Victory Lap",
            songs: [
                {
                    title: "Rap N",
                    link: "https://www.youtube.com/embed/_4LsQ_kdLh0",
                },
                {
                    title: "Victory",
                    link: "https://www.youtube.com/embed/iYC9iMTC5QM"
                },
                {
                    title: "Last",
                    link: "https://www.youtube.com/embed/QM9xgHibvzM"
                },
                {
                    title: "Young",
                    link: "https://www.youtube.com/embed/3RlE03xOyV4"
                },
                {
                    title: "Dedication",
                    link: "https://www.youtube.com/embed/RXmfYM6dSFg"
                },
                {
                    title: "Blue",
                    link: "https://www.youtube.com/embed/r5ujo7icpH8"
                },
                {
                    title: "Hussle",
                    link: "https://www.youtube.com/embed/lxcrBGUYnxA"
                },
                {
                    title: "Status",
                    link: "https://www.youtube.com/embed/LAJkL4dZpzk"
                },
                {
                    title: "Succa",
                    link: "https://www.youtube.com/embed/rQEuF5QI0Q8"
                },
                {
                    title: "Keys",
                    link: "https://www.youtube.com/embed/eBYvq8CyNrA"
                },
                {
                    title: "grinding",
                    link: "https://www.youtube.com/embed/AVrNHI4RdPM"
                },
                {
                    title: "million",
                    link: "https://www.youtube.com/embed/5EDC_dAAqD0"
                },
                {
                    title: "loaded",
                    link: "https://www.youtube.com/embed/CTyRUel1xFY"
                },
                {
                    title: "realbig",
                    link: "https://www.youtube.com/embed/ZyGojDe_DI0"
                },
                {
                    title: "doubleUp",
                    link: "https://www.youtube.com/embed/pwBFOuCrdr4"
                },
                {
                    title: "right",
                    link: "https://www.youtube.com/embed/heFh5aQjwtI"
                },
            ],
        },
        {
            title: "No Pressure",
            songs: [
                {
                    title: "effortless",
                    link: "https://www.youtube.com/embed/YqUrHLc0DqM"
                },
                {
                    title: "stucc",
                    link: "https://www.youtube.com/embed/YA60W05DJlQ"
                }
            ]
        }
]

export default function VideoPlayer() {
    const [randomSong, setRandomSong] = React.useState(() => pickRandomDefault(albumData));
    // victory lap album songs
    const [albums, setAlbums] = React.useState([]);
    // function to pick a random default song
    function pickRandomDefault(albumData) {
        // empty array to start for song links
        let songs = [];
        // loop over album data array to access album objects
        albumData.map((album) => {
            // songs array to start for the inital component render
            let arr = [];
            // spread the album.songs into the songs array  
            arr = [...album.songs]
            // setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs      
            songs = [...songs, ...arr]
        })
        // return songs at random index
        return songs[Math.floor(Math.random() * songs.length)]
    }
    // set a variable random song 
    console.log({ randomSong })
    // function to pick a random song on button click
    function pickRandomSong(albumData) {
        // empty songs array to start
        let songs = []
        // loop over albumData array to acces album objects
        albumData.map((album) => {
            // an 
            let arr = []
            // spread the album.songs into the songs array  
            arr = [...album.songs]
            // setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs      
            songs = [...songs, ...arr]
        })
        // set song to songs arr at a random index
        setRandomSong(songs[Math.floor(Math.random() * songs.length)])
    }

    React.useEffect(() => {
        setTimeout(() => {
            setAlbums(albumData)
        }, 8000)

    }, [])
    return (
        <Flex direction="column">
            <Text> Video Player </Text>

            <h1>{randomSong.title}</h1>

            <AspectRatio maxW="560px" ratio={1}>
                <iframe
                    title={randomSong.title}
                    src={randomSong.link}
                    allowFullScreen
                />
            </AspectRatio>

            <Button onClick={() => pickRandomSong(albumData)}>Randomize</Button>

            <VictoryLap />

        </Flex>
    )
}

