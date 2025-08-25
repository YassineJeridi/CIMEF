// Format phone number
export const formatPhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '')

    // Format as Tunisian phone number
    if (cleaned.length === 8) {
        return cleaned.replace(/(\d{2})(\d{3})(\d{3})/, '$1 $2 $3')
    }

    return phone
}

// Format email validation
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Format currency (Tunisian Dinar)
export const formatCurrency = (amount, currency = 'TND') => {
    return new Intl.NumberFormat('fr-TN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount)
}

// Format date to French locale
export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
    }

    return new Date(date).toLocaleDateString('fr-FR', defaultOptions)
}

// Debounce function for search inputs
export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Throttle function for scroll events
export const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function executedFunction(...args) {
        if (!lastRan) {
            func(...args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

// Generate random ID
export const generateId = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

// Check if element is in viewport
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// Get scroll percentage
export const getScrollPercentage = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    return (scrollTop / scrollHeight) * 100
}

// Local storage helpers
export const storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : defaultValue
        } catch (error) {
            console.error(`Error getting item from localStorage:`, error)
            return defaultValue
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(`Error setting item to localStorage:`, error)
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error(`Error removing item from localStorage:`, error)
        }
    },

    clear: () => {
        try {
            localStorage.clear()
        } catch (error) {
            console.error(`Error clearing localStorage:`, error)
        }
    }
}

// URL parameter helpers
export const getUrlParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
}

export const setUrlParameter = (name, value) => {
    const url = new URL(window.location)
    url.searchParams.set(name, value)
    window.history.pushState({}, '', url)
}

// Copy to clipboard
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (error) {
        console.error('Failed to copy to clipboard:', error)
        return false
    }
}

// Device detection
export const getDeviceType = () => {
    const width = window.innerWidth

    if (width < 640) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
}

// Image lazy loading helper
export const lazyLoadImage = (img, src) => {
    const imageLoader = new Image()
    imageLoader.src = src

    imageLoader.onload = () => {
        img.src = src
        img.classList.add('loaded')
    }
}

// Form validation helpers
export const validateForm = (formData, rules) => {
    const errors = {}

    Object.keys(rules).forEach(field => {
        const value = formData[field]
        const fieldRules = rules[field]

        if (fieldRules.required && (!value || value.trim() === '')) {
            errors[field] = 'Ce champ est obligatoire'
        } else if (value) {
            if (fieldRules.minLength && value.length < fieldRules.minLength) {
                errors[field] = `Minimum ${fieldRules.minLength} caractères requis`
            }

            if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
                errors[field] = `Maximum ${fieldRules.maxLength} caractères autorisés`
            }

            if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
                errors[field] = fieldRules.message || 'Format invalide'
            }

            if (fieldRules.email && !isValidEmail(value)) {
                errors[field] = 'Adresse email invalide'
            }
        }
    })

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

// Animation delay calculator
export const calculateStaggerDelay = (index, baseDelay = 100) => {
    return index * baseDelay
}

// Capitalize first letter
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Truncate text
export const truncateText = (text, maxLength, suffix = '...') => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength - suffix.length) + suffix
}

// Generate slug from text
export const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[àáäâèéëêìíïîòóöôùúüûñç·/_,:;]/g, (char) => {
            const charMap = {
                'à': 'a', 'á': 'a', 'ä': 'a', 'â': 'a',
                'è': 'e', 'é': 'e', 'ë': 'e', 'ê': 'e',
                'ì': 'i', 'í': 'i', 'ï': 'i', 'î': 'i',
                'ò': 'o', 'ó': 'o', 'ö': 'o', 'ô': 'o',
                'ù': 'u', 'ú': 'u', 'ü': 'u', 'û': 'u',
                'ñ': 'n', 'ç': 'c'
            }
            return charMap[char] || char
        })
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}
