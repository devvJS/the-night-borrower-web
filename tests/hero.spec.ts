import { test, expect } from '@playwright/test'

test.describe('hero section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the glyph seal above the title', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByTestId('hero-glyph')).toBeAttached()
  })

  test('renders the game title', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toHaveText('The Night Borrower')
  })

  test('renders the tagline', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByText('Something watches while you sleep.')).toBeVisible()
  })

  test('renders the primary button', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('button', { name: 'You\u2019ll know when it\u2019s time.' })).toBeAttached()
  })

  test('renders the secondary button', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('button', { name: 'Close your eyes. Not yet.' })).toBeAttached()
  })

  test('both buttons are disabled', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('button', { name: 'You\u2019ll know when it\u2019s time.' })).toBeDisabled()
    await expect(hero.getByRole('button', { name: 'Close your eyes. Not yet.' })).toBeDisabled()
  })

  test('layout is stable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(hero.getByRole('button', { name: 'You\u2019ll know when it\u2019s time.' })).toBeAttached()
    await expect(hero.getByRole('button', { name: 'Close your eyes. Not yet.' })).toBeAttached()
  })

  test('layout is stable on desktop viewport', async ({ page }) => {
    const hero = page.getByRole('region', { name: 'Hero' })
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(hero.getByRole('button', { name: 'You\u2019ll know when it\u2019s time.' })).toBeAttached()
    await expect(hero.getByRole('button', { name: 'Close your eyes. Not yet.' })).toBeAttached()
  })
})
