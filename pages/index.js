import React from "react";
// chakra ui components
import { Flex, Box, AspectRatio, Heading, HStack, Button } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
// react dependencies

import Image from 'next/image'



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
  console.log(albums)
  // a default song to start with
  const defaultSong = "https://www.youtube.com/embed/_4LsQ_kdLh0"
  // set a variable random song
  const [randomSong, setRandomSong] = React.useState(defaultSong);

  React.useEffect(() => {
    // an array to store all song data
    let allSongs = [];
    // take in album pull of songs
    albumData.map((song) => {
      console.log('Album Console.log underneath')
      console.log(song.songs)
      const songsToLoopOver = song.songs
      console.log(songsToLoopOver)
      songsToLoopOver.map((song) => {
        // console.log("This is each Song Property") 
        // console.log(song)
        const songLinks = song.link
        console.log("These are the song links")
        console.log(songLinks)
      })
      // for (i = 0; i < songsToLoopOver.length; i++) {
      //   let linksToAdd = songsToLoopOver[i].link
      //   console.log("ADD These LInks")
      //   console.log(linksToAdd)
      // }
      // need to further destructure album to access each individual song link

      // looking to access each individual song property and store it in the allSongs array




      // return [...allSongs, ...songs]

      // return song
    })
  }, [])

  //   setRandomSong(// set the random song from the songs array )

  //   // push it into an array

  //   // strip the songs from the albumData array

  // }, [albums])

  // when the components loads -- pick a random song from any album
  function pickRandomSong(songs) {
    // we want to take the albumData array and pull all song arrays off of each album

    // we will need to use some array methods and go through each object -- pulling out the songs array -- and combining them into a new array
  }

  // to do this, we need to combine each songs array on the album objects 
  // const songs = // some array method that takes all songs arrays and combines them 
  return (
    <Flex direction="column">
      Video Player

      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="rap"
          src={defaultSong}
          allowFullScreen
        />
      </AspectRatio>

      <Button onClick={() => pickRandomSong(songs)}>Randomize</Button>

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