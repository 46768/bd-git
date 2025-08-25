import clsx from "clsx";
import NavLink from "./NavLink";

export default function NavBar({
    className = "",
}: Readonly<{
    className?: string;
}>) {
    return (
        <div
            className={clsx(
                "navbar w-full bg-base-200 border border-base-300 shadow-sm",
                className,
            )}
        >
            <div className="navbar-start flex flex-row gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/classes">Classes</NavLink>
                <NavLink href="/docs">Docs</NavLink>
            </div>

            <div className="navbar-center flex flex-row gap-4"></div>

            <div className="navbar-end flex flex-row gap-4">
                <NavLink href="https://git-scm.com">Get Git</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>
        </div>
    );
}
