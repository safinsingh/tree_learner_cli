export const EXPLAINER_EXPRESSIONS = [
	"It seems like",
	"Apparently,",
	"From what I gather,",
	"It appears that",
	"As I understand it,",
	"Evidently,",
	"Interestingly,",
	"Surprisingly,",
	"I found out that",
	"I learned that",
	"It's clear that",
	"I noticed that",
	"I realized that",
	"It turns out",
	"Research shows that",
];

export const UNDERSTANDING_EXPRESSIONS = [
	"Cool, makes sense.",
	"Got it.",
	"I see.",
	"That explains a lot.",
	"Now it all adds up.",
	"I understand now.",
	"Ah, that clarifies things.",
	"Everything is clicking into place.",
	"That makes more sense now.",
	"I get the picture.",
	"Understood.",
	"Now I know.",
	"That's interesting.",
	"Good to know.",
	"Learned something new today.",
];

export const INTRO_EXPRESSIONS = [
	"Hmm, I'm exploring",
	"Today, I'm looking into",
	"I've decided to learn about",
	"Let me delve into",
	"I'm curious about",
	"Let's take a closer look at",
	"I've been thinking about",
	"Time to explore",
	"Let's investigate",
	"I'm starting to study",
	"I'm eager to learn about",
	"I've been wondering about",
	"Setting out to understand",
	"Embarking on a journey through",
	"I'm delving into",
];

export const CURIOSITY_EXPRESSIONS = [
	"Hmm, I'm now curious about",
	"Woah, what's",
	"I wonder about",
	"This leads me to",
	"I want to find out more about",
	"What can I learn about",
	"Perhaps I should explore",
	"I'm intrigued by",
	"Let's see what I can find on",
	"I'm eager to discover",
	"My curiosity is piqued by",
	"I'm drawn to",
	"I feel compelled to learn about",
	"It's time to uncover",
	"I'm interested in exploring",
];

export type ExpressionCollection = {
	curiosityExpressions: string[];
	understandingExpressions: string[];
	explainerExpressions: string[];
};

export const defaultExpressions: ExpressionCollection = {
	curiosityExpressions: CURIOSITY_EXPRESSIONS,
	understandingExpressions: UNDERSTANDING_EXPRESSIONS,
	explainerExpressions: EXPLAINER_EXPRESSIONS,
};
