import { parsePhoneNumberFromString } from 'libphonenumber-js/max';
export function checkPhoneValid(phone: string, country: any) {
    if (!phone || !country?.dialCode || !country?.countryCode) return false
    const nationalNumber = phone.startsWith(country.dialCode)
        ? phone.slice(country.dialCode.length)
        : phone
    if (!nationalNumber) return false

    try {
        const parsed = parsePhoneNumberFromString(nationalNumber, country.countryCode.toUpperCase())
        if (!parsed || !parsed.isValid()) return false
        const type = parsed.getType()
        // FIXED_LINE_OR_MOBILE covers countries (e.g. the US) where the
        // numbering plan can't disambiguate mobile vs landline by pattern.
        return type === 'MOBILE' || type === 'FIXED_LINE_OR_MOBILE'
    } catch {
        return false
    }
}
