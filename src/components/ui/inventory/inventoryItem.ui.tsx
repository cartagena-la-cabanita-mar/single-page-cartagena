interface InventoryItemUIProps {
    name: string;
    quantity: number;
}

/** A line of the checklist: the name, a dotted leader and how many of them there are. */
export default function InventoryItemUI({ name, quantity }: InventoryItemUIProps) {
    return (
        <li className="flex break-inside-avoid items-baseline-last gap-3 py-1.5">
            <span>{name}</span>
            <span aria-hidden="true" className="min-w-6 flex-1 border-b-2 border-dotted border-sea-300" />
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lemon-300 font-display text-sm font-bold text-sea-950">
                {quantity}
            </span>
        </li>
    );
}
