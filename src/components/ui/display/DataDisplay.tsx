import { Data } from "@/lib/dataUtils";
import clsx from "clsx";

export default function DataDisplay({
    data,

    className = "",
}: Readonly<{
	data: Data;
    className?: string;
}>) {
    return (
        <div className={clsx("flex flex-row h-full", className)}>
            <div className="grow overflow-scroll">
                <div className="prose p-4 w-full max-w-none">
                    <h1>{data.name}</h1>

                    {data.description}
                </div>
            </div>
        </div>
    );
}
