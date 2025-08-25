import TopicDisplay from "@/components/ui/display/TopicDisplay";
import classesData from "@/data/classes";
import { generateDataStaticParams, getSection, getTopic, Topic } from "@/lib/dataUtils";
import Link from "next/link";

export function generateStaticParams() {
  return generateDataStaticParams(classesData);
}

export default async function ClassesTopic({
    params,
}: Readonly<{
    params: Promise<{ section: string; topic: string }>;
}>) {
    const { section, topic } = await params;
    const sectionName: string = getSection(classesData, section).name;
    const topicData: Topic = getTopic(classesData, section, topic);

    return (
        <main className="h-full">
            <div className="h-full flex flex-col">
                <div className="">
                    <div className="breadcrumbs text-sm bg-base-200 p-4">
                        <ul>
                            <li>
                                <Link href="/classes">Classes</Link>
                            </li>
                            <li>
                                <Link href={`/classes/${section}`}>
                                    {sectionName}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/classes/${section}/${topic}`}>
                                    {topicData.name}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row h-full">
                    <TopicDisplay
                        topic={topicData}
                        className="bg-base-200 flex-1"
                        menu_initial={false}
                    />
                    <div className="flex-2" />
                </div>
            </div>
        </main>
    );
}
