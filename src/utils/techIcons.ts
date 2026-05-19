// Maps tech stack names to Simple Icons CDN slugs.
// Full slug list at simpleicons.org — slugs are lowercase, no spaces or dots.
export const techIconMap: Record<string, string | null> = {
  // Languages
  'JavaScript':   'javascript',
  'TypeScript':   'typescript',
  'HTML':         'html5',
  'CSS':          'css',
  'SCSS':         'sass',
  'Python':       'python',

  // Frontend
  'React':        'react',
  'Astro':        'astro',

  // Backend
  'Node.js':      'nodedotjs',
  'Express':      'express',

  // Databases
  'MongoDB':      'mongodb',

  // APIs & services
  'Claude API':   'anthropic',

  // Hardware & IoT
  'Raspberry Pi': 'raspberrypi',
  'Micro:bit': 'microbit',
  'IoT':          null, // no Simple Icons entry, skip icon

  // Other
  'Web Components': null,
  'Git':          'git',
  'GitHub':       'github',
};

// Returns the CDN URL for a tech name, or null if no icon exists.
export function getTechIconUrl(tech: string): string | null {
  const slug = techIconMap[tech];
  if (slug === undefined) {
    console.warn(`No icon mapping for tech: "${tech}" — add it to techIcons.ts`);
    return null;
  }
  if (slug === null) return null; // known missing, no warning
  return `https://cdn.simpleicons.org/${slug}`;
}

// Platform icons for contributor links.
export const platformIconMap: Record<string, string | null> = {
  github:   'github',
  linkedin: null, // No reliable icon, use text badge instead.
  website:  'html5', // HTML5 icon as stand-in for personal homepages.
};

export function getPlatformIconUrl(platform: string): string {
  const slug = platformIconMap[platform];
  if (!slug) return '';
  return `https://cdn.simpleicons.org/${slug}`;
}
