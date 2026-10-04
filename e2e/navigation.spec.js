import { test, expect } from '@playwright/test';

// Grid thumbnails: links to a photo that contain an image.
// (The featured banner's title also links to a photo, but has no image inside.)
const gridPhotos = (page) => page.locator('main a[href^="/photos/"]:has(img)');

test.describe('browsing', () => {
    test('loads more photos, opens one, then goes back', async ({ page }) => {
        await page.goto('/');
        await expect(gridPhotos(page)).toHaveCount(20);

        await page.getByRole('button', { name: 'Load more' }).click();
        await expect(gridPhotos(page)).toHaveCount(40);

        await gridPhotos(page).first().click();
        await expect(page).toHaveURL(/\/photos\/\d+$/);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

        await page.getByRole('button', { name: 'Go back' }).click();
        await expect(page).toHaveURL(/\/$/);
    });

    test('navbar links change the page and the browser back button works', async ({ page }) => {
        await page.goto('/');
        const nav = page.getByRole('navigation', { name: 'Main navigation' });

        await nav.getByRole('link', { name: 'Albums' }).click();
        await expect(page).toHaveURL(/\/albums$/);
        await expect(page.getByRole('heading', { name: 'Albums', level: 1 })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Albums' })).toHaveClass(/bg-accent/);

        await page.goBack();
        await expect(page).toHaveURL(/\/$/);
    });

    test('goes from an album to its owner and back to the album', async ({ page }) => {
        await page.goto('/albums/3');

        await page.getByRole('link', { name: 'Leanne Graham' }).click();
        await expect(page).toHaveURL(/\/users\/1$/);
        await expect(page.getByText('Albums · 10')).toBeVisible();

        await page.getByRole('link', { name: /omnis laborum odio/ }).click();
        await expect(page).toHaveURL(/\/albums\/3$/);
    });
});
