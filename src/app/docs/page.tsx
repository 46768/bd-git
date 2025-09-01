import DataDisplay from "@/components/ui/display/DataDisplay";
import DataTree from "@/components/ui/display/DataTree";
import classesData from "@/data/docs";
import Link from "next/link";

export default async function Docs() {
    return (
        <main className="h-full flex flex-col">
            <div className="breadcrumbs text-sm bg-base-200 p-4">
                <ul>
                    <li>
                        <Link href="/docs">Docs</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row h-full min-h-0">
                <DataTree
                    data={classesData}
                    className="menu-xl pr-10"
                    hrefPrefix={`/docs`}
                />

                <DataDisplay
                    data={classesData}
                    className="grow"
                    hrefPrefix={`/docs`}
                />
            </div>
        </main>
    );
}
