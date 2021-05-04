import React from "react";
import Image from 'next/image';


export default function VictoryLap({props}) {
    return (
        <div>
            <Image
                src="/img/victory-lap.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
        </div>
    )
}