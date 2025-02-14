const text = `
Emails: user@example.com, firstname.lastname@company.co.uk
URLs: https://www.example.com, https://subdomain.example.org/page
Phone Numbers: (123) 456-7890, 123-456-7890, 123.456.7890
Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456
`;

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const urlRegex = /https?:\/\/[^\s]+/g;
const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const creditCardRegex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;

const emails = text.match(emailRegex) || [];
const urls = text.match(urlRegex) || [];
const phoneNumbers = text.match(phoneRegex) || [];
const creditCards = text.match(creditCardRegex) || [];

console.log("Emails:", emails);
console.log("URLs:", urls);
console.log("Phone Numbers:", phoneNumbers);
console.log("Credit Cards:", creditCards);