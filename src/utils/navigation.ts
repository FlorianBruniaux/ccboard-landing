export interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started/' },
      { title: 'Installation', href: '/docs/installation/' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Tabs Overview', href: '/docs/tabs/' },
      { title: 'Dashboard', href: '/docs/tabs/dashboard/' },
      { title: 'Sessions', href: '/docs/tabs/sessions/' },
      { title: 'Config', href: '/docs/tabs/config/' },
      { title: 'Hooks', href: '/docs/tabs/hooks/' },
      { title: 'Agents', href: '/docs/tabs/agents/' },
      { title: 'Costs', href: '/docs/tabs/costs/' },
      { title: 'History', href: '/docs/tabs/history/' },
      { title: 'MCP', href: '/docs/tabs/mcp/' },
      { title: 'Analytics', href: '/docs/tabs/analytics/' },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Config Reference', href: '/docs/configuration/' },
      { title: 'Keybindings', href: '/docs/keybindings/' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Web Interface', href: '/docs/web-interface/' },
      { title: 'Performance & Cache', href: '/docs/performance/' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Troubleshooting', href: '/docs/troubleshooting/' },
      { title: 'Changelog', href: '/docs/changelog/' },
    ],
  },
]

/** Flatten navigation into ordered list for prev/next */
export function flatNav(): { title: string; href: string }[] {
  return navigation.flatMap(section => section.items)
}

/** Get prev/next pages for pagination */
export function getPagination(currentPath: string) {
  const flat = flatNav()
  const normalized = currentPath.endsWith('/') ? currentPath : currentPath + '/'
  const index = flat.findIndex(item => item.href === normalized)
  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  }
}
