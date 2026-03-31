import { test, expect } from '@playwright/test'

test.describe('footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=live')
  })

  test('renders the wordmark', async ({ page }) => {
    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByText('The Night Borrower', { exact: true })).toBeAttached()
  })

  test('renders social icons', async ({ page }) => {
    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeAttached()
    await expect(footer.getByRole('link', { name: 'Twitter' })).toBeAttached()
    await expect(footer.getByRole('link', { name: 'Github' })).toBeAttached()
  })

  test('renders the closing line', async ({ page }) => {
    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByText('Try to remember.')).toBeAttached()
  })

  test('renders the copyright', async ({ page }) => {
    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByText('© 2026 The Night Borrower. All rights reserved.')).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByText('Try to remember.')).toBeAttached()
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeAttached()
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer.getByText('Try to remember.')).toBeAttached()
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeAttached()
  })
})
