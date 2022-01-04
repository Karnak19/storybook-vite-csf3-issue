import React from "react";

import { Button3 } from "./Button3";

export default {
  title: "Example/Button2",
  component: Button3,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button3 {...args} />;

export const Flat = Template.bind({});
Flat.args = {
  children: "Button",
};
