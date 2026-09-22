// backend/utils/escapeHtml.js
// Escapes user-supplied text so it renders as literal text inside HTML (e.g. email bodies).
const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

module.exports = escapeHtml;
