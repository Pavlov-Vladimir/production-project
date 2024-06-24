import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
    // eslint-disable-next-line react/display-name
    (StoryComponent: Story) => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );