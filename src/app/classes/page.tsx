import DataTree from "@/components/ui/display/DataTree";
import classesData from "@/data/classes";
import Link from "next/link";

export default async function Classes({
}: Readonly<{
}>) {
    return (
        <main className="h-full">
			<div className="breadcrumbs text-sm bg-base-200 p-4">
			<ul>
				<li><Link href="/classes">Classes</Link></li>
			</ul>
			</div>

			<DataTree data={classesData} className="menu-xl" hrefPrefix={`/classes/`}/>
        </main>
    );
}
