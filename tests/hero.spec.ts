import { test, expect } from '@playwright/test'

test.describe('hero section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the game title', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toHaveText('The Night Borrower')
  })

  test('renders the tagline', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByText('Something watches while you sleep.')).toBeVisible()
  })

  test('renders the primary CTA button', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('link', { name: 'Wishlist on Steam' })).toBeVisible()
  })

  test('renders the secondary CTA button', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('link', { name: 'Watch Teaser' })).toBeVisible()
  })

  test('primary CTA links to wishlist section', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    const cta = hero.getByRole('link', { name: 'Wishlist on Steam' })
    await expect(cta).toHaveAttribute('href', '#wishlist')
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(hero.getByRole('link', { name: 'Wishlist on Steam' })).toBeVisible()
    await expect(hero.getByRole('link', { name: 'Watch Teaser' })).toBeVisible()
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(hero.getByRole('link', { name: 'Wishlist on Steam' })).toBeVisible()
    await expect(hero.getByRole('link', { name: 'Watch Teaser' })).toBeVisible()
  })
})
