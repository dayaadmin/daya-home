'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { type CarouselApi } from '@/components/ui/carousel';
import { ASSET_BASE_URL } from '@/constants/assets';

const images = [
	`${ASSET_BASE_URL}/philosophy-section/image-1.jpg`,
	`${ASSET_BASE_URL}/philosophy-section/image-2.jpg`,
	`${ASSET_BASE_URL}/philosophy-section/image-3.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-4.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-5.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-6.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-7.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-8.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-9.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-10.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-11.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-12.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-13.JPG`,
	`${ASSET_BASE_URL}/philosophy-section/image-14.JPG`,
];

export default function PhilosophySection() {
	const [, setApi] = useState<CarouselApi>();

	return (
		<div className="relative">
			<h2 className="mb-8 text-center text-4xl font-bold">
				Philosophy of the Project
			</h2>

			<div className="relative overflow-hidden rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
				<GlowingEffect glow={true} />
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{/* Left: Tabs */}
						<div>
							<Tabs defaultValue="philosophy" className="w-full">
								<TabsList className="mb-4 grid w-full grid-cols-3">
									<TabsTrigger value="philosophy">
										Philosophy
									</TabsTrigger>
									<TabsTrigger value="mission">
										Mission
									</TabsTrigger>
									<TabsTrigger value="vision">
										Vision
									</TabsTrigger>
								</TabsList>

								<TabsContent value="philosophy">
									<div className="p-4 text-lg text-gray-700">
										DAYA Academy is rooted in the eternal
										teachings of Shri Devraha Baba. It is a
										living community that embodies the
										essence of true wisdom, deeply rooted in
										the Vaishnava tradition and the timeless
										teachings of Shri Devraha Baba.
									</div>
								</TabsContent>

								<TabsContent value="mission">
									<div className="p-4 text-lg text-gray-700">
										The mission of DAYA Academy is to
										preserve and pass on the eternal wisdom
										that has been safeguarded and
										transmitted through generations by our
										Parampara.
									</div>
								</TabsContent>

								<TabsContent value="vision">
									<div className="p-4 text-lg text-gray-700">
										Our vision is to integrate the ancient
										teachings into the lives of our
										students, empowering them for spiritual
										and personal growth in all aspects of
										life.
									</div>
								</TabsContent>
							</Tabs>
						</div>

						{/* Right: Carousel */}
						<div className="flex flex-col gap-4">
							<Carousel
								className="mx-auto w-full max-w-lg"
								opts={{ align: 'center', loop: true }}
								plugins={[
									Autoplay({
										delay: 3000,
										stopOnInteraction: false,
									}),
								]}
								setApi={setApi}
							>
								<CarouselContent className="w-full">
									{images.map((src, index) => (
										<CarouselItem
											key={index}
											className="relative w-full"
										>
											{/* Responsive aspect box; keeps images tidy without relying on outer paddings */}
											<div className="relative aspect-[4/3] overflow-hidden rounded-xl">
												<Image
													src={src}
													alt={`Philosophy Image ${index + 1}`}
													fill
													sizes="(max-width: 768px) 100vw, 50vw"
													className="rounded-lg object-contain"
													priority={index === 0}
												/>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
