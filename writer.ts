import { type FormattedMindTree } from "./semanticFormatter";

export class ConsoleMindTreeWriter {
	constructor(private tree: FormattedMindTree) {}

	write(): void {
		this.writeRecursive(this.tree, 0);
	}

	private writeRecursive(tree: FormattedMindTree, depth: number): void {
		const indent = "    ".repeat(depth);

		for (const line of tree.current) {
			console.log(`${indent}${line}`);
		}

		if (tree.sections) {
			for (const section of tree.sections) {
				this.writeRecursive(section, depth + 1);
				console.log();
			}
		}
	}
}
