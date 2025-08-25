import { Data } from "@/lib/dataUtils";
import Link from "next/link";
import clsx from "clsx";

export default function DataTree({
    data,

    hrefPrefix = "",

    className = "",
}: Readonly<{
    data: Data;

    hrefPrefix?: string;

    className?: string;
}>) {
    return (
        <div className={clsx("h-full bg-base-200", className)}>
            <ul className="menu bg-base-200 w-56">
                <li>
                    <ul>
                        {Object.entries(data.sections).map(
                            ([name, section], idx) => (
                                <li key={idx}>
                                    <Link href={`${hrefPrefix}/${name}`}>
                                        {section.name}
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
