import { Meta, StoryObj } from "@storybook/react";

import { Scrollbar } from "../Scrollbar";

import styles from "./Scrollbar.stories.module.css";

const loremIpsum = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>

    <p>
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
      justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
      justo.
    </p>

    <p>
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus.
    </p>

    <p>
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
    </p>
  </>
);

export default {
  title: "Components/Scrollbar",
  component: Scrollbar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    visibility: {
      control: "select",
      options: ["always", "hover", "never"],
    },
    viewportRef: { control: false },
    classNames: { control: false },
  },
  args: {
    h: 200,
    w: 400,
    visibility: "hover",
  },
} satisfies Meta<typeof Scrollbar>;

type Story = StoryObj<typeof Scrollbar>;

export const Vertical: Story = {
  render: (args) => (
    <Scrollbar {...args}>
      <div>{loremIpsum}</div>
    </Scrollbar>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <Scrollbar {...args}>
      <div style={{ width: 600 }}>{loremIpsum}</div>
    </Scrollbar>
  ),
};

export const Customized: Story = {
  render: (args) => (
    <Scrollbar {...args}>
      <div style={{ width: 600 }}>{loremIpsum}</div>
    </Scrollbar>
  ),
  args: {
    visibility: "always",
    classNames: {
      root: styles.root,
      verticalTrack: styles.customTrack,
      horizontalTrack: styles.customTrack,
      horizontalThumb: styles.horizontalThumb,
      verticalThumb: styles.verticalThumb,
    },
  },
};
