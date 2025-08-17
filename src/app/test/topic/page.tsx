"use client";

import TopicDisplay from "@/components/ui/display/TopicDisplay";

export default function Test() {
    return (
        <main className="h-full">
            <TopicDisplay
                topic={{
                    name: "Test",
                    content: "Test",
                    subtopics: {
                        Sub1: {
                            name: "Sub1",
                            content: "Sub1",
                        },
                        Sub2: {
                            name: "Sub2",
                            content: "Sub1",
                        },
                        Sub3: {
                            name: "Sub3",
                            content: "Sub1",
                        },
                        Sub4: {
                            name: "Sub4",
                            content: "Sub1",
                        },
                    },
                }}
            />
        </main>
    );
}
