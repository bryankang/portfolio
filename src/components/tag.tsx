import { FC } from "react";

export const Tag: FC<{ tag: string }> = ({ tag }) => {
  return (
    <div
      className={`inline-flex h-6 items-center rounded-full border-[1px] border-white border-opacity-10 bg-gray-900 px-2 text-[11px] font-medium text-gray-400`}
    >
      {getTagName(tag)}
    </div>
  );
};

function getTagName(tag: string) {
  if (tag === "engineering") {
    return "Engineering";
  } else if (tag === "design") {
    return "Design/UX";
  }
  throw new Error(`Invalid tag: ${tag}`);
}
