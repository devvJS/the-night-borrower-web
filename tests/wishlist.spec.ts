import { test, expect } from '@playwright/test'

test.describe('wishlist section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('section renders', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section).toBeAttached()
  })

  test('renders the heading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByRole('heading', { level: 2 })).toHaveText('Don\u2019t Look Away')
  })

  test('renders the subheading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByText('It isn\u2019t finished yet. But it will find you when it is.')).toBeAttached()
  })

  test('renders the button with correct text', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByRole('button', { name: 'The path is not yet open.' })).toBeAttached()
  })

  test('button is disabled', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByRole('button')).toBeDisabled()
  })

  test('glyph watermark is present', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByTestId('glyph-watermark')).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('button')).toBeAttached()
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const section = page.getByRole('region', { name: 'Wishlist' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('button')).toBeAttached()
  })
})
