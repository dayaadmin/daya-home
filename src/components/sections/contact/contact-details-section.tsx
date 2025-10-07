'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactDetailsSection() {
	const t = useTranslations('ContactPage');

	return (
		<div>
			<h1 className="text-center text-3xl font-bold sm:text-4xl">
				{t('heading')}
			</h1>
			<p className="mt-2 text-center text-gray-600 sm:text-lg">
				{t('description')}
			</p>

			{/* Contact Buttons */}
			<div className="mt-8 flex flex-wrap justify-center gap-4">
				{/* Email */}
				<Link href="mailto:kamdhenuseva@dayadevraha.com">
					<button className="flex w-16 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-white transition hover:bg-blue-700/90 sm:w-56 sm:px-6">
						<Mail className="h-6 w-6" />
						<span className="hidden sm:inline">{t('emailUs')}</span>
					</button>
				</Link>

				{/* WhatsApp */}
				<Link href="https://wa.me/+917302756618" target="_blank">
					<button className="flex w-16 cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-white transition hover:bg-green-700 sm:w-56 sm:px-6">
						<MessageCircle className="h-6 w-6" />
						<span className="hidden sm:inline">
							{t('whatsappUs')}
						</span>
					</button>
				</Link>
			</div>

			{/* Contact Details */}
			<div className="mt-6 flex flex-col items-center gap-4 text-center">
				{/* Email */}
				<div className="flex w-full max-w-sm items-center justify-start gap-x-3">
					<Mail className="h-5 w-5 shrink-0 text-black/80" />
					<p className="text-sm font-semibold md:text-lg">
						kamdhenuseva@dayadevraha.com
					</p>
				</div>

				{/* Address */}
				<div className="flex w-full max-w-sm items-center justify-start gap-x-3">
					<MapPin className="h-5 w-5 shrink-0 text-black/80" />
					<p className="text-left text-sm font-semibold md:text-lg">
						{t('address')}
					</p>
				</div>
			</div>

			{/* Google Map */}
			<div className="mt-10 flex justify-center">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7242073.95577103!2d77.715488!3d27.588292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fb8c0918c63%3A0x5dd68797914571fe!2sYogiraj%20Devraha%20Baba%20(Samadhi%20sthal%20and%20Ashram)!5e0!3m2!1sen!2sus!4v1741432250612!5m2!1sen!2sus"
					width="600"
					height="450"
					className="w-full max-w-2xl rounded-lg border-0 shadow-lg"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	);
}
