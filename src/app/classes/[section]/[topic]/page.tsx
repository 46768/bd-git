import TopicDisplay from "@/components/ui/display/TopicDisplay";
import classesData from "@/data/classes";
import { getTopic, Topic } from "@/lib/dataUtils";

export default async function Classes({
    params,
}: Readonly<{
    params: Promise<{ section: string; topic: string }>;
}>) {
    const { section, topic } = await params;
	const topicData: Topic = getTopic(classesData, section, topic);

    return (
        <main className="h-full">
			<div className="h-full flex flex-row">
				<div className="flex-1">
					<TopicDisplay topic={topicData}/>
				</div>
				<div className="flex-0 divider divider-horizontal"/>
				<div className="flex-2"/>
			</div>
        </main>
    );
}
