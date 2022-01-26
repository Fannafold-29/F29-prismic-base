/* eslint-disable max-len */
import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { repoName, accessToken } from '../prismic'

const apiEndpoint = prismic.getEndpoint(repoName)

// Client method to query documents from the Prismic repo

export const client = prismic.createClient(apiEndpoint, { accessToken })

export const manageLocal = (locales, locale) => {
  // Get languages from API response and set master language as default
  const mainLanguage = locales[0]

  // Set current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage
  const isMyMainLanguage = mainLanguage === currentLang

  return { mainLanguage, currentLang, isMyMainLanguage }
}
