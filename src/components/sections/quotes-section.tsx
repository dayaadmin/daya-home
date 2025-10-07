'use client';

import { useEffect, useState } from 'react';

const quotes = [
	{
		text: 'He who brings joy to others through pure speech, fair judgment, decent behavior, and morality is made by God His representative on Earth.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'When there is nothing left – there is God.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'But he who is devoted to meditation receives the highest grace of Paramatma, which destroys the root of ignorance in his heart with the light of knowledge. Such a bhakta perceives the true nature of Paramatma and is filled with it.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'All universal knowledge is contained within the Gayatri — a sacred Vedic verse and the most revered mantra in Hinduism. At the same time, the Gayatri itself is a part of all knowledge, embodying the magnitude and purity of the universe.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'Wherever we go, we should regard the path as a sacred procession around the temple. Whatever we look upon should be seen as a spiritual contemplation of the many forms of God.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'My son, if you board the boat with me, you must bring with you a bundle of all your earthly anxieties — for they are no longer your concern.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'When one comes to know their true nature, the veil of Maya falls away, and they behold their own divine essence.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'The majority of illness arises from the Self. When the Self is unwell, the body too begins to suffer.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'Wealthy is the one who possesses spiritual knowledge.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'The most sacred place of pilgrimage is your own soul.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'The union of the soul and God is the ultimate goal of the bhakta. Achieving this union is impossible without the grace of the spiritual teacher, whether in the past, present, or future.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'Only the meditation of the wise can bring control over the mind and lead to the realization of Paramatma.',
		author: 'Shri Devraha Baba',
	},
	{
		text: 'If you surrender your Self to your spiritual teacher, it will become a wellspring of bliss.',
		author: 'Shri Devraha Baba',
	},
];

export default function QuotesSection() {
	const [quote, setQuote] = useState(quotes[0]);

	useEffect(() => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}, []);

	return (
		<div className="relative text-center">
			{/* Red underline */}
			<div className="mb-6 flex justify-center">
				<div className="bg-secondary h-[2px] w-16" />
			</div>

			<div className="relative">
				{/* Opening quote (top-left) */}
				<span className="text-accent pointer-events-none absolute -top-8 left-0 text-[8rem] leading-none select-none">
					“
				</span>
				{/* Closing quote (top-right) */}
				<span className="text-accent pointer-events-none absolute -top-8 right-0 text-[8rem] leading-none select-none">
					”
				</span>

				{/* Quote content */}
				<p className="relative z-10 font-serif text-xl leading-relaxed text-gray-800 md:text-2xl">
					{quote.text}
				</p>
				{quote.author && (
					<p className="mt-4 text-sm font-medium text-gray-500">
						— {quote.author}
					</p>
				)}
			</div>
		</div>
	);
}
