import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Clear Inverted',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
    children: 'Outline Inverted',
    theme: ButtonTheme.OUTLINE_INVERTED,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Background Inverted',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Size M',
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Size L',
    size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Size XL',
    size: ButtonSize.XL,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: 'X',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
