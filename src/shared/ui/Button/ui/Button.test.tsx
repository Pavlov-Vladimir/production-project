import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui/Button";

describe('Button', () => {
    const text: string = 'TEST';

    test('to be in the document', () => {
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('button theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>{text}</Button>);
        expect(screen.getByText(text)).toHaveClass('clear');
    });
});