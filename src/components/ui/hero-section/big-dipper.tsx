'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const BigDipper = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [hoveredStar, setHoveredStar] = useState<number | null>(null);

	// Scaling factor to make the constellation smaller
	const scaleFactor = 0.8; // Adjust this to make it smaller or larger

	// Data for stars and corresponding website links
	const stars = useMemo(
		() => [
			{
				x: 4 * scaleFactor + '%',
				y: 54 * scaleFactor + '%',
				name: 'Dubhe',
				url: 'https://example.com/1',
			},
			{
				x: 11 * scaleFactor + '%',
				y: 94 * scaleFactor + '%',
				name: 'Merak',
				url: 'https://example.com/2',
			},
			{
				x: 45 * scaleFactor + '%',
				y: 85 * scaleFactor + '%',
				name: 'Phecda',
				url: 'https://example.com/3',
			},
			{
				x: 46 * scaleFactor + '%',
				y: 48 * scaleFactor + '%',
				name: 'Megrez',
				url: 'https://example.com/4',
			},
			{
				x: 63 * scaleFactor + '%',
				y: 28 * scaleFactor + '%',
				name: 'Alioth',
				url: 'https://example.com/5',
			},
			{
				x: 75 * scaleFactor + '%',
				y: 8 * scaleFactor + '%',
				name: 'Mizar',
				url: 'https://example.com/6',
			},
			{
				x: 98 * scaleFactor + '%',
				y: 9 * scaleFactor + '%',
				name: 'Alkaid',
				url: 'https://example.com/7',
			},
		],
		[scaleFactor]
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Handle device pixel ratio
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		ctx.scale(dpr, dpr);

		// Function to convert percentages to canvas positions
		const getCanvasPosition = (percent: string, size: number) =>
			(parseFloat(percent) / 100) * size;

		const drawStars = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw connecting lines
			ctx.strokeStyle = '#ffffff';
			ctx.lineWidth = 2 / dpr; // Adjust line width for device pixel ratio
			ctx.beginPath();
			const linePairs = [
				[0, 3], // Megrez to Dubhe
				[3, 4], // Dubhe to Alioth
				[4, 5], // Alioth to Mizar
				[5, 6], // Mizar to Alkaid
				[3, 2], // Megrez to Phecda
				[2, 1], // Phecda to Merak
				[1, 0], // Merak to Dubhe
			];

			linePairs.forEach(([startIndex, endIndex]) => {
				const start = stars[startIndex];
				const end = stars[endIndex];
				ctx.moveTo(
					getCanvasPosition(start.x, rect.width),
					getCanvasPosition(start.y, rect.height)
				);
				ctx.lineTo(
					getCanvasPosition(end.x, rect.width),
					getCanvasPosition(end.y, rect.height)
				);
			});
			ctx.stroke();

			// Draw stars
			stars.forEach((star, index) => {
				const x = getCanvasPosition(star.x, rect.width);
				const y = getCanvasPosition(star.y, rect.height);
				ctx.beginPath();
				ctx.arc(x, y, 8, 0, Math.PI * 2);
				ctx.fillStyle = hoveredStar === index ? '#ffcc00' : '#ffffff';
				ctx.fill();
			});
		};

		drawStars();

		const handleMouseMove = (event: MouseEvent) => {
			const mouseX = event.clientX - rect.left;
			const mouseY = event.clientY - rect.top;

			let isHovering = false;
			stars.forEach((star, index) => {
				const x = getCanvasPosition(star.x, rect.width);
				const y = getCanvasPosition(star.y, rect.height);
				const distance = Math.sqrt(
					(mouseX - x) ** 2 + (mouseY - y) ** 2
				);
				if (distance < 10) {
					setHoveredStar(index);
					isHovering = true;
				}
			});

			if (!isHovering) setHoveredStar(null);
		};

		canvas.addEventListener('mousemove', handleMouseMove);

		return () => {
			canvas.removeEventListener('mousemove', handleMouseMove);
		};
	}, [hoveredStar, stars]);

	return (
		<div className="relative h-screen w-full bg-black">
			<canvas
				ref={canvasRef}
				className="absolute top-0 left-0 h-full w-full"
			/>

			{hoveredStar !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.3 }}
					className="absolute rounded bg-white p-4 text-black shadow-lg"
					style={{
						top: `calc(${stars[hoveredStar].y} - 20px)`,
						left: `calc(${stars[hoveredStar].x} + 30px)`,
						transform: 'translate(-50%, -50%)',
					}}
				>
					<h3 className="font-bold">{stars[hoveredStar].name}</h3>
					<a
						href={stars[hoveredStar].url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						Visit Website
					</a>
				</motion.div>
			)}
		</div>
	);
};

export default BigDipper;
