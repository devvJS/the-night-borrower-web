import { test, expect } from '@playwright/test'

test.describe('maintenance page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=maintenance')
  })

  test('page renders in maintenance mode', async ({ page }) => {
    await expect(page.getByTestId('maintenance-glyph')).toBeAttached()
  })

  test('eye glyph renders', async ({ page }) => {
    await expect(page.getByTestId('maintenance-glyph')).toBeVisible()
  })

  test('"The Night Borrower" renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'The Night Borrower' })).toBeVisible()
  })

  test('"Something is being adjusted in the dark." renders', async ({ page }) => {
    await expect(page.getByText('Something is being adjusted in the dark.')).toBeVisible()
  })

  test('"Try to remember." renders', async ({ page }) => {
    await expect(page.getByText('Try to remember.')).toBeVisible()
  })

  test('no navbar present', async ({ page }) => {
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).not.toBeAttached()
  })

  test('no footer present', async ({ page }) => {
    await expect(page.getByRole('contentinfo', { name: 'Site footer' })).not.toBeAttached()
  })
})
