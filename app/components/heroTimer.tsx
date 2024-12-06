"use client";
import React, { useState, useEffect } from "react";

const HeroTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date(); // Set your target date and time here
        targetDate.setDate(targetDate.getDate() + 5); // Example: 5 days from now

        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime(); // Use `.getTime()` to get the time in milliseconds

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, "0");

    return (
        <div className="md:flex items-center justify-start space-x-6 py-10 hidden">
            <div className="flex flex-col items-center text-black bg-white rounded-full px-6 py-3">
                <span className="text-2xl">{formatTime(timeLeft.days)}</span>
                <span className="text-black text-sm">D</span>
            </div>
            <div className="flex flex-col items-center text-black bg-white rounded-full px-6 py-3">
                <span className="text-2xl">{formatTime(timeLeft.hours)}</span>
                <span className="text-black text-sm">Hr</span>
            </div>
            <div className="flex flex-col items-center text-black bg-white rounded-full px-6 py-3">
                <span className="text-2xl">{formatTime(timeLeft.minutes)}</span>
                <span className="text-black text-sm">Min</span>
            </div>
            <div className="flex flex-col items-center text-black bg-white rounded-full px-6 py-3">
                <span className="text-2xl">{formatTime(timeLeft.seconds)}</span>
                <span className="text-black text-sm">Sec</span>
            </div>
        </div>
    );
};

export default HeroTimer;
