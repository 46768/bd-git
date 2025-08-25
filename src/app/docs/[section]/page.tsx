import SectionDisplay from "@/components/ui/display/SectionDisplay";
import SectionTree from "@/components/ui/display/SectionTree";
import classesData from "@/data/docs";
import { generateDataStaticParams, getSection, Section } from "@/lib/dataUtils";
import Link from "next/link";

export async function generateStaticParams() {
  return generateDataStaticParams(classesData);
}

export default async function DocsSection({
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
                        <Link href="/docs">Docs</Link>
                    </li>
                    <li>
                        <Link href={`/docs/${section}`}>
                            {sectionData.name}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row grow">
                <SectionTree
                    section={sectionData}
                    className="menu-xl pr-10"
                    hrefPrefix="/docs"
                />
                <SectionDisplay section={sectionData} className="grow" />
            </div>
        </main>
    );
}
