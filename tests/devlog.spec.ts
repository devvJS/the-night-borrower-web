import { test, expect } from '@playwright/test'

test.describe('devlog section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the section heading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByRole('heading', { level: 2 })).toHaveText('Development Log')
  })

  test('renders the subheading', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByText('Recovered notes from an ongoing excavation')).toBeAttached()
  })

  test('renders all four entries', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    const entries = section.getByRole('article')
    await expect(entries).toHaveCount(4)
  })

  test('summary is visible by default', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByText('Persistent shelf state is in.')).toBeVisible()
    await expect(section.getByText('Sound now bleeds between rooms.')).toBeVisible()
  })

  test('body is hidden by default', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByText('We finished the inventory persistence layer')).not.toBeVisible()
    await expect(section.getByText('The acoustic occlusion system is functional')).not.toBeVisible()
  })

  test('click expands entry and reveals body', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    const firstEntry = section.getByRole('article').first()

    await firstEntry.getByRole('button').click()
    await expect(section.getByText('We finished the inventory persistence layer')).toBeVisible()
  })

  test('click again collapses entry', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    const firstEntry = section.getByRole('article').first()

    await firstEntry.getByRole('button').click()
    await expect(section.getByText('We finished the inventory persistence layer')).toBeVisible()

    await firstEntry.getByRole('button').click()
    await expect(section.getByText('We finished the inventory persistence layer')).not.toBeVisible()
  })

  test('only one entry is open at a time', async ({ page }) => {
    const section = page.getByRole('region', { name: 'Development log' })
    const entries = section.getByRole('article')

    // Open first entry
    await entries.nth(0).getByRole('button').click()
    await expect(section.getByText('We finished the inventory persistence layer')).toBeVisible()

    // Open second entry — first should close
    await entries.nth(1).getByRole('button').click()
    await expect(section.getByText('The acoustic occlusion system is functional')).toBeVisible()
    await expect(section.getByText('We finished the inventory persistence layer')).not.toBeVisible()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('article')).toHaveCount(4)
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const section = page.getByRole('region', { name: 'Development log' })
    await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(section.getByRole('article')).toHaveCount(4)
  })
})
