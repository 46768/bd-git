import SectionTree from "@/components/ui/display/SectionTree";
import TopicDisplay from "@/components/ui/display/TopicDisplay";
import classesData from "@/data/docs";
import { generateDataStaticParams, getSection, getTopic, Section, Topic } from "@/lib/dataUtils";
import Link from "next/link";

export function generateStaticParams() {
  return generateDataStaticParams(classesData);
}

export default async function DocsTopic({
    params,
}: Readonly<{
    params: Promise<{ section: string; topic: string }>;
}>) {
    const { section, topic } = await params;
    const sectionData: Section = getSection(classesData, section);
    const topicData: Topic = getTopic(classesData, section, topic);

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
                    <li>
                        <Link href={`/docs/${section}/${topic}`}>
                            {topicData.name}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="h-full flex flex-row grow min-h-0">
                <SectionTree section={sectionData} hrefPrefix="/docs" />
                <TopicDisplay topic={topicData} className="grow" />
            </div>
        </main>
    );
}
