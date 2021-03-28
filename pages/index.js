// chakra ui components
import { Flex, Box, AspectRatio } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

// react dependencies
import React, { useState } from "react";

// apollo server

export default function Index() {
   // album songs
   const rapN = "https://www.youtube.com/embed/_4LsQ_kdLh0"
   const victory = "https://www.youtube.com/watch?v=iYC9iMTC5QM"
   const last = "https://www.youtube.com/watch?v=QM9xgHibvzM"
   const young = "https://www.youtube.com/watch?v=3RlE03xOyV4"
   const dedication = "https://www.youtube.com/watch?v=RXmfYM6dSFg"
   const blue = "https://www.youtube.com/watch?v=r5ujo7icpH8"
   const hussle = "https://www.youtube.com/watch?v=lxcrBGUYnxA"
   const status = "https://www.youtube.com/watch?v=LAJkL4dZpzk"
   const succa = "https://www.youtube.com/watch?v=rQEuF5QI0Q8"
   const keys = "https://www.youtube.com/watch?v=eBYvq8CyNrA"
   const grinding = "https://www.youtube.com/watch?v=AVrNHI4RdPM"
   const million = "https://www.youtube.com/watch?v=5EDC_dAAqD0"
   const loaded = "https://www.youtube.com/watch?v=CTyRUel1xFY"
   const realbig = "https://www.youtube.com/watch?v=ZyGojDe_DI0"
   const doubleUp = "https://www.youtube.com/watch?v=pwBFOuCrdr4"
   const right = "https://www.youtube.com/watch?v=heFh5aQjwtI"
   

  
  return (
    <Layout>


      <h1>"Neighborhood" Nipsey Hussle</h1>
      <Box>

        
        <AspectRatio maxW='1000px' ratio={1}>
          <iframe title="naruto" src={rapN}  allowFullScreen />
        </AspectRatio>

      </Box>

      <Box w='100%'h='400px' bgGradient='linear(to-r, green.200, pink.500)' />



    </Layout>
  );
}
