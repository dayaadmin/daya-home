'use client';

import React, { useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ASSET_BASE_URL } from '@/constants/assets';
import { cn } from '@/lib/utils';

type Milestone = {
	year: string;
	title: string;
	description: string;
	image: string;
};

const milestones: Milestone[] = [
	{
		year: 'Ancient Times',
		title: 'Teachings of Ramanuja Vasishta',
		description: `
Our roots trace back to the ancient teachings of the great Vaishnava sage, Ramanuja Vasishta. 
Our Ashram was founded upon principles that teach us love, compassion, and selfless service.`,
		image: `${ASSET_BASE_URL}/origin-section/image-1.JPG`,
	},
	{
		year: 'Early Days',
		title: 'Establishment of Shri Devraha Baba Ashram',
		description: `
In its earliest days, Shri Devraha Baba Ashram (Vrindavan) was a sanctuary for hermits and monks seeking peace and wisdom. 
There were no modern yoga practices or rituals as we know them today — this was a place for inner purification and unconditional service to others.`,
		image: `${ASSET_BASE_URL}/origin-section/image-2.JPG`,
	},
	{
		year: 'Modern Era',
		title: 'Legacy of Devraha Baba',
		description: `
Devraha Baba was the embodiment of love and compassion, and his sacred wisdom continues to shine through our Gurudev, Shri Dev Das Ji Maharaj, who was his devoted disciple since childhood. 
Inspired by the spiritual legacy of Devaraha Baba, we carry forward his divine mission — to guide souls toward happiness and liberation.`,
		image: `${ASSET_BASE_URL}/origin-section/image-3.JPG`,
	},
	{
		year: 'Present Day',
		title: 'Continuation of Sacred Traditions',
		description: `
Today, we uphold this sacred tradition through selfless service—caring for cows, distributing clothing, and organizing Bhandaras (food offerings) for those in need. 
"Guru-Tattva, like the Supreme, is present everywhere. There is no difference between the two. The spiritual teacher is the very form of the Divine."
— A shloka from the book "The Voice of Devraha Baba."`,
		image: `${ASSET_BASE_URL}/origin-section/image-4.JPG`,
	},
];

export default function OriginsSection() {
	const [flipped, setFlipped] = useState<number | null>(null);

	const toggleFlip = (idx: number) =>
		setFlipped((prev) => (prev === idx ? null : idx));

	const keyToggle = (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleFlip(idx);
		}
	};

	return (
		<div className="relative">
			<h2 className="mb-10 text-center text-3xl font-bold">
				Origins of DAYA Academy
			</h2>

			{/* Mobile: horizontal scroll (no extra padding); ≥sm: grid */}
			<div className="sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
				{/* Mobile scroller */}
				<div className="-mx-2 overflow-x-auto pb-2 sm:hidden">
					<div className="mx-2 inline-grid auto-cols-[minmax(260px,1fr)] grid-flow-col gap-4">
						{milestones.map((item, idx) => (
							<Card3D
								key={idx}
								item={item}
								flipped={flipped === idx}
								onToggle={() => toggleFlip(idx)}
								onKeyToggle={(e) => keyToggle(e, idx)}
								priority={idx === 0}
							/>
						))}
					</div>
				</div>

				{/* Desktop/tablet grid */}
				<div className="hidden sm:contents">
					{milestones.map((item, idx) => (
						<Card3D
							key={idx}
							item={item}
							flipped={flipped === idx}
							onToggle={() => toggleFlip(idx)}
							onKeyToggle={(e) => keyToggle(e, idx)}
							priority={idx === 0}
						/>
					))}
				</div>
			</div>

			<div className="text-muted-foreground mt-4 block text-center text-xs sm:hidden">
				Swipe cards horizontally if they overflow
			</div>
		</div>
	);
}

/** Extracted card for clarity; purely presentational (no outer layout). */
function Card3D({
	item,
	flipped,
	onToggle,
	onKeyToggle,
	priority,
}: {
	item: Milestone;
	flipped: boolean;
	onToggle: () => void;
	onKeyToggle: (e: KeyboardEvent<HTMLDivElement>) => void;
	priority?: boolean;
}) {
	return (
		<div className="[perspective:1200px]">
			<div
				role="button"
				tabIndex={0}
				aria-pressed={flipped}
				onClick={onToggle}
				onKeyDown={onKeyToggle}
				className={cn(
					'relative h-[420px] w-full rounded-2xl shadow-lg outline-none',
					'transition-transform duration-500 [transform-style:preserve-3d]',
					flipped ? '[transform:rotateY(180deg)]' : ''
				)}
			>
				{/* FRONT */}
				<div
					className={cn(
						'absolute inset-0 overflow-hidden rounded-2xl',
						'[backface-visibility:hidden]'
					)}
				>
					<Image
						src={item.image}
						alt={item.title}
						fill
						className="object-cover"
						priority={priority}
						sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
					/>
					<div className="absolute inset-0 bg-black/40" />
					<div className="absolute bottom-0 p-5 text-white">
						<p className="mb-1 text-sm font-medium text-white/80">
							{item.year}
						</p>
						<h3 className="text-lg font-semibold">{item.title}</h3>
						<p className="mt-2 text-xs text-white/80">
							Tap / click to flip
						</p>
					</div>
				</div>

				{/* BACK */}
				<div
					className={cn(
						'absolute inset-0 rounded-2xl bg-white p-5',
						'[transform:rotateY(180deg)] [backface-visibility:hidden]',
						'flex flex-col'
					)}
				>
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="text-muted-foreground text-sm font-medium">
								{item.year}
							</p>
							<h3 className="text-2xl font-bold">{item.title}</h3>
						</div>
						<button
							aria-label="Close"
							onClick={(e) => {
								e.stopPropagation();
								onToggle();
							}}
							className="rounded-full p-1 transition hover:scale-110 hover:bg-black/5"
						>
							<X className="h-5 w-5" />
						</button>
					</div>

					<div className="mt-4 flex-1 overflow-auto pr-1">
						<p className="text-sm leading-relaxed text-black">
							{item.description.trim()}
						</p>
					</div>

					<div className="text-muted-foreground mt-4 text-xs">
						Click anywhere to flip back
					</div>
				</div>
			</div>
		</div>
	);
}
