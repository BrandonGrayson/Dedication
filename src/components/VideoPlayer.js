// dependencies
import React from "react";
import VictoryLap from "./VictoryLap";
import { Flex, Box, AspectRatio, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

// css styles
const leftStyle = {

}

// albums with videos
const albumWithVideos = [
    {
        title: "Songs With Videos",
        songs: [
            {
                title: "Rap N",
                link: "https://www.youtube.com/embed/_4LsQ_kdLh0",
                id: 1
            },
            {
                title: "Victory",
                link: "https://www.youtube.com/embed/iYC9iMTC5QM",
                id: 2
            },
            {
                title: "Last",
                link: "https://www.youtube.com/embed/QM9xgHibvzM",
                id: 3
            },
            {
                title: "Status",
                link: "https://www.youtube.com/embed/LAJkL4dZpzk",
                id: 4
            },
            {
                title: "doubleUp",
                link: "https://www.youtube.com/embed/pwBFOuCrdr4",
                id: 5
            },
            {
                title: "grinding",
                link: "https://www.youtube.com/embed/AVrNHI4RdPM",
                id: 6
            },
        ]
    }
]

// fake database
const albumData =
    [
        {
            title: "Victory Lap",
            songs: [
                {
                    title: "Rap N",
                    link: "https://www.youtube.com/embed/_4LsQ_kdLh0",
                    id: 1
                },
                {
                    title: "Victory",
                    link: "https://www.youtube.com/embed/iYC9iMTC5QM",
                    id: 2
                },
                {
                    title: "Last",
                    link: "https://www.youtube.com/embed/QM9xgHibvzM",
                    id: 3
                },
                {
                    title: "Young",
                    link: "https://www.youtube.com/embed/3RlE03xOyV4",
                    id: 4
                },
                {
                    title: "Dedication",
                    link: "https://www.youtube.com/embed/RXmfYM6dSFg",
                    id: 5
                },
                {
                    title: "Blue",
                    link: "https://www.youtube.com/embed/r5ujo7icpH8",
                    id: 6
                },
                {
                    title: "Hussle",
                    link: "https://www.youtube.com/embed/lxcrBGUYnxA",
                    id: 7
                },
                {
                    title: "Status",
                    link: "https://www.youtube.com/embed/LAJkL4dZpzk",
                    id: 8
                },
                {
                    title: "Succa",
                    link: "https://www.youtube.com/embed/rQEuF5QI0Q8",
                    id: 9
                },
                {
                    title: "Keys",
                    link: "https://www.youtube.com/embed/eBYvq8CyNrA",
                    id: 10
                },
                {
                    title: "grinding",
                    link: "https://www.youtube.com/embed/AVrNHI4RdPM",
                    id: 11
                },
                {
                    title: "million",
                    link: "https://www.youtube.com/embed/5EDC_dAAqD0",
                    id: 12
                },
                {
                    title: "loaded",
                    link: "https://www.youtube.com/embed/CTyRUel1xFY",
                    id: 13
                },
                {
                    title: "realbig",
                    link: "https://www.youtube.com/embed/ZyGojDe_DI0",
                    id: 14
                },
                {
                    title: "doubleUp",
                    link: "https://www.youtube.com/embed/pwBFOuCrdr4",
                    id: 15
                },
                {
                    title: "right",
                    link: "https://www.youtube.com/embed/heFh5aQjwtI",
                    id: 16
                },
            ],
        },
        {
            title: "No Pressure",
            songs: [
                {
                    title: "effortless",
                    link: "https://www.youtube.com/embed/YqUrHLc0DqM",
                    id: 17
                },
                {
                    title: "stucc",
                    link: "https://www.youtube.com/embed/YA60W05DJlQ",
                    id: 18
                }
            ]
        }
    ]

export default function VideoPlayer() {
    const [randomSong, setRandomSong] = React.useState(() => pickRandomDefault(albumWithVideos));
    // victory lap album songs
    const [albums, setAlbums] = React.useState([]);
    // function to pick a random default song
    function pickRandomDefault(albumWithVideos) {
        // empty array to start for song links
        let songs = [];
        // loop over album data array to access album objects
        albumWithVideos.map((album) => {
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

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setAlbums(albumData)
    //     }, 8000)

    // }, [])

    return (
        <Box >
            {/* headline */}
            <Flex justify='space-between' w='100%' >
                <Text mt={3} fontSize='25px'>All Money In</Text>
                <Text fontSize='50px'>Nipsey Hussle</Text>
                <Text mt={3} fontSize='25px'>No Money Out</Text>
            </Flex>
            {/* <Text fontSize='50px' textAlign='center'> All Money In Nipsey Hussle No Money Out</Text> */}
            {/* VideoPlayer */}
            <AspectRatio mb={2} w="100vw" h='80vh' ratio={1}>
                <iframe
                    title={randomSong.title}
                    src={randomSong.link}
                    allowFullScreen
                />
            </AspectRatio>
            {/* Random Song Button */}
            <Button mb={3} onClick={() => pickRandomSong(albumData)}>Randomize</Button>

            {/* Discography Section */}
            <Box>
                <Text mb={2} fontSize="50px" >Discography</Text>

                <VictoryLap />
            </Box>
        </Box>
    )
}

