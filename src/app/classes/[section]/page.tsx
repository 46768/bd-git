import SectionTree from "@/components/ui/display/SectionTree";
import classesData from "@/data/classes";
import { getSection, Section } from "@/lib/dataUtils";
import Link from "next/link";

export default async function ClassesSection({
    params,
}: Readonly<{
    params: Promise<{ section: string }>;
}>) {
    const { section } = await params;
    const sectionData: Section = getSection(classesData, section);

    return (
        <main className="h-full">
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

            <SectionTree
                section={sectionData}
                className="menu-xl"
                hrefPrefix="/classes"
            />
        </main>
    );
}
