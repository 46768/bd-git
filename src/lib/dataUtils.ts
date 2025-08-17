// Section/Topic/(Content | SubTopic/Content)
export type Data = Record<string, Section>;
export interface Section {
    name: string;
    topics: Record<string, Topic>;
}
export interface Topic {
    name: string;
    content: string;
    subtopics: Record<string, Subtopic>;
}
export interface Subtopic {
    name: string;
    content: string;
}

export function getContent(
    data: Data,
    section: string,
    topic: string,
    subtopic?: string,
): string {
    const topicData: Topic = data[section].topics[topic];
    if (subtopic !== undefined) {
        return topicData.subtopics[subtopic].content;
    } else {
        return topicData.content;
    }
}

export function getTopic(data: Data, section: string, topic: string): Topic {
    return data[section].topics[topic];
}

export function getSection(data: Data, section: string): Section {
    return data[section];
}
