import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";

interface Props {
  onClick: () => void;
}
export default function LikeButton({ onClick }: Props) {
  const [status, setStatus] = useState(true);
  function toogle() {
    setStatus(!status);
    onClick();
  }
  if (status)
    return (
      <div>
        <FcLike onClick={() => toogle()} />
      </div>
    );

  return (
    <div>
      <FcLikePlaceholder onClick={() => toogle()} />
    </div>
  );
}
