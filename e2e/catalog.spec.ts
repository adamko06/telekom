import { expect, test } from '@playwright/test'

test('Product catalog loads and shows products', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.getByText(/Product Catalog/i)).toBeVisible()
  await page.waitForSelector('[data-testid="product-skeleton"]', {
    state: 'detached',
  })
  const links = page.getByRole('link', { name: /View Details/i })
  await expect(links.first()).toBeVisible()
  await expect(await links.count()).toBeGreaterThan(0)
})

test('Product detail loads', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.waitForSelector('[data-testid="product-skeleton"]', {
    state: 'detached',
  })
  await page
    .getByRole('link', { name: /View Details/i })
    .first()
    .click()
  await expect(page.getByText(/Back to Products/i)).toBeVisible()
})
