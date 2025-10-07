import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Providers from './provider';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	preload: true,
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	preload: true,
});

export const metadata: Metadata = {
	title: 'DAYA Devraha',
	description: 'DAYA Devraha is a non-profit organization.',
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const { locale } = await params;

	setRequestLocale(locale);

	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					'antialiased'
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<ThemeProvider
							attribute="class"
							defaultTheme="light"
							enableSystem
							disableTransitionOnChange
						>
							<Header
								links={[
									{ linkName: 'About', href: '/#about' },
									{
										linkName: 'Philosophy',
										href: '/#philosophy',
									},
									{ linkName: 'Origins', href: '/#origins' },
									{ linkName: 'Contact', href: '/contact' },
								]}
								ctaButtons={[
									{
										href: 'https://kamdhenuseva.dayadevraha.com/en/donate',
										label: 'Donate',
										variant: 'link',
										effect: 'hoverUnderline',
									},
									{
										href: 'https://shop.dayadevraha.com',
										label: 'Shop',
										badge: { show: true, text: 'New' },
									},
								]}
							/>

							{children}
							<Footer />
						</ThemeProvider>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
