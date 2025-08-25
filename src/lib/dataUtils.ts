// Section/Topic/(Content | SubTopic/Content)
export interface Data<T = Section> {
    name: string;
    urlName: string;
    description: React.ReactNode;
    sections: Record<string, T>;
}
export interface Section<T = Topic> {
    name: string;
    urlName: string;
    description: React.ReactNode;
    topics: Record<string, T>;
}
export interface Topic<T = Subtopic> {
    name: string;
    urlName: string;
    content: React.ReactNode;
    subtopics: Record<string, T>;
}
export interface Subtopic {
    name: string;
    urlName: string;
    content: React.ReactNode;
}

export type DataConstructor = Omit<Data<SectionConstructor>, "urlName">;
export type SectionConstructor = Omit<
    Section<TopicConstructor>,
    "name" | "urlName"
>;
export type TopicConstructor = Omit<
    Topic<SubtopicConstructor>,
    "name" | "urlName"
>;
export type SubtopicConstructor = Omit<Subtopic, "name" | "urlName">;

function formatURL(raw: string): string {
    return raw
        .toLowerCase()
        .replace(new RegExp("\\s", "g"), "_")
        .replace(new RegExp("['\\?]", "g"), "");
}

export function compileData(dataConstructor: DataConstructor): Data {
    const compiledData: Data = {
        name: dataConstructor.name,
        urlName: formatURL(dataConstructor.name),
        description: dataConstructor.description,
        sections: {},
    };

    for (const [section, sectionConstructor] of Object.entries(
        dataConstructor.sections,
    )) {
        const compiledSection: Section = {
            name: section,
            description: sectionConstructor.description,
            urlName: formatURL(section),
            topics: {},
        };

        for (const [topic, topicConstructor] of Object.entries(
            sectionConstructor.topics,
        )) {
            const compiledTopic: Topic = {
                name: topic,
                urlName: formatURL(topic),
                content: topicConstructor.content,
                subtopics: {},
            };

            for (const [subtopic, subtopicConstructor] of Object.entries(
                topicConstructor.subtopics,
            )) {
                const compiledSubtopic: Subtopic = {
                    urlName: formatURL(subtopic),
                    name: subtopic,
                    content: subtopicConstructor.content,
                };

                compiledTopic.subtopics[formatURL(subtopic)] = compiledSubtopic;
            }

            compiledSection.topics[formatURL(topic)] = compiledTopic;
        }

        compiledData.sections[formatURL(section)] = compiledSection;
    }

    return compiledData;
}

export function generateDataStaticParams(data: Data): Array<Record<string, string>> {
	const routes: Array<Record<string, string>> = [];
	
	for (const sectionData of Object.entries(data.sections)) {
		for (const topicData of Object.entries(sectionData[1].topics)) {
			routes.push({"section": sectionData[1].urlName, "topic": topicData[1].urlName})
		}
	}

	return routes;
}

const nullSection: Section = {
    name: "nil",
    description: "nil",
    urlName: "nil",
    topics: {},
};

const nullTopic: Topic = {
    name: "nil",
    urlName: "nil",
    content: "nilnil",
    subtopics: {},
};

export function getContent(
    data: Data,
    section: string,
    topic: string,
    subtopic?: string,
): React.ReactNode {
    try {
        const topicData: Topic = data.sections[section].topics[topic];
        if (subtopic !== undefined) {
            return topicData.subtopics[subtopic].content;
        } else {
            return topicData.content;
        }
    } catch {
        return "";
    }
}

export function getTopic(data: Data, section: string, topic: string): Topic {
    const sectionData: Section = getSection(data, section);

    if (!Object.hasOwn(sectionData.topics, topic)) {
        return nullTopic;
    }
    return data.sections[section].topics[topic];
}

export function getSection(data: Data, section: string): Section {
    if (!Object.hasOwn(data.sections, section)) {
        return nullSection;
    }
    return data.sections[section];
}
