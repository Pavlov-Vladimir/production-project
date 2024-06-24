import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];