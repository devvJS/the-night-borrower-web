import { test, expect } from '@playwright/test'

test.describe('about section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the section heading', async ({ page }) => {
    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByRole('heading', { level: 2 })).toHaveText('About the Game')
  })

  test('renders the subheading', async ({ page }) => {
    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByText('A first-person psychological survival horror experience')).toBeAttached()
  })

  test('renders narrative content', async ({ page }) => {
    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByText('night clerk')).toBeAttached()
    await expect(about.getByText('Books move between visits')).toBeAttached()
    await expect(about.getByText('it borrows more than books')).toBeAttached()
  })

  test('renders the setting sidebar', async ({ page }) => {
    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByText('Small-town bookstore')).toBeAttached()
    await expect(about.getByText('Pacific Northwest, 1990s')).toBeAttached()
    await expect(about.getByText('Psychological survival horror', { exact: true })).toBeAttached()
    await expect(about.getByText('First-person', { exact: true })).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(about.getByText('Small-town bookstore')).toBeAttached()
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const about = page.getByRole('region', { name: 'About' })
    await expect(about.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(about.getByText('Small-town bookstore')).toBeAttached()
  })
})
