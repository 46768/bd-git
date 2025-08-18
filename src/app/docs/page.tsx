import DataTree from "@/components/ui/display/DataTree";
import classesData from "@/data/docs";
import Link from "next/link";

export default async function Docs({
}: Readonly<{
}>) {
    return (
        <main className="h-full">
			<div className="breadcrumbs text-sm bg-base-200 p-4">
			<ul>
				<li><Link href="/docs">Docs</Link></li>
			</ul>
			</div>
			<DataTree data={classesData} className="menu-xl" hrefPrefix={`/docs/`}/>
        </main>
    );
}
