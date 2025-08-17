import Link from "next/link";

export default function NavLink({
    href,
    children,
}: Readonly<{
    href: string;

    children: React.ReactNode;
}>) {
    return (
        <Link className="btn w-max bg-base-300" href={href}>
            {children}
        </Link>
    );
}
