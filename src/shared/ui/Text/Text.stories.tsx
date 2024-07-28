import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem',
    text: 'Text lorem description',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text lorem description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem',
    text: 'Text lorem description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem',
    text: 'Text lorem description',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title lorem',
    text: 'Text lorem description',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];