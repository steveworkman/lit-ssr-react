import dynamic from "next/dynamic";

export const SimpleButtonClient: any = dynamic(
  async () => {
    const component = await import("./wrapped-simple-button");
    return component.SimpleButton;
  },
  { ssr: false }
);
