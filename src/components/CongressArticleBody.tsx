import type { CongressBlock } from "@/content/congressDocuments";

export default function CongressArticleBody({ blocks }: { blocks: CongressBlock[] }) {
  return <div className="font-serif-editorial text-lg text-foreground/90 leading-relaxed space-y-5">
    {blocks.map((block, index) => {
      if (block.kind === "list") {
        const List = block.ordered ? "ol" : "ul";
        return <List key={index} className={`${block.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2`}>
          {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
        </List>;
      }
      return block.kind === "heading"
        ? <h2 key={index} className="font-display text-2xl text-foreground pt-5">{block.text}</h2>
        : <p key={index}>{block.text}</p>;
    })}
  </div>;
}