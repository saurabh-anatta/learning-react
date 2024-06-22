import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  textSize: number;
}
function ExpandableText({ children, textSize }: Props) {
  const [isExpanded, updateExpand] = useState(false);
  const toogleExpand = () => {
    updateExpand(!isExpanded);
  };
  return (
    <div>
      {isExpanded ? children : children.substring(0, textSize) + "..."}
      <button onClick={() => toogleExpand()}>
        {isExpanded ? "less" : "more"}{" "}
      </button>
    </div>
  );
}

export default ExpandableText;
