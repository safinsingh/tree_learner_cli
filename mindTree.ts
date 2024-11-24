import wiki from "wikipedia";
import { fulfilledPromises } from "./util";

export type MindTree = {
	topic: string;
	summary: string;
	subTopics?: MindTree[];
};

const SENTENCE_REGEX = new RegExp(
	`(?:[^.!?]*?(?<!\\b\\w{1,3})\\.|[^.!?]*?[!?])(?:["')\\]]|\\s|$)`,
	"g"
);
function getFirstNSentences(paragraph: string, n: number): string {
	const matches = paragraph.match(SENTENCE_REGEX);
	return matches?.slice(0, n).join("").trim() ?? paragraph.trim();
}

export type ExploreOptions = {
	topic: string;
	depth: number;
	breadth: number;
};
export async function explore({
	topic,
	depth,
	breadth,
}: ExploreOptions): Promise<MindTree> {
	const page = await wiki.page(topic);
	const pageIntro = getFirstNSentences(await page.intro(), 3);
	const mindNode = { topic, summary: pageIntro };

	if (depth === 0) {
		return mindNode;
	} else {
		const pageLinks = await page
			.links()
			.then((arr) => arr.sort(() => Math.random() - 0.5).slice(0, breadth));

		const subExplorations = await fulfilledPromises(
			pageLinks.map((link) =>
				explore({ topic: link, depth: depth - 1, breadth })
			)
		);

		return { ...mindNode, subTopics: subExplorations };
	}
}
