export async function fulfilledPromises<T>(arr: Promise<T>[]): Promise<T[]> {
	const promises = await Promise.allSettled(arr);
	return promises
		.filter((res) => res.status === "fulfilled")
		.map((res) => res.value);
}
