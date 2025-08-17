// Section/Topic/(Content | SubTopic/Content)
export type Data = Record<string, Section>;
export type Section = Record<string, Topic>;
export interface Topic {
	content: string,
	subtopics: Record<string, string>,
};
export interface Subtopic {
	name: string,
	content: string,
};

export function getContent(data: Data, section: string, topic: string, subtopic?: string): string {
	const topicData: Topic = data[section][topic];
	if (subtopic !== undefined) {
		return topicData.subtopics[subtopic];
	} else {
		return topicData.content;
	}
}

export function getTopic(data: Data, section: string, topic: string): Topic {
	return data[section][topic];
}

export function getSection(data: Data, section: string): Section {
	return data[section];
}
