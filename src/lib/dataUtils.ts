// Section/Topic/(Content | SubTopic/Content)
export type Data = Record<string, Section>;
export interface Section<T=Topic> {
    name: string;
    topics: Record<string, T>;
}
export interface Topic<T=Subtopic> {
    name: string;
    content: string;
    subtopics: Record<string, T>;
}
export interface Subtopic {
    name: string;
    content: string;
}

export type DataConstructor = Record<string, SectionConstructor>
export type SectionConstructor = Omit<Section<TopicConstructor>, "name">;
export type TopicConstructor = Omit<Topic<SubtopicConstructor>, "name">;
export type SubtopicConstructor = Omit<Subtopic, "name">;

export function compileData(dataConstructor: DataConstructor): Data {
	const compiledData: Data = {};

	for (const [section, sectionConstructor] of Object.entries(dataConstructor)) {
		const compiledSection: Section = {
			name: section,
			topics: {},
		};

		for (const [topic, topicConstructor] of Object.entries(sectionConstructor.topics)) {
			const compiledTopic: Topic = {
				name: topic,
				content: topicConstructor.content,
				subtopics: {},
			}

			for (const [subtopic, subtopicConstructor] of Object.entries(topicConstructor.subtopics)) {
				const compiledSubtopic: Subtopic = {
					name: subtopic,
					content: subtopicConstructor.content,
				};

				compiledTopic.subtopics[subtopic] = compiledSubtopic;
			}

			compiledSection.topics[topic] = compiledTopic;
		}

		compiledData[section] = compiledSection;
	}
	
	return compiledData;
}

const nullSection: Section = {
	name: "nil",
	topics: {},
};

const nullTopic: Topic = {
	name: "nil",
	content: "nilnil",
	subtopics: {},
};

export function getContent(
    data: Data,
    section: string,
    topic: string,
    subtopic?: string,
): string {
	try {
    const topicData: Topic = data[section].topics[topic];
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
	try {
    return data[section].topics[topic];
	} catch {
		return nullTopic;
	}
}

export function getSection(data: Data, section: string): Section {
	try {
    return data[section];
	} catch {
		return nullSection;
	}
}
