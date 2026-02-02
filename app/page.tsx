'use client'

import {Button, Card, CardContent, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {MouseEvent, useRef, useState} from "react";


export default function Home() {
    const router = useRouter();
    const noButtonRef = useRef<HTMLButtonElement | null>(null);
    const [noOffset, setNoOffset] = useState({x: 0, y: 0});
    const [isAvoidingCursor, setIsAvoidingCursor] = useState(false);

    function handleClick() {
        router.push("/yes");
    }

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const button = noButtonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - event.clientX;
        const dy = centerY - event.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const threshold = 160;

        if (distance < threshold) {
            const moveAmount = Math.min(140, threshold - distance + 30);
            const directionX = distance === 0 ? 0 : dx / distance;
            const directionY = distance === 0 ? -1 : dy / distance;
            setNoOffset({
                x: directionX * moveAmount,
                y: directionY * moveAmount,
            });
            setIsAvoidingCursor(true);
        } else if (isAvoidingCursor) {
            setNoOffset({x: 0, y: 0});
            setIsAvoidingCursor(false);
        }
    };

    const handleMouseLeave = () => {
        if (isAvoidingCursor) {
            setNoOffset({x: 0, y: 0});
            setIsAvoidingCursor(false);
        }
    };

    const yesButtonScale = isAvoidingCursor ? 1.7 : 1;

    return (
            <Card className={"h-fit flex justify-center "}>
                <CardContent className={"flex flex-col items-center gap-6 bg-pink-300"}>
                    <Typography variant={"h2"} fontWeight={500} color={"#ffffff"}>
                        Will you be my Valentine???
                    </Typography>
                    <Image
                        src={"/please.gif"}
                        alt={"please please please"}
                        height={400}
                        width={400}
                    />
                    <Box
                        className={"relative flex items-center justify-center gap-6"}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        sx={{height: 120, width: 320}}
                    >
                        <Button
                            variant={"contained"}
                            onClick={handleClick}
                            color={'primary'}
                            sx={{
                                transform: `scale(${yesButtonScale})`,
                                transition: "transform 0.2s ease",
                                backgroundColor: "#ffffff",
                                color: "#ec4899",
                                boxShadow: "0 15px 25px rgba(236, 72, 153, 0.45)",
                                "&:hover": {
                                    backgroundColor: "#fdf2f8",
                                },
                            }}
                        >
                            Yes! 🥰
                        </Button>
                        <Button
                            variant={"contained"}
                            ref={noButtonRef}
                            color={"secondary"}
                            sx={{
                                transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
                                transition: "transform 0.15s ease",
                                position: "relative",
                                zIndex:50,
                                color: "white"
                            }}
                        >
                            No 😡
                        </Button>
                    </Box>
                </CardContent>
            </Card>
    );
}
