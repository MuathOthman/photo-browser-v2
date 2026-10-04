import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchData } from './fetcher';

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('fetchData', () => {
    it('returns the JSON when the response is OK', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            status: 200,
            json: () => Promise.resolve({ id: 1, title: 'test photo' }),
        }));

        const data = await fetchData('https://example.com/photos/1');

        expect(data).toEqual({ id: 1, title: 'test photo' });
    });

    it('throws an error with the status code on 404', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false,
            status: 404,
        }));

        await expect(fetchData('https://example.com/photos/99999'))
            .rejects.toMatchObject({ status: 404 });
    });
});