import { Section } from "@/lib/dataUtils";
import clsx from "clsx";

export default function SectionDisplay({
    section,

    className = "",
}: Readonly<{
    section: Section;
    className?: string;
}>) {
    return (
        <div className={clsx("flex flex-row h-full", className)}>
            <div className="grow overflow-scroll">
                <div className="prose p-4 w-full max-w-none">
                    <h1>{section.name}</h1>

                    {section.description}
                </div>
            </div>
        </div>
    );
}
