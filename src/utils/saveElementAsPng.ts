import { toPng } from "html-to-image";

export const saveElementAsPng = async (element: HTMLElement, fileName: string) => {
  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 3,
      cacheBust: true,
    });
    const link = document.createElement("a");
    link.download = `${fileName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error("Image saving failed", err);
    throw err;
  }
};
