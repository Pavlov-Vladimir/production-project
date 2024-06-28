import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { userEvent } from "@storybook/testing-library";

describe('Counter', () => {
    test('should show initial value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('should show increased value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        const btn = screen.getByTestId('increment-btn');
        userEvent.click(btn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('should show decreased value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        const btn = screen.getByTestId('decrement-btn');
        userEvent.click(btn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});