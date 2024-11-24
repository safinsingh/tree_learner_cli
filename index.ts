import { explore } from "./mindTree";
import { formatMindTree } from "./semanticFormatter";
import { ConsoleMindTreeWriter } from "./writer";

const options = {
	topic: "Topology",
	depth: 3,
	breadth: 3,
};

const mindTree = await explore(options);
const formattedMindTree = formatMindTree(mindTree);
const writer = new ConsoleMindTreeWriter(formattedMindTree);

writer.write();
