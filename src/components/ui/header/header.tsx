'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Button } from '../button';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetTrigger,
} from '@/components/ui/sheet';

const itemVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverVariants = {
	hover: { fontFamily: 'font-mono', transition: { duration: 0.3 } },
};

interface LinkItem {
	linkName: string;
	href: string;
	targetBlank?: boolean;
	badge?: {
		show: boolean;
		text: string;
		variant?: 'default' | 'outline' | 'secondary' | 'destructive';
	};
}

interface CTAButton {
	href: string;
	label: string;
	targetBlank?: boolean;
	variant?:
		| 'link'
		| 'outline'
		| 'default'
		| 'destructive'
		| 'secondary'
		| 'ghost';
	effect?:
		| 'underline'
		| 'expandIcon'
		| 'ringHover'
		| 'shine'
		| 'shineHover'
		| 'gooeyRight'
		| 'gooeyLeft'
		| 'hoverUnderline'
		| null
		| undefined;
	badge?: {
		show: boolean;
		text: string;
		variant?: 'default' | 'outline' | 'secondary' | 'destructive';
	};
}

interface HeaderProps {
	links: LinkItem[];
	ctaButtons: CTAButton[];
}

export default function Header({ links, ctaButtons }: HeaderProps) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={cn(
				'fixed top-0 left-0 z-50 w-full bg-white select-none dark:bg-black',
				scrolled
					? 'border-b border-gray-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-md transition-shadow duration-500 dark:border-gray-700 dark:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]'
					: 'transition-shadow duration-500'
			)}
		>
			<Navbar links={links} ctaButtons={ctaButtons} />
		</motion.header>
	);
}

interface NavbarProps {
	links: LinkItem[];
	ctaButtons: CTAButton[];
}

function Navbar({ links, ctaButtons }: NavbarProps) {
	const t = useTranslations('Header');
	const [open, setOpen] = useState(false);

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-between px-5 py-1 md:flex-row md:px-20 lg:px-40'
			)}
		>
			{/* Logo + Mobile Trigger */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={itemVariants}
				className="flex w-full items-center justify-between md:w-auto"
			>
				<Link href="/" className="flex items-center gap-1">
					<Image
						src="/daya-logo.svg"
						alt="Daya Logo"
						width={70}
						height={70}
						priority
					/>
					<h1 className="text-xl font-bold tracking-wide text-black lg:text-2xl dark:text-white">
						{t('logo')}
					</h1>
				</Link>

				{/* Mobile: Sheet Trigger */}
				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button
								variant="link"
								effect="shine"
								className="bg-black text-lg font-[300] text-white dark:bg-white dark:text-black"
								aria-label="Open menu"
							>
								<Menu size={30} />
							</Button>
						</SheetTrigger>

						<SheetContent
							side="right"
							className="bg-white dark:bg-black"
						>
							<SheetHeader className="p-0">
								<SheetTitle className="sr-only">
									Navigation
								</SheetTitle>
								<SheetDescription className="sr-only">
									Site navigation links and actions
								</SheetDescription>
							</SheetHeader>

							{/* Mobile Nav content inside the sheet */}
							<nav className="mt-6 flex flex-col items-start gap-4 p-6">
								<MobileLinks
									links={links}
									onNavigate={() => setOpen(false)}
								/>
								<div className="mt-4">
									<MobileCTA
										buttons={ctaButtons}
										onNavigate={() => setOpen(false)}
									/>
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</motion.div>

			{/* Desktop Nav */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					...itemVariants,
					visible: {
						...itemVariants.visible,
						transition: {
							...itemVariants.visible.transition,
							delay: 0.2,
						},
					},
				}}
				className="hidden items-center gap-5 md:flex"
			>
				<Links links={links} />
				<CTAButtons buttons={ctaButtons} />
			</motion.div>
		</div>
	);
}

interface LinkProps {
	links: LinkItem[];
}

