import * as React from "react";
import { createComponent } from "@lit-labs/react";
import SimpleButtonElement from "./simple-button";
export const SimpleButton = createComponent({
  react: React,
  tagName: "simple-button",
  elementClass: SimpleButtonElement,
  events: { click: "click" },
});
