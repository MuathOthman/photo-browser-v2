import { describe, it, expect } from 'vitest';
import { initials } from './text';

describe('initials', () => {
    it('takes the first letter of the first and last name', () => {
        expect(initials('Muath Othman')).toBe('MO');
    });

    it('skips titles like "Mr."', () => {
        expect(initials('Mr. Mikko Räsänen')).toBe('MR');
    });
});
