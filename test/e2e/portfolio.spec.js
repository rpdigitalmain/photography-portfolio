import { expect, test } from '@playwright/test'

test.describe('Helena Duarte photography portfolio', () => {
  test('renders the home page and its main sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Helena Duarte — Photography')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Images that hold')
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Gallery' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeVisible()
  })

  test('opens a category gallery and can switch categories', async ({ page }) => {
    await page.goto('/gallery/portraits')

    await expect(page).toHaveTitle('Portraits — Helena Duarte Photography')
    await expect(page.getByRole('heading', { level: 1, name: 'Portraits' })).toBeVisible()
    const categoryNavigation = page.getByRole('navigation', { name: 'Gallery categories' })
    await expect(categoryNavigation.getByRole('link', { name: 'Portraits' })).toHaveAttribute('aria-current', 'page')
    await expect(page.getByRole('img', { name: 'Freckled young person looking aside in soft window light' })).toBeVisible()

    await categoryNavigation.getByRole('link', { name: 'Weddings' }).click()
    await expect(page).toHaveURL(/\/gallery\/weddings$/)
    await expect(page.getByRole('heading', { level: 1, name: 'Weddings' })).toBeVisible()
  })

  test('shows a useful message for an unknown gallery', async ({ page }) => {
    await page.goto('/gallery/unknown')

    await expect(page.getByRole('heading', { name: 'Gallery not found' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Return to the home page' })).toHaveAttribute('href', '/')
  })

  test('validates and submits the contact form', async ({ page }) => {
    await page.goto('/#contact')

    await page.getByRole('button', { name: 'Send message' }).click()
    await expect(page.getByText('Please enter your name.')).toBeVisible()
    await expect(page.getByText('Please enter a valid email address.')).toBeVisible()
    await expect(page.getByText('Please choose a project type.')).toBeVisible()
    await expect(page.getByText('Please write a message between 10 and 4,000 characters.')).toBeVisible()

    await page.getByLabel('Name').fill('Ana Silva')
    await page.getByLabel('Email').fill('ana@example.com')
    await page.getByLabel('Project type').selectOption('Wedding')
    await page.getByLabel('Message').fill('I would love to discuss photography for our wedding.')
    await page.getByRole('button', { name: 'Send message' }).click()

    await expect(page.getByRole('status')).toContainText('Thank you, Ana!')
    await expect(page.getByText('Your message has been received.')).toBeVisible()
  })

  test('opens the mobile menu and closes it after navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    await page.getByRole('button', { name: 'Open menu' }).click()
    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile navigation' })
    await expect(mobileNavigation).toBeVisible()
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true')

    await mobileNavigation.getByRole('link', { name: 'Gallery' }).click()
    await expect(page).toHaveURL(/#gallery$/)
    await expect(mobileNavigation).toHaveCount(0)
  })
})
