import { projectTypes } from '@/data/siteConfig'

export function validateContact(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const projectType = values.projectType.trim()
  const message = values.message.trim()

  if (name.length < 2 || name.length > 120) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!projectTypes.includes(projectType)) errors.projectType = 'Please choose a project type.'
  if (message.length < 10 || message.length > 4000) {
    errors.message = 'Please write a message between 10 and 4,000 characters.'
  }

  return errors
}

// The original Next.js action validated the form but did not send email.
export async function sendContact(values) {
  const errors = validateContact(values)
  if (Object.keys(errors).length) {
    return { status: 'error', errors, message: 'Please review the highlighted fields.' }
  }

  return {
    status: 'success',
    message: `Thank you, ${values.name.trim().split(/\s+/)[0]}! I will be in touch soon.`,
  }
}
