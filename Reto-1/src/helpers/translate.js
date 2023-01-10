import { leetChars } from "../data/leetChars"

export const translate = (str) => {
    
    return str.split('')
    .map(c => !leetChars[c] ? c : leetChars[c])
    .join('')

}