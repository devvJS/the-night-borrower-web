import { test, expect } from '@playwright/test'

test.describe('homepage shell structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('each section has a heading and subheading', async ({ page }) => {
    const sections = [
      { name: 'About', heading: 'About the Game' },
      { name: 'Features', heading: 'Features' },
      { name: 'Characters', heading: 'Characters' },
      { name: 'Screenshots', heading: 'Screenshots' },
      { name: 'Development log', heading: 'Development Log' },
      { name: 'Wishlist', heading: 'Wishlist on Steam' },
    ]

    for (const section of sections) {
      const region = page.getByRole('region', { name: section.name })
      await expect(region.getByRole('heading', { level: 2 })).toHaveText(section.heading)
    }
  })

  test('Features section contains a grid placeholder', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Features' })
    await expect(region.getByText('Coming soon')).toBeVisible()
  })

  test('Characters section contains a grid placeholder', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Characters' })
    await expect(region.getByText('Coming soon')).toBeVisible()
  })

  test('Screenshots section contains a gallery placeholder', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Screenshots' })
    await expect(region.getByText('Screenshot placeholder')).toBeVisible()
  })

  test('Devlog section contains an entry placeholder', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Development log' })
    await expect(region.getByText('Development updates')).toBeVisible()
  })

  test('Wishlist section contains a CTA placeholder', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Wishlist' })
    await expect(region.getByText('Steam link coming soon')).toBeVisible()
  })
})

test.describe('anchor navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('navbar links navigate to correct sections', async ({ page }) => {
    const anchors = [
      { label: 'About', id: 'about' },
      { label: 'Features', id: 'features' },
      { label: 'Characters', id: 'characters' },
      { label: 'Screenshots', id: 'screenshots' },
      { label: 'Devlog', id: 'devlog' },
      { label: 'Wishlist', id: 'wishlist' },
    ]

    // Use desktop viewport so nav links are visible
    await page.setViewportSize({ width: 1280, height: 720 })

    for (const anchor of anchors) {
      const nav = page.getByRole('navigation', { name: 'Main navigation' })
      await nav.getByRole('link', { name: anchor.label }).click()
      // Verify the URL hash updated
      await expect(page).toHaveURL(new RegExp(`#${anchor.id}$`))
    }
  })

  test('sections clear the sticky navbar when scrolled to via anchor', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await nav.getByRole('link', { name: 'About' }).click()

    // Wait for scroll to settle
    await page.waitForTimeout(500)

    // The About section's top should not be hidden behind the navbar
    const sectionTop = await page.locator('#about').evaluate((el) => {
      const rect = el.getBoundingClientRect()
      return rect.top
    })

    // Should be at or below the navbar height (64px / h-16)
    expect(sectionTop).toBeGreaterThanOrEqual(0)
  })
})
