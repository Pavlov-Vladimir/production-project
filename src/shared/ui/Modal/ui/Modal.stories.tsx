import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Light. ' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, numquam.'
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Dark. ' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, numquam.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];