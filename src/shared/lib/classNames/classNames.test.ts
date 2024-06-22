import {classNames} from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with only additional class', () => {
        const expected = ' class1 class2';
        expect(classNames('', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with all params', () => {
        const expected = 'someClass class1 class2 hovered active';
        expect(classNames(
            'someClass',
            {hovered: true, active: true},
            ['class1', 'class2'])
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 active';
        expect(classNames(
            'someClass',
            {hovered: false, active: true},
            ['class1', 'class2'])
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            {hovered: true, active: undefined},
            ['class1', 'class2'])
        ).toBe(expected);
    });
});