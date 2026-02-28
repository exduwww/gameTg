import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Home = () => {
    const [coins, setCoins] = useState(0);
    const [stamina, setStamina] = useState(100);
    const [dailyReward, setDailyReward] = useState(false);

    const handleTapHero = () => {
        if (stamina > 0) {
            setCoins(coins + 1);
            setStamina(stamina - 10);
        }
    };

    const handleDailyReward = () => {
        if (!dailyReward) {
            setCoins(coins + 100);
            setDailyReward(true);
        }
    };

    return (
        <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
            <motion.div 
                className="bg-purple-600 rounded-full h-24 w-24 flex items-center justify-center cursor-pointer"
                onClick={handleTapHero} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}>
                <span>👾 Tap Hero</span>
            </motion.div>
            <div className="text-center mt-4">
                <h1 className="text-2xl">Coins: {coins}</h1>
                <h2 className="text-xl">Stamina: {stamina}</h2>
                <button className="mt-4 bg-blue-500 p-2 rounded" onClick={handleDailyReward} disabled={dailyReward}>Daily Reward</button>
                {dailyReward && <p className="mt-2">You've claimed your daily reward!</p>}
            </div>
        </div>
    );
};

export default Home;