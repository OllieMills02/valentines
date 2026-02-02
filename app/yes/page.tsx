'use client';

import {Card, CardContent, Typography} from "@mui/material";
import Image from "next/image";

export default function Yes(){
    const yippieSound = new Audio("/yippieSound.mp3");
    yippieSound.loop = true;
    yippieSound.play();

    return (
        <Card className={"h-fit flex justify-center"}>
            <CardContent className={"flex flex-col items-center gap-6 bg-pink-300"}>
                <Typography variant={"h2"} fontWeight={500} color={"#ffffff"}>
                    Hooray!!! YAYAYAYAYAYYYY!
                </Typography>
                <Image
                    src={"/yippieCat.gif"}
                    alt={"yippie yippie"}
                    height={400}
                    width={400}
                />
            </CardContent>
        </Card>
    );
}
