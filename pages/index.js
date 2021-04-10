// chakra ui components
import { Flex, Box, AspectRatio, Heading, HStack } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

// react dependencies
import React, { useState } from "react";

import Image from 'next/image'


// album covers err here
// import victoryAlbum from "../public/img/victory-lap.jpg"



export default function Index() {
  // victory lap album songs
  const rapN = "https://www.youtube.com/embed/_4LsQ_kdLh0"
  const victory = "https://www.youtube.com/embed/iYC9iMTC5QM"
  const last = "https://www.youtube.com/embed/QM9xgHibvzM"
  const young = "https://www.youtube.com/embed/3RlE03xOyV4"
  const dedication = "https://www.youtube.com/embed/RXmfYM6dSFg"
  const blue = "https://www.youtube.com/embed/r5ujo7icpH8"
  const hussle = "https://www.youtube.com/embed/lxcrBGUYnxA"
  const status = "https://www.youtube.com/embed/LAJkL4dZpzk"
  const succa = "https://www.youtube.com/embed/rQEuF5QI0Q8"
  const keys = "https://www.youtube.com/embed/eBYvq8CyNrA"
  const grinding = "https://www.youtube.com/embed/AVrNHI4RdPM"
  const million = "https://www.youtube.com/embed/5EDC_dAAqD0"
  const loaded = "https://www.youtube.com/embed/CTyRUel1xFY"
  const realbig = "https://www.youtube.com/embed/ZyGojDe_DI0"
  const doubleUp = "https://www.youtube.com/embed/pwBFOuCrdr4"
  const right = "https://www.youtube.com/embed/heFh5aQjwtI"

  // no pressure album songs
  const Effortless = "https://www.youtube.com/embed/YqUrHLc0DqM"
  const stucc = "https://www.youtube.com/embed/YA60W05DJlQ"

  const [video, setVideo] = useState('')

  function useHandleClick() {
    console.log("button clicked")
    setVideo(randomSong());
  }

  function noPressureClick() {
    console.log("button clicked")
    setVideo(randomSongNP());
  }

  function randomSong() {
    // move all songs into an array
    const album = [rapN, victory, last, young, dedication, blue, hussle, status, succa, keys, grinding, million, loaded, realbig, doubleUp, right];

    let song = album[Math.floor(Math.random() * album.length)];

    console.log("This is the song" + song)

    return song
  }

  function randomSongNP() {
    // move all songs into an array
    const album = [Effortless, stucc];

    let song = album[Math.floor(Math.random() * album.length)];

    console.log("This is the song" + song)

    return song
  }

  React.useEffect(() => {
    setVideo(randomSong())
  }, [])

  return (
    <Layout>
      <Heading mb={3}>"Neighborhood" Nipsey Hussle</Heading>
      <Box>
        <AspectRatio maxW='1000px' mb={3} ratio={1}>
          <iframe title="naruto" src={video} allowFullScreen />
        </AspectRatio>
      </Box>

      <Heading mb={3}>Discography</Heading>


      <HStack spacing="24px">

      <Box  bg="red">
      <Image src="/img/victory-lap.jpg" onClick={useHandleClick} alt="me" width="150" height="150" />
      </Box>

      <Box  bg="red">
      <Image src="/img/no-pressure.jpg" onClick={noPressureClick} alt="me" width="150" height="150" />
      </Box>


      </HStack>
    </Layout>
  );
}

