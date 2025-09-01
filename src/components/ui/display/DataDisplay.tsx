import { Data } from "@/lib/dataUtils";
import clsx from "clsx";
import Link from "next/link";

export default function DataDisplay({
    data,

    hrefPrefix,

    className = "",
}: Readonly<{
    data: Data;

    hrefPrefix: string;

    className?: string;
}>) {
    return (
        <div className={clsx("flex flex-row h-full", className)}>
            <div className="grow overflow-scroll">
                <div className="prose p-4 w-full max-w-none">
                    <h1>{data.name}</h1>

                    {data.description}

                    <h2>Sections</h2>
                    {Object.entries(data.sections).map(([_, section], idx) => (
                        <div key={idx}>
                            <h3>
                                <Link href={`${hrefPrefix}/${section.urlName}`}>
                                    {section.name}
                                </Link>
                            </h3>
                            {section.shortDescription}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
