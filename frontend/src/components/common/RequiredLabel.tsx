interface RequiredLabelProps {
    children: React.ReactNode;
    required?: boolean;
}

import {
    FieldLabel,
} from "@/components/ui/field";

export function RequiredLabel({
    children,
    required,
}: RequiredLabelProps) {
    return (
        <FieldLabel>
            {children}
            {required && (
                <span
                    className="ml-1 text-destructive"
                    aria-hidden="true"
                >
                    *
                </span>
            )}
        </FieldLabel>
    );
}