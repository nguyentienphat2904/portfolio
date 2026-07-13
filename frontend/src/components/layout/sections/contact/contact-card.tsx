import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
    icon: LucideIcon;
    title: string;
    value: string;
    href?: string;
}

export default function ContactCard({
    icon: Icon,
    title,
    value,
    href,
}: ContactCardProps) {
    return (
        <Card className="rounded-3xl shadow-none transition-all hover:border-primary/20">
            <CardContent className="flex items-center gap-5 p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    {href ? (
                        <Link
                            href={href}
                            className="font-medium hover:text-primary"
                        >
                            {value}
                        </Link>
                    ) : (
                        <p className="font-medium">
                            {value}
                        </p>
                    )}
                </div>

            </CardContent>
        </Card>
    );
}