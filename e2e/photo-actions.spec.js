import { test, expect } from '@playwright/test';

test.describe('photo detail actions', () => {
    test('Back goes home when the photo was opened from a shared link', async ({ page }) => {
        await page.goto('/photos/5');

        await page.getByRole('button', { name: 'Go back' }).click();
        await expect(page).toHaveURL(/\/$/);
    });

    test('Share copies the page URL to the clipboard', async ({ page, context }) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        await page.goto('/photos/42');

        await page.getByRole('button', { name: 'Share' }).click();
        await expect(page.getByRole('button', { name: 'Link copied' })).toBeVisible();

        const copied = await page.evaluate(() => navigator.clipboard.readText());
        expect(copied).toBe(page.url());
    });
});
