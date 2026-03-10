import i18n from '../i18n';
import type { Locale, LocalizedText } from '../types/portfolio';

export function getCurrentLocale(): Locale {
  return i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
}

export function readLocalizedText(value: LocalizedText, locale = getCurrentLocale()) {
  return value[locale];
}