import clsx from "clsx";
import Link from "next/link";

export default function Card({
    title,
    body,

    href,
}: Readonly<{
    title: string;
    body: string;

    href?: string;
}>) {
    const card: React.ReactNode = (
        <div
            className={clsx(
                "card card-lg bg-base-200 border-2 border-base-300 w-96",
                {
                    "hover:border-primary hover:shadow-sm hover:bg-base-300 transition":
                        href !== undefined, // Set if href is not undefined
                },
            )}
        >
            <div className="card-body">
                <h1 className="card-title">{title}</h1>

                <p className="wrap-break-word">{body}</p>
            </div>
        </div>
    );

    const linkCard: React.ReactNode = <Link href={href ?? "/"}>{card}</Link>;

    return href ? linkCard : card;
}
