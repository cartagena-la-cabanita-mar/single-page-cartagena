interface CraftsListUIProps {
    title: string;
    items: Array<string>;
    className?: string;
}

/** A short list of places to browse, each marked with the lemon diamond of the azulejo tile. */
export default function CraftsListUI({ title, items, className }: CraftsListUIProps) {
    return (
        <div className={className}>
            <h4 className="font-display text-xl font-semibold text-sea-600 italic">{title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-2.5 size-2.5 shrink-0 rotate-45 bg-lemon-400" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
