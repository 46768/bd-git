import { Section } from "@/lib/dataUtils";
import Link from "next/link";
import clsx from "clsx";

export default function SectionTree({
    section,

    hrefPrefix = "",

    className = "",
}: Readonly<{
    section: Section;

    hrefPrefix?: string;

    className?: string;
}>) {
    return (
        <div className={clsx("h-full bg-base-200", className)}>
            <ul className="menu bg-base-200 w-56">
                <li>
                    <a className="menu-title" href={hrefPrefix}>
                        {hrefPrefix}
                    </a>
                    <a
                        className="menu-title"
                        href={`${hrefPrefix}/${section.urlName}`}
                    >
                        {section.name}
                    </a>
                    <ul>
                        {Object.entries(section.topics).map(
                            ([name, topic], idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`${hrefPrefix}/${section.urlName}/${name}`}
                                    >
                                        {topic.name}
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
