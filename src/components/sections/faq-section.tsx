'use client';

import DynamicAccordion from '@/components/utils/dynamic-accordion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ASSET_BASE_URL } from '@/constants/assets';

interface FAQProps {
	reverse?: boolean;
}

export default function FAQSection({ reverse = false }: FAQProps) {
	const t = useTranslations('HomePage.faq');
	const { locale } = useParams();
	const currentLocale = (locale as string) || 'en';

	const accordionKeys = ['1', '2', '3'];
	const accordionItems = accordionKeys.map((key) => ({
		id: `questions.item-${key}`,
		title: t(`questions.${key}.question`),
		content: t(`questions.${key}.answer`),
	}));

	return (
		<div
			className={`flex flex-col-reverse items-center gap-12 transition-colors duration-300 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} `}
		>
			{/* Image - Hidden on Mobile */}
			<div className="relative hidden h-[650px] w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 md:block md:w-1/2">
				<Image
					src={`${ASSET_BASE_URL}/philosophy-section/image-14.JPG`}
					alt="FAQs"
					fill
					className="rounded-2xl object-cover"
					sizes="(min-width: 768px) 50vw, 100vw"
					priority={false}
				/>
			</div>

			{/* Accordion - Full width on mobile, half on desktop */}
			<div className="bg-primary flex h-auto w-full flex-col rounded-2xl p-6 shadow-xl transition-all duration-300 md:h-[650px] md:w-1/2 md:p-10">
				<h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
					{t('title')}
				</h2>
				<p className="mb-4 text-sm text-gray-200 sm:text-base md:text-lg">
					{t('description')}
				</p>

				<div className="flex-1">
					<DynamicAccordion
						items={accordionItems}
						className="text-gray-100"
					/>
				</div>

				<div className="mt-auto flex justify-center pt-6">
					<Link href={`/${currentLocale}/faq`} passHref>
						<Button
							variant="link"
							effect="hoverUnderline"
							className="cursor-pointer text-base font-medium text-white md:text-lg dark:text-white"
						>
							{t('moreFAQs')}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
