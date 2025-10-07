'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

const HeroSection = () => {
	return (
		<section className="relative flex min-h-[80vh] flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 py-16 text-white md:min-h-screen md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-20">
			{/* starry background behind everything */}
			<div className="pointer-events-none absolute inset-0 z-0">
				<ShootingStars />
				<StarsBackground />
			</div>

			{/* Left: copy */}
			<div className="relative z-10 w-full space-y-6 text-center md:w-1/2 md:text-left">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl"
				>
					DAYA Devraha
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-base text-white/90 sm:text-lg md:text-xl"
				>
					Explore the eternal wisdom preserved through generations of
					teachers, inspired by the great Vaishnava sage, Ramanuja
					Vasishta, and the living legacy of Shri Devraha Baba.
				</motion.p>
			</div>

			{/* Right: constellation illustration */}
			<div className="relative z-10 flex w-full justify-center md:w-1/2 md:justify-end">
				{/* Aspect box to prevent layout shift; clamp size for small screens */}
				<div className="relative aspect-[4/3] w-[75vw] max-w-[420px] md:w-full md:max-w-[520px]">
					<Image
						src="/constellation.svg" // keep this in /public
						alt="Constellation illustration"
						fill
						priority
						sizes="(max-width: 768px) 75vw, 40vw"
						className="object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.15)]"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
