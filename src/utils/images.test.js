import { describe, it, expect } from 'vitest';
import { thumbUrl, albumCoverUrl } from './images';

describe('thumbUrl', () => {
    it('builds a seeded picsum URL from the photo id', () => {
        expect(thumbUrl(42)).toBe('https://picsum.photos/seed/photo-42/400/300');
    });
});

describe('albumCoverUrl', () => {
    it('uses 400x300 by default', () => {
        expect(albumCoverUrl(3)).toBe('https://picsum.photos/seed/album-3/400/300');
    });

    it('uses the given width and height', () => {
        expect(albumCoverUrl(3, 1600, 800)).toBe('https://picsum.photos/seed/album-3/1600/800');
    });
});