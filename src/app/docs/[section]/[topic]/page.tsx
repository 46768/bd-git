import SectionTree from "@/components/ui/display/SectionTree";
import TopicDisplay from "@/components/ui/display/TopicDisplay";
import classesData from "@/data/docs";
import { getSection, getTopic, Section, Topic } from "@/lib/dataUtils";

export default async function Docs({
    params,
}: Readonly<{
    params: Promise<{ section: string; topic: string }>;
}>) {
    const { section, topic } = await params;
	const sectionData: Section = getSection(classesData, section);
	const topicData: Topic = getTopic(classesData, section, topic);

	console.log(sectionData);
	console.log(topicData);

    return (
        <main className="h-full flex flex-row">
			<SectionTree section={sectionData}/>
			<TopicDisplay topic={topicData} className="grow"/>
        </main>
    );
}
