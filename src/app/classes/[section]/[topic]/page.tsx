export default async function Classes({
    params,
}: Readonly<{
    params: Promise<{ section: string; topic: string }>;
}>) {
    const { section, topic } = await params;

    return (
        <main>
            <p>{section}</p>
            <p>{topic}</p>
        </main>
    );
}
