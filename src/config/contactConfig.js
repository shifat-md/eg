// Contact form delivery settings. A React frontend alone cannot send email securely.
// To receive submissions: create a form at a service such as Formspree, paste its endpoint URL below and set enabled:true.
// NEVER put private API keys in this file; it is shipped to the browser. See README.md.
export const CONTACT_CONFIG={enabled:false,provider:'formspree',endpoint:'' /* e.g. https://formspree.io/f/xxxxxxx */,fallbackEmail:'contact.egnisher@gmail.com'}
