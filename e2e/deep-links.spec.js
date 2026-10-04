import { test, expect } from '@playwright/test';

// JSONPlaceholder data is static, so these real titles and names never change.

test.describe('deep links', () => {
    test('opens a photo directly from its URL', async ({ page }) => {
        await page.goto('/photos/42');

        await expect(page.getByRole('heading', { name: 'voluptatibus a autem molestias voluptas architecto culpa' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'quidem molestiae enim' })).toHaveAttribute('href', '/albums/1');
        await expect(page.getByRole('link', { name: 'Leanne Graham' })).toHaveAttribute('href', '/users/1');
    });

    test('still works after a page reload', async ({ page }) => {
        await page.goto('/photos/42');
        await page.reload();

        await expect(page.getByRole('heading', { name: 'voluptatibus a autem molestias voluptas architecto culpa' })).toBeVisible();
    });

    test('opens an album directly from its URL', async ({ page }) => {
        await page.goto('/albums/3');

        await expect(page.getByRole('heading', { name: 'omnis laborum odio' })).toBeVisible();
        await expect(page.getByText('50 photos')).toBeVisible();
    });

    test('opens a user directly from its URL', async ({ page }) => {
        await page.goto('/users/1');

        await expect(page.getByRole('heading', { name: 'Leanne Graham' })).toBeVisible();
        await expect(page.getByText('Albums · 10')).toBeVisible();
    });
});

test.describe('not found', () => {
    test('shows the not found page for an unknown URL', async ({ page }) => {
        await page.goto('/this-page-does-not-exist');

        await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();
    });

    test('shows the not found page for a photo that does not exist', async ({ page }) => {
        await page.goto('/photos/99999');

        await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();

        await page.getByRole('link', { name: 'Back to photos' }).click();
        await expect(page).toHaveURL(/\/$/);
    });
});
