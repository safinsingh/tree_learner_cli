import { type MindTree } from "./mindTree";
import {
	defaultExpressions,
	ExpressionCollection,
	INTRO_EXPRESSIONS,
} from "./expressions";

function randomElement<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

export type FormattedMindTreeNode = {
	curiosityExpression: string;
	topic: string;
	explainerExpression: string;
	summary: string;
};

export type FormattedMindTree =
	| (FormattedMindTreeNode & { sections: FormattedMindTree[] })
	| (FormattedMindTreeNode & { understandingExpression: string });

function formatMindTree1(
	node: MindTree,
	{
		curiosityExpressions,
		explainerExpressions,
		understandingExpressions,
	}: ExpressionCollection = defaultExpressions
): FormattedMindTree {
	const formattedNode: FormattedMindTreeNode = {
		curiosityExpression: randomElement(curiosityExpressions),
		topic: node.topic,
		explainerExpression: randomElement(explainerExpressions),
		summary: node.summary,
	};

	if (node.subTopics && node.subTopics.length > 0) {
		return {
			...formattedNode,
			sections: node.subTopics.map((subTopic) => formatMindTree1(subTopic)),
		};
	} else {
		return {
			...formattedNode,
			understandingExpression: randomElement(understandingExpressions),
		};
	}
}

export function formatMindTree(
	map: MindTree,
	introExpressions = INTRO_EXPRESSIONS
): FormattedMindTree {
	let tmpExpressionCollection = {
		...defaultExpressions,
		curiosityExpressions: introExpressions,
	};
	return formatMindTree1(map, tmpExpressionCollection);
}
