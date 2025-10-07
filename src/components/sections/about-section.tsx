'use client';

import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import { ASSET_BASE_URL } from '@/constants/assets';

const aboutContent = [
	{
		title: 'Vedic Ashram & Parampara',
		description:
			'Shri Ramanuja Acharya Parampara Vaishnava Sampradaya. Shri Devaraha Baba Ashram – a sacred place where divine wisdom and ancient traditions merge with unconditional love for all living beings, under the guidance and blessings of the Guru.',
		src: `${ASSET_BASE_URL}/about-section/ashram.png`,
	},
	{
		title: 'Kamdhenuseva',
		description:
			'Caring for the sacred cow is caring for the entire Universe.',
		src: `${ASSET_BASE_URL}/about-section/cow.png`,
		href: 'https://kamdhenuseva.dayadevraha.com/',
	},
	{
		title: 'Ayurveda',
		description:
			'The science of life, harmony, and well-being. Ayurveda reveals the path to inner balance and helps unlock your true potential in this world.',
		src: `${ASSET_BASE_URL}/about-section/ayurveda.png`,
	},
	{
		title: 'Academy of Yoga',
		description:
			'The teachings of traditional yoga, rooted in the Vedas. Here, we have preserved the purest essence of yogic knowledge, passed down through generations since time immemorial.',
		src: `${ASSET_BASE_URL}/about-section/yoga.png`,
	},
	{
		title: 'Vedic Rituals',
		description:
			'Experience the power of Pujas, Vedic festivals and events. Align yourself with the energies of the planets, the five elements, nature, and your ancestors to release karmic burdens and bring harmony into your life.',
		src: `${ASSET_BASE_URL}/about-section/rituals.png`,
	},
	{
		title: 'Vedic Arts',
		description:
			'Unleash your inner creativity and embark on a journey of self-discovery through the timeless beauty of Vedic arts.',
		src: `${ASSET_BASE_URL}/about-section/arts.png`,
	},
	{
		title: 'Vedic Astrology',
		description:
			'A journey of self-discovery in this infinite universe—exploring the many ways to find your true path and navigate the vast possibilities of life without losing your direction.',
		src: `${ASSET_BASE_URL}/about-section/astrology.png`,
	},
	{
		title: 'Ecology',
		description:
			'Better you, better planet. Live in harmony with nature. Protect, preserve, and nurture the world around you. Transform inner beauty into outer well-being and create a sustainable future.',
		src: `${ASSET_BASE_URL}/about-section/ecology.png`,
	},
];

export default function AboutSection() {
	return (
		<div className="relative">
			<div className="relative text-black">
				<h2 className="mb-8 text-center text-4xl font-bold">
					About DAYA Academy
				</h2>

				<ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{aboutContent.map((item, index) => {
						const CardElement = (
							<Card className="relative h-full rounded-xl border border-gray-300 bg-white shadow-lg transition-shadow hover:shadow-2xl">
								<GlowingEffect
									glow={true}
									spread={40}
									disabled={false}
									proximity={64}
									inactiveZone={0.01}
									borderWidth={3}
								/>
								<CardContent>
									<CardHeader className="flex flex-col items-center gap-4 md:flex-row">
										{item.src && (
											<Image
												src={item.src}
												alt={
													item.src.split('/').pop() ||
													''
												}
												loading="lazy"
												width={50}
												height={50}
												className="h-12 w-12 md:h-16 md:w-16"
											/>
										)}
										<div className="flex flex-col gap-4 text-center md:text-left">
											<CardTitle>{item.title}</CardTitle>
											<CardDescription>
												{item.description}
											</CardDescription>
										</div>
									</CardHeader>
								</CardContent>
							</Card>
						);

						return (
							<li key={index} className="relative list-none">
								{item.href ? (
									<a
										href={item.href}
										target="_blank"
										rel="noreferrer noopener"
									>
										{CardElement}
									</a>
								) : (
									CardElement
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
