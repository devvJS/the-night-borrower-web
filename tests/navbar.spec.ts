import { test, expect } from '@playwright/test'

test.describe('navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('displays logo link', async ({ page }) => {
    const logo = page.getByRole('link', { name: 'The Night Borrower — home' })
    await expect(logo).toBeVisible()
  })

  test('shows section links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const links = ['About', 'Features', 'Characters', 'Screenshots', 'Devlog', 'Wishlist']
    const nav = page.getByRole('navigation', { name: 'Main navigation' })

    for (const label of links) {
      await expect(nav.getByRole('link', { name: label })).toBeVisible()
    }
  })

  test('hides section links on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(nav.getByRole('link', { name: 'About' })).not.toBeVisible()
  })

  test('mobile menu toggles open and closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    const toggle = nav.getByRole('button', { name: 'Open menu' })

    await expect(toggle).toBeVisible()
    await toggle.click()

    // Menu should now be open with links visible
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(nav.getByRole('button', { name: 'Close menu' })).toBeVisible()

    // Close the menu
    await nav.getByRole('button', { name: 'Close menu' }).click()
    await expect(nav.getByRole('link', { name: 'About' })).not.toBeVisible()
  })

  test('mobile menu closes when a link is clicked', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await nav.getByRole('button', { name: 'Open menu' }).click()
    await nav.getByRole('link', { name: 'About' }).click()

    await expect(nav.getByRole('link', { name: 'About' })).not.toBeVisible()
  })

  test('navbar is sticky at top', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' })

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 800))
    await page.waitForTimeout(300)

    await expect(nav).toBeVisible()
  })
})
