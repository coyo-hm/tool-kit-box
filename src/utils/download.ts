import { toPng } from "html-to-image";

export const downloadImage = (element: HTMLDivElement | null) => {
  if (!element) return;
  toPng(element)
    .then(dataUrl => {
      const link = document.createElement("a");
      link.download = "star-rating.png";
      link.href = dataUrl;
      link.click();
    })
    .catch(err => console.error("Failed to download image", err));
};
