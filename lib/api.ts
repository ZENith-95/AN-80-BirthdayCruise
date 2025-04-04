export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  cabinType: string
  message: string
}) {
  // This would normally be an API call to your backend
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log("Form submitted:", data)
      resolve({ success: true, message: "Form submitted successfully" })
    }, 1500)
  })
}

/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(email: string) {
  // This would normally be an API call to your backend
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log("Newsletter subscription:", email)
      resolve({ success: true, message: "Subscription successful" })
    }, 1500)
  })
}

/**
 * Submit RSVP
 */
export async function submitRSVP(data: {
  name: string
  email: string
  attending: boolean
  guests?: number
}) {
  // This would normally be an API call to your backend
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log("RSVP submitted:", data)
      resolve({ success: true, message: "RSVP submitted successfully" })
    }, 1500)
  })
}

/**
 * Submit gift contribution
 */
export async function submitGiftContribution(data: {
  name: string
  email: string
  amount: number
  giftType: "onboard-credit" | "photo-package"
  message?: string
}) {
  // This would normally be an API call to your backend
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log("Gift contribution:", data)
      resolve({ success: true, message: "Gift contribution processed successfully" })
    }, 1500)
  })
}

