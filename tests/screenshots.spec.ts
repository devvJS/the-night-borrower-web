import { test, expect } from '@playwright/test'

test.describe('screenshots section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=live')
  })

  test('renders the section heading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Screenshots' })
    await expect(section.getByRole('heading', { level: 2 })).toHaveText('Screenshots')
  })

  test('renders the subheading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Screenshots' })
    await expect(section.getByText('Glimpses from the darkness')).toBeAttached()
  })

  test('renders all six screenshot tiles', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Screenshots' })
    const tiles = section.getByRole('figure')
    await expect(tiles).toHaveCount(6)
  })

  test('each tile has a caption', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Screenshots' })
    await expect(section.getByText('The aisles feel longer after midnight')).toBeAttached()
    await expect(section.getByText('Someone has been writing in the margins')).toBeAttached()
    await expect(section.getByText('The hallway was not this long yesterday')).toBeAttached()
    await expect(section.getByText('Nothing moves outside')).toBeAttached()
    await expect(section.getByText('The chair is still warm')).toBeAttached()
    await expect(section.getByText('These titles were not here this morning')).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const section = page.getByRole('region', { name: 'Screenshots' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('figure')).toHaveCount(6)
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const section = page.getByRole('region', { name: 'Screenshots' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('figure')).toHaveCount(6)
  })
})
