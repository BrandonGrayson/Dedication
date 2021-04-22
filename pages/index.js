// react dependencies
import React from "react";
import VideoPlayer from "../src/components/VideoPlayer"
// chakra ui components
import { Flex, Box, AspectRatio, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

import Image from 'next/image';




export default function Index() {
  return (
    <Layout>
      <VideoPlayer />
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