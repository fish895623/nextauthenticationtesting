import type { Meta, StoryObj } from "@storybook/react";
import Headers from "../components/Headers";

const meta = {
  title: "hellotest",
  component: Headers,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        excludeDecorators: true,
      },
      hidden: true,
    },
  },
} satisfies Meta<typeof Headers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
