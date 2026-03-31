import { test, expect } from '@playwright/test'

test.describe('smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=live')
  })

  test('app loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle('The Night Borrower')
  })

  test('navbar is visible', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(nav).toBeVisible()
    await expect(nav).toContainText('The Night Borrower')
  })

  test('hero section renders', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero).toBeVisible()
    await expect(hero.getByRole('heading', { level: 1 })).toHaveText('The Night Borrower')
  })

  test('all major sections mount', async ({ page }) => {
    const sections = [
      { name: 'About' },
      { name: 'Features' },
      { name: 'Characters' },
      { name: 'Screenshots' },
      { name: 'Development log' },
      { name: 'Wishlist' },
    ]

    for (const section of sections) {
      await expect(page.getByRole('region', { name: section.name })).toBeAttached()
    }
  })

  test('footer is visible', async ({ page }) => {
    const footer = page.getByRole('contentinfo', { name: 'Site footer' })
    await expect(footer).toBeAttached()
  })
})
