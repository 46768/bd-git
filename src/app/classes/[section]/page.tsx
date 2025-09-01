import SectionDisplay from "@/components/ui/display/SectionDisplay";
import SectionTree from "@/components/ui/display/SectionTree";
import classesData from "@/data/classes";
import { generateDataStaticParams, getSection, Section } from "@/lib/dataUtils";
import Link from "next/link";

export function generateStaticParams() {
    return generateDataStaticParams(classesData);
}

export default async function ClassesSection({
    params,
}: Readonly<{
    params: Promise<{ section: string }>;
}>) {
    const { section } = await params;
    const sectionData: Section = getSection(classesData, section);

    return (
        <main className="h-full flex flex-col">
            <div className="breadcrumbs text-sm bg-base-200 p-4">
                <ul>
                    <li>
                        <Link href="/classes">Classes</Link>
                    </li>
                    <li>
                        <Link href={`/classes/${section}`}>
                            {sectionData.name}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row h-full">
                <SectionTree
                    section={sectionData}
                    className="menu-xl pr-10"
                    hrefPrefix="/classes"
                />
                <SectionDisplay
                    section={sectionData}
                    className="grow"
                    hrefPrefix="/classes"
                />
            </div>
        </main>
    );
}
