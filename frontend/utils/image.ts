import { Article } from "~/types";

type Size = "large" | "medium" | "wide" | "tall";

export const getImageSize = ({
  width,
  height,
}: Article["image"]): Size | undefined => {
  const aspectRatio = width / height;

  if (width > 500) return "large";
  if (width > 410) return "medium";
  if (aspectRatio > 1.5) return "wide";
  if (aspectRatio < 0.5) return "tall";

  return undefined;
};
