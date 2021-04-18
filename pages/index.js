// react dependencies
import React from "react";
// chakra ui components
import { Flex, Box, AspectRatio, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

import Image from 'next/image';

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



function VideoPlayer({ albums }) {
  function pickRandomDefault(albumData) {
    let songs = [];
    albumData.map((album) => {
      // songs array to start for the inital component render
      let arr = [];
      // spread the album.songs into the songs array  
      arr = [...album.songs]
      // setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs      
      songs = [...songs, ...arr]
    })

    return songs[Math.floor(Math.random() * songs.length)]
  }

  // a default song to start with
  const defaultSong = "https://www.youtube.com/embed/_4LsQ_kdLh0"
  // set a variable random song 
  const [randomSong, setRandomSong] = React.useState(() => pickRandomDefault(albumData));
  console.log({ randomSong })
  // effects for the video player 

  function pickRandomSong(albumData) {
    let songs = []
    albumData.map((album) => {
      let arr = []
      // songs array to start for the inital component render      
      // spread the album.songs into the songs array  
      arr = [...album.songs]
      // setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs      
      songs = [...songs, ...arr]
    })


    setRandomSong(songs[Math.floor(Math.random() * songs.length)])
  }


  return (
    <Flex direction="column">
      <Text> Video Player </Text>

      {/* {allSongs.map(song => (
        <h1>{song.title}</h1>
      ))} */}
      {/* 
      {allSongs.map(song => (
        <h1>{song.title}</h1>
      ))} */}

      <h1>{randomSong.title}</h1>

      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title={randomSong.title}
          src={randomSong.link}
          allowFullScreen
        />
      </AspectRatio>

      <Button onClick={() => pickRandomSong(albumData)}>Randomize</Button>

    </Flex>
  )
}


export default function Index() {
  // victory lap album songs
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setAlbums(albumData)
    }, 8000)

  }, [])

  return (
    <Layout>
      <VideoPlayer albums={albums} />
    </Layout>
  )
}




// no pressure album songs





  // function useHandleClick() {
  //   console.log("button clicked")
  //   setVideo(randomSong());
  // }

  // function noPressureClick() {
  //   console.log("button clicked")
  //   setVideo(randomSongNP());
  // }

  // function randomSong() {
  //   // move all songs into an array
  //   const album = [rapN, victory, last, young, dedication, blue, hussle, status, succa, keys, grinding, million, loaded, realbig, doubleUp, right];

  //   let song = album[Math.floor(Math.random() * album.length)];

  //   console.log("This is the song" + song)

  //   return song
  // }

  // function randomSongNP() {
  //   // move all songs into an array
  //   const album = [Effortless, stucc];

  //   let song = album[Math.floor(Math.random() * album.length)];

  //   console.log("This is the song" + song)

  //   return song
  // }

  // React.useEffect(() => {
  //   setVideo(randomSong())
  // }, [])