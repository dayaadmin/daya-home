import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface AccordionData {
	id: string;
	title: string;
	content: string;
}

interface DynamicAccordionProps {
	items: AccordionData[];
	className?: string;
}

export default function DynamicAccordion({
	items,
	className,
}: DynamicAccordionProps) {
	return (
		<Accordion type="single" collapsible className={cn(className)}>
			{items.map((item) => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger
						className={cn(
							'flex items-center justify-between py-4 text-lg font-medium transition-colors duration-300',
							className
						)}
					>
						{item.title}
					</AccordionTrigger>
					<AccordionContent
						className={cn(
							'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm',
							className
						)}
					>
						<div className={cn('pt-0 pb-4', className)}>
							{item.content}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
