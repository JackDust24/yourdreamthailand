export function removeXSSAttacks(html) {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
   // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }
   // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, '');
   return {
    __html: html
  }
};




