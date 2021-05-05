import React from "react";
import Image from 'next/image';
import next from "next";


export default function VictoryLap({props}) {
    const updateTheSong = () => {
        const nextSong = "https://www.youtube.com/embed/iYC9iMTC5QM"
        updateSong(nextSong)
    }
    return (
        console.log(props),
        <div onClick={updateTheSong}>
            
            <Image
                src="/img/victory-lap.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
        </div>
    )
}