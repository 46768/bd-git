import SectionTree from "@/components/ui/display/SectionTree";
import classesData from "@/data/docs";
import { getSection, Section } from "@/lib/dataUtils";

export default async function Docs({
    params,
}: Readonly<{
    params: Promise<{ section: string; }>;
}>) {
    const { section } = await params;
	const sectionData: Section = getSection(classesData, section);

    return (
        <main className="h-full">
			<SectionTree section={sectionData} hrefPrefix={`./${section}/`}/>
        </main>
    );
}
