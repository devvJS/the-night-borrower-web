import { test, expect } from '@playwright/test'

test.describe('coming soon page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?mode=coming_soon')
  })

  test('page renders in coming_soon mode', async ({ page }) => {
    await expect(page.getByTestId('coming-soon-glyph')).toBeAttached()
  })

  test('eye glyph renders', async ({ page }) => {
    await expect(page.getByTestId('coming-soon-glyph')).toBeVisible()
  })

  test('"The Night Borrower" renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'The Night Borrower' })).toBeVisible()
  })

  test('"It isn\'t ready for you yet." renders', async ({ page }) => {
    await expect(page.getByText('It isn\u2019t ready for you yet.')).toBeVisible()
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
