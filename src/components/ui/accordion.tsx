import type { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { cn } from "@/utils/common.util";

function Accordion(props: ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
    return <AccordionPrimitive.Item className={cn("border-b border-sea-200", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                className={cn(
                    "group flex min-w-0 flex-1 items-center justify-between gap-4 py-5 text-left font-display text-xl font-semibold text-sea-900 transition-colors hover:text-sea-600",
                    className,
                )}
                {...props}
            >
                {children}
                <ChevronDown
                    className="size-5 shrink-0 text-sea-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn("pb-6", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
