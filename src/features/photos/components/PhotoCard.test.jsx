import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PhotoCard from './PhotoCard';

const photo = { id: 7, title: 'a test photo', albumId: 1 };

describe('PhotoCard', () => {
    it('shows the photo image with its title as alt text', () => {
        render(
            <MemoryRouter>
                <PhotoCard photo={photo} />
            </MemoryRouter>
        );

        const image = screen.getByAltText('a test photo');
        expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/photo-7/400/300');
    });

    it('links to the photo detail page', () => {
        render(
            <MemoryRouter>
                <PhotoCard photo={photo} />
            </MemoryRouter>
        );

        expect(screen.getByRole('link')).toHaveAttribute('href', '/photos/7');
    });
});