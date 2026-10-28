import type { ComponentProps } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "@/utils/common.util";

function Dialog(props: ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root {...props} />;
}

function DialogPortal(props: ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal {...props} />;
}

function DialogClose(props: ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close {...props} />;
}

function DialogOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            className={cn("fixed inset-0 z-50 bg-sea-950/75 backdrop-blur-sm", className)}
            {...props}
        />
    );
}

function DialogContent({ className, ...props }: ComponentProps<typeof DialogPrimitive.Content>) {
    return <DialogPrimitive.Content className={cn("fixed z-50 outline-none", className)} {...props} />;
}

function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
    return <DialogPrimitive.Title className={cn(className)} {...props} />;
}

function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>) {
    return <DialogPrimitive.Description className={cn(className)} {...props} />;
}

export { Dialog, DialogPortal, DialogClose, DialogOverlay, DialogContent, DialogTitle, DialogDescription };
