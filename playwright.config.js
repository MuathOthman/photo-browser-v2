import { defineConfig, devices } from '@playwright/test';

const LOCAL_URL = 'http://localhost:4173';
const baseURL = process.env.E2E_BASE_URL ?? LOCAL_URL;

export default defineConfig({
    testDir: './e2e',
    timeout: 30_000,
    expect: { timeout: 10_000 },
    retries: 1,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],

    // Only start a local server when testing locally
    webServer: process.env.E2E_BASE_URL
        ? undefined
        : {
            command: 'npm run build && npm run preview -- --port 4173 --strictPort',
            url: LOCAL_URL,
            reuseExistingServer: true,
            timeout: 120_000,
        },
});