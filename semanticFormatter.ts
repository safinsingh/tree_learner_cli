import { type MindTree } from "./mindTree";
import {
	CURIOSITY_EXPRESSIONS,
	EXPLAINER_EXPRESSIONS,
	INTRO_EXPRESSIONS,
	UNDERSTANDING_EXPRESSIONS,
} from "./expressions";

function randomElement<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

export type FormattedMindTree = {
	current: string[];
	sections?: FormattedMindTree[];
};

function formatMindTree1(
	node: MindTree,
	expressions: string[]
): FormattedMindTree {
	const ret: FormattedMindTree = {
		current: [
			`${randomElement(expressions)} ${node.topic}`,
			`${randomElement(EXPLAINER_EXPRESSIONS)} ${node.summary}`,
		],
	};

	if (node.subTopics) {
		ret.sections = node.subTopics.map((subTopic) =>
			formatMindTree1(subTopic, CURIOSITY_EXPRESSIONS)
		);
	} else {
		ret.current.push(randomElement(UNDERSTANDING_EXPRESSIONS));
	}

	return ret;
}

export function formatMindTree(map: MindTree): FormattedMindTree {
	return formatMindTree1(map, INTRO_EXPRESSIONS);
}
