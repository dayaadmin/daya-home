// src/app/[locale]/(no-sidebar)/contact/page.tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';
import ContactDetailsSection from '@/components/sections/contact/contact-details-section';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function ContactPage() {
	const t = useTranslations('breadcrumb');
	const locale = useLocale();

	return (
		<main>
			{/* Single, centralized container for the page */}
			<div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:pt-24">
				{/* Breadcrumbs */}
				<Breadcrumb className="mb-6">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href={`/${locale}`}>
								{t('home')}
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{t('contact')}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				{/* Contact details only (no FAQ) */}
				<section id="contact" className="scroll-mt-24">
					<ContactDetailsSection />
				</section>
			</div>
		</main>
	);
}
