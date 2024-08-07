import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Loading } from "features/AuthByUsername/ui/LoginForm/LoginForm.stories";

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {};
LightAuthorized.decorators = [StoreDecorator({
    user: { authData: {} }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
];