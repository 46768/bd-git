import { Section } from "@/lib/dataUtils";
import clsx from "clsx";
import Link from "next/link";

export default function SectionDisplay({
    section,

    hrefPrefix,

    className = "",
}: Readonly<{
    section: Section;
    hrefPrefix: string;
    className?: string;
}>) {
    return (
        <div className={clsx("flex flex-row h-full", className)}>
            <div className="grow overflow-scroll">
                <div className="prose p-4 w-full max-w-none">
                    <h1>{section.name}</h1>

                    {section.description}

                    <h2>Topics</h2>
                    {Object.entries(section.topics).map(([_, topic], idx) => (
                        <div key={idx}>
                            <h3>
                                <Link
                                    href={`${hrefPrefix}/${section.urlName}/${topic.urlName}`}
                                >
                                    {topic.name}
                                </Link>
                            </h3>
                            {topic.description}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
