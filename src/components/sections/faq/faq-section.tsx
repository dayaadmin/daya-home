'use client';

import { useTranslations } from 'next-intl';
import DynamicAccordion from '@/components/utils/dynamic-accordion';

export default function FAQSection() {
	const t = useTranslations('ContactPage.faq');

	const accordionKeys = Array.from({ length: 11 }, (_, i) =>
		(i + 1).toString()
	);
	const accordionItems = accordionKeys.map((key) => ({
		id: `questions.item-${key}`,
		title: t(`questions.${key}.question`),
		content: t(`questions.${key}.answer`),
	}));

	return (
		<section
			id="FAQsection"
			className="mx-auto max-w-7xl scroll-mt-16 px-6 py-12"
		>
			<h2 className="text-center text-3xl font-bold sm:text-4xl">
				{t('title')}
			</h2>
			<p className="mt-2 text-center text-gray-600 sm:text-lg">
				{t('description')}
			</p>
			<div className="mx-auto mt-8 max-w-4xl">
				<DynamicAccordion items={accordionItems} />
			</div>
		</section>
	);
}
