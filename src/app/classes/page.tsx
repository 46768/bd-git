import DataDisplay from "@/components/ui/display/DataDisplay";
import DataTree from "@/components/ui/display/DataTree";
import classesData from "@/data/classes";
import Link from "next/link";

export default async function Classes() {
    return (
        <main className="h-full flex flex-col">
            <div className="breadcrumbs text-sm bg-base-200 p-4">
                <ul>
                    <li>
                        <Link href="/classes">Classes</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row h-full">
                <DataTree
                    data={classesData}
                    className="menu-xl pr-10"
                    hrefPrefix="/classes"
                />

                <DataDisplay
                    data={classesData}
                    className="grow"
                    hrefPrefix="/classes"
                />
            </div>
        </main>
    );
}
