'use client';

import {Card, CardContent, Typography} from "@mui/material";
import Image from "next/image";
import {useEffect} from "react";

export default function Yes() {
    useEffect(() => {
        const yippieSound = new Audio("/yippieSound.wav");
        yippieSound.loop = true;
        const playPromise = yippieSound.play();
        playPromise?.catch(() => {
            // Browsers may block autoplay; ignore the error
        });

        return () => {
            yippieSound.pause();
            yippieSound.currentTime = 0;
        };
    }, []);

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
