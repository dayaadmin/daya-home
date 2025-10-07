import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Instagram from '@/assets/instagram-logo.svg';
import Facebook from '@/assets/facebook-logo.svg';
import WhatsApp from '@/assets/whatsapp-logo.svg';
import YouTube from '@/assets/youtube-logo.svg';
import { useTranslations } from 'next-intl';
import LocaleToggle from '@/components/utils/locale-toggle';
import { Badge } from '@/components/ui/badge';

interface FooterLink {
	name: string;
	href: string;
	className?: string;
	badge?: {
		show: boolean;
		text: string;
		variant?: 'default' | 'outline' | 'secondary' | 'destructive';
		className?: string;
	};
}

export default function Footer() {
	const t = useTranslations('Footer');

	const footerData = {
		logo: {
			name: t('logo'),
			href: '/',
		},
		p: {
			text: t('description'),
		},
		sections: [
			{
				title: t('sections.company.title'),
				links: [
					{
						name: t('sections.company.links.dayaHome'),
						href: 'https://home.dayadevraha.com',
					},
					{
						name: t('sections.company.links.kamdhenuseva'),
						href: 'https://kamdhenuseva.dayadevraha.com',
					},
					{
						name: t('sections.company.links.shop'),
						href: 'https://shop.dayadevraha.com',
						badge: {
							show: true,
							text: 'New',
							variant: 'secondary',
							// className: 'bg-[linear-gradient(135deg,_#1E6F9F,_#9E00FF)] text-white',
						},
					},
				] as FooterLink[],
			},
			{
				title: t('sections.resources.title'),
				links: [
					{ name: t('sections.resources.links.home'), href: '/' },
					{
						name: t('sections.resources.links.aboutUs'),
						href: '/#about',
					},
					{
						name: t('sections.resources.links.philosophy'),
						href: '/#philosophy',
					},
					{
						name: t('sections.resources.links.origins'),
						href: '/#origins',
					},
					{
						name: t('sections.resources.links.donate'),
						href: 'https://kamdhenuseva.dayadevraha.com/en/donate',
					},
					{
						name: t('sections.resources.links.contactUs'),
						href: '/contact',
					},
					{ name: t('sections.resources.links.faq'), href: '/faq' },
				] as FooterLink[],
			},
		],
		socials: [
			{
				icons: WhatsApp,
				name: 'WhatsApp',
				href: 'https://wa.me/+917302756618',
				color: 'bg-green-500',
				textColor: 'text-white',
			},
			{
				icons: Facebook,
				name: 'Facebook',
				href: 'https://www.facebook.com/profile.php?id=61573834466225',
				color: 'bg-blue-600',
				textColor: 'text-white',
			},
			{
				icons: Instagram,
				name: 'Instagram',
				href: 'https://www.instagram.com/kamdhenuseva',
				color: 'bg-pink-500',
				textColor: 'text-white',
			},
			{
				icons: YouTube,
				name: 'YouTube',
				href: 'https://www.youtube.com/@kamdhenuseva.dayadevraha',
				color: 'bg-red-500',
				textColor: 'text-white',
			},
		],
		madeBy: [
			{
				name: t('madeBy.aryanGulati'),
				href: 'https://www.linkedin.com/in/aryangulati2k3/',
			},
			{
				name: t('madeBy.neelanjanMukherji'),
				href: 'https://www.linkedin.com/in/neelanjan-mukherji/',
			},
		],
	};

	return (
		<footer
			className={cn(
				'px-4 py-8 md:px-10',
				'bg-primary backdrop-blur-md dark:bg-gray-950',
				'border-t border-gray-200 dark:border-gray-700',
				'shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-35px_60px_-15px_rgba(255,255,255,0.1)]',
				'grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-5'
			)}
		>
			{/* Logo + description */}
			<div className="col-span-1 text-center md:col-span-5 md:text-left">
				<Link href={footerData.logo.href}>
					<h1 className="text-2xl font-bold text-white dark:text-white">
						{footerData.logo.name}
					</h1>
				</Link>
				<p className="mx-6 mt-2 text-white md:mx-0 dark:text-gray-300">
					{footerData.p.text}
				</p>
			</div>

			{/* Logo image */}
			<div className="col-span-1 flex flex-col items-center">
				<Link href={footerData.logo.href}>
					<Image
						src="/daya-logo.svg"
						alt="Logo"
						height={700}
						width={700}
						className="mb-2 object-contain"
					/>
				</Link>
			</div>

			{/* Sections */}
			{footerData.sections.map((section, index) => (
				<div
					key={index}
					className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left"
				>
					<h2 className="font-mono text-xl font-bold text-white dark:text-white">
						{section.title}
					</h2>
					<div className="h-0.5 w-10 bg-white dark:bg-white"></div>
					<ul className="mt-2 space-y-2">
						{section.links.map((link, linkIndex) => (
							<li
								key={linkIndex}
								className="text-center md:text-left"
							>
								<Button
									variant="link"
									effect="hoverUnderline"
									asChild
									className={cn(
										// center text on small screens, left-align on medium and up
										'flex items-center justify-center gap-2 text-white md:justify-start',
										link.className
									)}
								>
									{link.href.startsWith('https') ? (
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{link.name}
											{link.badge?.show && (
												<Badge
													variant={
														link.badge.variant ??
														'default'
													}
													className={cn(
														link.badge.className
													)}
												>
													{link.badge.text}
												</Badge>
											)}
										</a>
									) : (
										<Link href={link.href}>
											{link.name}
											{link.badge?.show && (
												<Badge
													variant={
														link.badge.variant ??
														'default'
													}
													className={cn(
														link.badge.className
													)}
												>
													{link.badge.text}
												</Badge>
											)}
										</Link>
									)}
								</Button>
							</li>
						))}
					</ul>
				</div>
			))}

			{/* Socials */}
			<div>
				<h2 className="flex flex-col items-center text-center font-mono text-xl font-bold text-white md:items-start md:text-left dark:text-white">
					{t('socials.title')}
				</h2>
				<div className="mx-auto h-0.5 w-10 bg-white md:mx-0 dark:bg-white"></div>
				<ul className="mt-4 grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-2">
					{footerData.socials.map((social, index) => (
						<li
							key={index}
							className="col-span-1 flex flex-col items-center justify-center gap-3"
						>
							<Link
								href={social.href}
								className="block"
								target="_blank"
							>
								<Button
									className={cn(
										`flex h-12 w-12 items-center justify-center rounded-full p-2 ${social.color} ${social.textColor}`
									)}
									variant="link"
									effect="ringHover"
								>
									<social.icons className="h-6 w-6 align-middle" />
								</Button>
							</Link>
							<span className="text-center text-sm text-white md:hidden">
								{social.name}
							</span>
						</li>
					))}
				</ul>
			</div>

			{/* Footer bottom */}
			<div className="col-span-1 mt-4 flex flex-col items-center justify-center space-y-2 border-t border-gray-200 pt-4 md:col-span-5 md:flex-row md:justify-between md:space-y-0 dark:border-gray-700">
				<p className="text-center text-white md:text-left dark:text-gray-400">
					&copy; {new Date().getFullYear()} {footerData.logo.name}.{' '}
					{t('allRightsReserved')}
				</p>
				<p className="text-center text-white md:text-right dark:text-gray-400">
					{t('designedAndDevelopedBy')}{' '}
					{footerData.madeBy.map((madeBy, index) => (
						<React.Fragment key={index}>
							<Button
								variant="link"
								effect="hoverUnderline"
								asChild
								className="text-white"
							>
								<Link
									href={madeBy.href}
									className="block"
									target="_blank"
								>
									{madeBy.name}
								</Link>
							</Button>
							{index < footerData.madeBy.length - 1 && (
								<span className="hidden md:inline">
									&nbsp;&amp;&nbsp;
								</span>
							)}
							{index < footerData.madeBy.length - 1 && (
								<span className="inline md:hidden">
									&nbsp;/&nbsp;
								</span>
							)}
						</React.Fragment>
					))}
				</p>
			</div>
		</footer>
	);
}
