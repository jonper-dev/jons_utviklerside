// Returns the base URL for the site, without trailing slash.
// Handles both GitHub Pages subdirectory and root domain deployments.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
