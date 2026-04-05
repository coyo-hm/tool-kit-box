import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "40px",
  padding: "20px",
  flexWrap: "wrap",
});

export const optionsPanel = style({
  flex: "1",
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const previewPanel = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "12px",
  padding: "40px",
});

export const qrWrapper = style({
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "8px",
});
