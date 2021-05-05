import React from "react";
import Image from 'next/image';
import next from "next";


export default function VictoryLap(props) {

    return (
        console.log(props),
        <div onClick={props.updateSong}>
            
            <Image
                src="/img/victory-lap.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
        </div>
    )
}