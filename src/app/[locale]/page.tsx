import AboutSection from '@/components/sections/about-section';
import FAQSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import OriginsSection from '@/components/sections/origin-section';
import PhilosophySection from '@/components/sections/philosophy-section';
import QuotesSection from '@/components/sections/quotes-section';

export default function Home() {
	return (
		<main>
			{/* HERO stays full-bleed */}
			<HeroSection />

			{/* One container for all other sections */}
			<div className="mx-auto max-w-7xl px-4 md:px-6">
				<section id="about" className="scroll-mt-18 py-20">
					<AboutSection />
				</section>

				<section id="philosophy" className="scroll-mt-18 py-20">
					<PhilosophySection />
				</section>

				<section id="quotes" className="scroll-mt-18 py-20">
					<QuotesSection />
				</section>

				<section id="origins" className="scroll-mt-18 py-20">
					<OriginsSection />
				</section>

				<section id="faq" className="scroll-mt-18 py-20">
					<FAQSection />
				</section>
			</div>
		</main>
	);
}
