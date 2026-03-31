import { test, expect } from '@playwright/test'

test.describe('features section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=live')
  })

  test('renders the section heading', async ({ page }) => {
    const features = page.getByRole('region', { name: 'Features' })
    await expect(features.getByRole('heading', { level: 2 })).toHaveText('Features')
  })

  test('renders the subheading', async ({ page }) => {
    const features = page.getByRole('region', { name: 'Features' })
    await expect(features.getByText('What awaits you inside')).toBeAttached()
  })

  test('renders all four feature cards', async ({ page }) => {
    const features = page.getByRole('region', { name: 'Features' })
    const cards = features.getByRole('article')
    await expect(cards).toHaveCount(4)

    await expect(features.getByText('Observe Subtle Changes')).toBeAttached()
    await expect(features.getByText('Record What Matters')).toBeAttached()
    await expect(features.getByText('Maintain the Light')).toBeAttached()
    await expect(features.getByText('Survive the Night')).toBeAttached()
  })

  test('each card has a description', async ({ page }) => {
    const features = page.getByRole('region', { name: 'Features' })
    await expect(features.getByText('Books rearrange')).toBeAttached()
    await expect(features.getByText('Document anomalies')).toBeAttached()
    await expect(features.getByText('limited light sources')).toBeAttached()
    await expect(features.getByText('Endure until morning')).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const features = page.getByRole('region', { name: 'Features' })
    await expect(features.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(features.getByRole('article')).toHaveCount(4)
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const features = page.getByRole('region', { name: 'Features' })
    await expect(features.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(features.getByRole('article')).toHaveCount(4)
  })
})
