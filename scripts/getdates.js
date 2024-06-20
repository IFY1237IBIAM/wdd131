// getdates.js

// Get current year for copyright
let currentYear = new Date().getFullYear();

// Output current year in footer's first paragraph
document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} Your Company Name`;

// Get last modified date of the document
let lastModifiedDate = new Date(document.lastModified);

// Format the date for output
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

// Output last modified date in footer's second paragraph
document.querySelector('footer p:nth-of-type(2)').textContent = `Note this CodePen summary of using the Date object in different ways. Document last modified on ${formattedDate}`;
