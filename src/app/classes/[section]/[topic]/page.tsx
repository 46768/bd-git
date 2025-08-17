export default async function Classes({
	params,
}: Readonly<{
	params: Promise<{ section: string, topic: string}>
}>) {
	const { section, topic } = await params;

	return (
		<div>
			<main>
				<p>{section}</p>
				<p>{topic}</p>
			</main>
		</div>
	);
}
