import { test, expect } from '@playwright/test'

test.describe('characters section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=live')
  })

  test('renders the section heading', async ({ page }) => {
    const characters = page.getByRole('region', { name: 'Characters' })
    await expect(characters.getByRole('heading', { level: 2 })).toHaveText('Characters')
  })

  test('renders the subheading', async ({ page }) => {
    const characters = page.getByRole('region', { name: 'Characters' })
    await expect(characters.getByText('The people you will meet')).toBeAttached()
  })

  test('renders all four character cards', async ({ page }) => {
    const characters = page.getByRole('region', { name: 'Characters' })
    const cards = characters.getByRole('article')
    await expect(cards).toHaveCount(4)

    await expect(characters.getByText('The Borrower')).toBeAttached()
    await expect(characters.getByText('The Shopkeeper')).toBeAttached()
    await expect(characters.getByText('The Observer')).toBeAttached()
    await expect(characters.getByText('The Sleeper')).toBeAttached()
  })

  test('each card shows role and description', async ({ page }) => {
    const characters = page.getByRole('region', { name: 'Characters' })
    await expect(characters.getByText('The presence in the walls')).toBeAttached()
    await expect(characters.getByText('Owner of the store')).toBeAttached()
    await expect(characters.getByText('A recurring visitor')).toBeAttached()
    await expect(characters.getByText('Found in the back room')).toBeAttached()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const characters = page.getByRole('region', { name: 'Characters' })
    await expect(characters.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(characters.getByRole('article')).toHaveCount(4)
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })

    const characters = page.getByRole('region', { name: 'Characters' })
    await expect(characters.getByRole('heading', { level: 2 })).toBeVisible()
    await expect(characters.getByRole('article')).toHaveCount(4)
  })
})
