import { Section } from "@/lib/dataUtils";
import clsx from "clsx";

export default function SectionTree({
	section,

	hrefPrefix="",

	className="",
}: Readonly<{
	section: Section

	hrefPrefix?: string

	className?: string
}>) {
	return (
		<div className={clsx("h-full bg-base-200", className)}>
			<ul className="menu bg-base-200 w-56">
				<li>
					<h1 className="menu-title">{section.name}</h1>
					<ul>
						{Object.entries(section.topics).map(
							([name, topic], idx) => (
							<li key={idx}>
								<a href={`${hrefPrefix}${name}`}>{topic.name}</a>
							</li>
							),
						)}
					</ul>
				</li>
			</ul>
		</div>
	);
}