function Links({ links }: LinkProps) {
	return (
		<ul className={cn('flex items-center')}>
			{links.map((link) => (
				<motion.li
					key={link.href}
					initial="hidden"
					animate="visible"
					variants={{
						...itemVariants,
						visible: {
							...itemVariants.visible,
							transition: {
								...itemVariants.visible.transition,
								delay: 0.3,
							},
						},
					}}
				>
					<motion.div whileHover="hover" variants={hoverVariants}>
						<Button
							variant="link"
							effect="hoverUnderline"
							className="flex items-center gap-2 text-lg font-[300] text-black dark:text-white"
						>
							{link.targetBlank ? (
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.linkName}
								</a>
							) : (
								<Link href={link.href}>{link.linkName}</Link>
							)}

							{link.badge?.show && (
								<Badge
									variant={link.badge.variant ?? 'default'}
								>
									{link.badge.text}
								</Badge>
							)}
						</Button>
					</motion.div>
				</motion.li>
			))}
		</ul>
	);
}

/* ---------- Mobile-only pieces rendered inside the Sheet ---------- */

function MobileLinks({
	links,
	onNavigate,
}: {
	links: LinkItem[];
	onNavigate?: () => void;
}) {
	return (
		<ul className="flex w-full flex-col gap-2">
			{links.map((link) => (
				<li key={link.href}>
					{link.targetBlank ? (
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							onClick={onNavigate}
							className="flex items-center gap-2 text-lg font-[300]"
						>
							{link.linkName}
							{link.badge?.show && (
								<Badge
									variant={link.badge.variant ?? 'default'}
								>
									{link.badge.text}
								</Badge>
							)}
						</a>
					) : (
						<Link
							href={link.href}
							onClick={onNavigate as any}
							className="flex items-center gap-2 text-lg font-[300]"
						>
							{link.linkName}
							{link.badge?.show && (
								<Badge
									variant={link.badge.variant ?? 'default'}
								>
									{link.badge.text}
								</Badge>
							)}
						</Link>
					)}
				</li>
			))}
		</ul>
	);
}

interface CTAButtonsProps {
	buttons: CTAButton[];
}

function CTAButtons({ buttons }: CTAButtonsProps) {
	return (
		<div className={cn('flex gap-5')}>
			{buttons.map((button, index) => {
				const ButtonContent = (
					<Button
						variant={button.variant}
						effect={button.effect}
						className="relative text-lg font-[300]"
					>
						{button.label}
						{button.badge?.show && (
							<span
								className={cn(
									'absolute -top-2 -right-2 rotate-12 rounded px-2 py-0.5 text-xs font-bold text-white uppercase shadow',
									'bg-[linear-gradient(135deg,_#1E6F9F,_#9E00FF)]'
								)}
							>
								{button.badge.text}
							</span>
						)}
					</Button>
				);

				return button.targetBlank ? (
					<a
						key={index}
						href={button.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{ButtonContent}
					</a>
				) : (
					<Link key={index} href={button.href}>
						{ButtonContent}
					</Link>
				);
			})}
		</div>
	);
}

/** Mobile variants of CTA to close the sheet on navigate */
function MobileCTA({
	buttons,
	onNavigate,
}: {
	buttons: CTAButton[];
	onNavigate?: () => void;
}) {
	return (
		<div className="flex w-full flex-col gap-3">
			{buttons.map((button, index) => {
				const Btn = (
					<Button
						key={index}
						variant={button.variant}
						effect={button.effect}
						className="relative w-full justify-center text-base font-[300]"
						onClick={onNavigate}
					>
						{button.label}
						{button.badge?.show && (
							<span
								className={cn(
									'absolute -top-2 -right-2 rotate-12 rounded px-2 py-0.5 text-xs font-bold text-white uppercase shadow',
									'bg-[linear-gradient(135deg,_#1E6F9F,_#9E00FF)]'
								)}
							>
								{button.badge.text}
							</span>
						)}
					</Button>
				);

				return button.targetBlank ? (
					<a
						key={index}
						href={button.href}
						target="_blank"
						rel="noopener noreferrer"
						onClick={onNavigate}
					>
						{Btn}
					</a>
				) : (
					<Link
						key={index}
						href={button.href}
						onClick={onNavigate as any}
					>
						{Btn}
					</Link>
				);
			})}
		</div>
	);
}
