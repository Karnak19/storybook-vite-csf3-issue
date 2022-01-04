import { Button3 } from "./Button3";

export default {
  // title: "Example/Button3",
  component: Button3,
  args: {
    children: "Button",
  },
  parameters: {
    layout: "centered",
  },
};

export const Flat = {
  args: {
    className: "bg-secondary",
  },
};

export const Outlined = {
  args: {
    className: "border-2 border-primary",
  },
};
