"use client";

import Link from "next/link";
import { Topic } from "@/lib/dataUtils";
import clsx from "clsx";
import { useState } from "react";

export default function TopicDisplay({
    topic,

	className=""
}: Readonly<{
    topic: Topic,
	
	className?: string,
}>) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(true);

    return (
        <div className={clsx("flex flex-row h-full", className)}>
			<div className="grow">
            <div className="prose p-4 w-full max-w-none">
				<h1>{topic.name}</h1>

				{topic.content}

				{Object.entries(topic.subtopics).map(
					([name, subtopic], idx) => (
						<div key={idx} id={name}>
							<h2>{name}</h2>
							<p className="wrap-anywhere">{subtopic.content}</p>
						</div>
					))
				}
			</div>
			</div>

            <div className="flex flex-row items-center">
                <button
                    className="btn"
                    onClick={() => {
                        setMenuOpen(!isMenuOpen);
                    }}
                >
                    {isMenuOpen ? ">" : "<"}
                </button>
                <div
                    className={clsx("bg-base-200 h-full transition", {
                        "hidden invisible": !isMenuOpen,
                    })}
                >
                    <ul className="menu bg-base-200 w-56">
                        <li>
                            <h1 className="menu-title">{topic.name}</h1>
                            <ul>
                                {Object.entries(topic.subtopics).map(
                                    ([name], idx) => (
                                        <li key={idx}>
                                            <Link href={`#${name}`}>{name}</Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
