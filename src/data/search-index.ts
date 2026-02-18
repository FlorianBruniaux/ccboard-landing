/**
 * Search Index for ccboard landing
 * Aggregates all site entries for Cmd+K search
 */

export interface SearchEntry {
  id: string
  title: string
  keywords: string
  category: string
  url: string
  source: 'landing'
}

const pageEntries: SearchEntry[] = [
  {
    id: 'page-home',
    title: 'ccboard: The Dashboard Claude Code Deserves',
    keywords: 'home overview ccboard dashboard tui web claude code',
    category: 'Pages',
    url: '/',
    source: 'landing',
  },
  {
    id: 'page-docs',
    title: 'Documentation: Getting Started',
    keywords: 'docs documentation getting started guide setup install',
    category: 'Pages',
    url: '/docs/getting-started/',
    source: 'landing',
  },
  {
    id: 'page-cheatsheet',
    title: 'Cheatsheet',
    keywords: 'cheatsheet commands shortcuts reference quick lookup',
    category: 'Pages',
    url: '/cheatsheet/',
    source: 'landing',
  },
]

const sectionEntries: SearchEntry[] = [
  {
    id: 'sec-features',
    title: 'Features: 9 Interactive Tabs',
    keywords: 'features tabs dashboard sessions costs config hooks agents mcp analytics',
    category: 'Homepage',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'sec-performance',
    title: 'Performance: 89x Faster with Cache',
    keywords: 'performance speed cache sqlite benchmark fast startup',
    category: 'Homepage',
    url: '/#performance',
    source: 'landing',
  },
  {
    id: 'sec-screenshots',
    title: 'Screenshots: TUI & Web Interface',
    keywords: 'screenshots gallery tui web interface preview visual',
    category: 'Homepage',
    url: '/#screenshots',
    source: 'landing',
  },
  {
    id: 'sec-install',
    title: 'Install ccboard',
    keywords: 'install setup cargo homebrew brew binary download rust crates.io',
    category: 'Homepage',
    url: '/#install',
    source: 'landing',
  },
  {
    id: 'sec-comparison',
    title: 'Comparison: ccboard vs ccusage vs agtrace',
    keywords: 'comparison ccusage agtrace alternatives vs versus',
    category: 'Homepage',
    url: '/#comparison',
    source: 'landing',
  },
  {
    id: 'sec-faq',
    title: 'FAQ: Frequently Asked Questions',
    keywords: 'faq frequently asked questions help support troubleshooting',
    category: 'Homepage',
    url: '/#faq',
    source: 'landing',
  },
  {
    id: 'sec-terminal-demo',
    title: 'Terminal Demo',
    keywords: 'terminal demo preview animation tui',
    category: 'Homepage',
    url: '/#demo',
    source: 'landing',
  },
  {
    id: 'sec-learning',
    title: 'Learning Paths',
    keywords: 'learning paths beginner intermediate advanced getting started',
    category: 'Homepage',
    url: '/#learning',
    source: 'landing',
  },
  {
    id: 'sec-related',
    title: 'Related Projects',
    keywords: 'related projects ecosystem tools cc guide cowork bridge rtk',
    category: 'Homepage',
    url: '/#related',
    source: 'landing',
  },
  {
    id: 'sec-dive-deeper',
    title: 'Dive Deeper',
    keywords: 'dive deeper advanced topics contribute github',
    category: 'Homepage',
    url: '/#dive-deeper',
    source: 'landing',
  },
]

const featureEntries: SearchEntry[] = [
  {
    id: 'feat-sessions',
    title: 'Session Management',
    keywords: 'sessions management monitor list view history',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-costs',
    title: 'Cost Analytics & Budget Alerts',
    keywords: 'costs analytics budget alerts spending tracking api usage tokens',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-config',
    title: 'Configuration Manager',
    keywords: 'config configuration manager settings claude.md project',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-hooks',
    title: 'Hooks Inspector',
    keywords: 'hooks inspector pre post tool event automation',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-agents',
    title: 'Agents Viewer',
    keywords: 'agents viewer custom sub-agents team',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-mcp',
    title: 'MCP Servers Status',
    keywords: 'mcp servers status model context protocol tools',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-live',
    title: 'Live Process Monitoring',
    keywords: 'live process monitoring real-time watcher file changes',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
  {
    id: 'feat-web',
    title: 'Web Interface',
    keywords: 'web interface browser ui sse server-sent events port',
    category: 'Features',
    url: '/#features',
    source: 'landing',
  },
]

const docMainEntries: SearchEntry[] = [
  {
    id: 'doc-installation',
    title: 'Installation',
    keywords: 'installation install homebrew cargo brew binary download rust crates.io all methods',
    category: 'Getting Started',
    url: '/docs/installation/',
    source: 'landing',
  },
  {
    id: 'doc-configuration',
    title: 'Configuration Reference',
    keywords: 'configuration reference environment variables cli arguments config file settings',
    category: 'Configuration',
    url: '/docs/configuration/',
    source: 'landing',
  },
  {
    id: 'doc-keybindings',
    title: 'Keybindings',
    keywords: 'keybindings keyboard shortcuts navigation tui actions reference',
    category: 'Configuration',
    url: '/docs/keybindings/',
    source: 'landing',
  },
  {
    id: 'doc-performance',
    title: 'Performance & Cache',
    keywords: 'performance cache sqlite 89x faster startup mtime invalidation benchmark',
    category: 'Guides',
    url: '/docs/performance/',
    source: 'landing',
  },
  {
    id: 'doc-troubleshooting',
    title: 'Troubleshooting',
    keywords: 'troubleshooting common issues problems solutions fix errors installation usage',
    category: 'Resources',
    url: '/docs/troubleshooting/',
    source: 'landing',
  },
  {
    id: 'doc-web-interface',
    title: 'Web Interface',
    keywords: 'web interface browser ui sse server-sent events port real-time monitoring',
    category: 'Guides',
    url: '/docs/web-interface/',
    source: 'landing',
  },
  {
    id: 'doc-changelog',
    title: 'Changelog',
    keywords: 'changelog release history versions notable changes updates',
    category: 'Resources',
    url: '/docs/changelog/',
    source: 'landing',
  },
]

const docTabEntries: SearchEntry[] = [
  {
    id: 'doc-tab-overview',
    title: 'Tabs Overview',
    keywords: 'tabs overview 9 interactive tabs dashboard sessions costs config hooks agents mcp analytics history',
    category: 'Features',
    url: '/docs/tabs/',
    source: 'landing',
  },
  {
    id: 'doc-tab-dashboard',
    title: 'Dashboard (Tab 1)',
    keywords: 'dashboard tab 1 key metrics model usage activity overview',
    category: 'Features',
    url: '/docs/tabs/dashboard/',
    source: 'landing',
  },
  {
    id: 'doc-tab-sessions',
    title: 'Sessions (Tab 2)',
    keywords: 'sessions tab 2 browse search claude code sessions live process detection',
    category: 'Features',
    url: '/docs/tabs/sessions/',
    source: 'landing',
  },
  {
    id: 'doc-tab-config',
    title: 'Config (Tab 3)',
    keywords: 'config tab 3 cascading configuration viewer 3-level merge real-time search',
    category: 'Features',
    url: '/docs/tabs/config/',
    source: 'landing',
  },
  {
    id: 'doc-tab-hooks',
    title: 'Hooks (Tab 4)',
    keywords: 'hooks tab 4 event-based hook management syntax highlighting test mode',
    category: 'Features',
    url: '/docs/tabs/hooks/',
    source: 'landing',
  },
  {
    id: 'doc-tab-agents',
    title: 'Agents (Tab 5)',
    keywords: 'agents tab 5 custom ai personas commands skills invocation stats',
    category: 'Features',
    url: '/docs/tabs/agents/',
    source: 'landing',
  },
  {
    id: 'doc-tab-costs',
    title: 'Costs (Tab 6)',
    keywords: 'costs tab 6 token analytics 4 sub-views cost tracking model breakdown spending',
    category: 'Features',
    url: '/docs/tabs/costs/',
    source: 'landing',
  },
  {
    id: 'doc-tab-history',
    title: 'History (Tab 7)',
    keywords: 'history tab 7 full-text session search temporal patterns content preview',
    category: 'Features',
    url: '/docs/tabs/history/',
    source: 'landing',
  },
  {
    id: 'doc-tab-mcp',
    title: 'MCP (Tab 8)',
    keywords: 'mcp tab 8 server management status detection configuration viewing model context protocol',
    category: 'Features',
    url: '/docs/tabs/mcp/',
    source: 'landing',
  },
  {
    id: 'doc-tab-analytics',
    title: 'Analytics (Tab 9)',
    keywords: 'analytics tab 9 budget tracking trends insights 30-day cost forecasting',
    category: 'Features',
    url: '/docs/tabs/analytics/',
    source: 'landing',
  },
]

const pageExtraEntries: SearchEntry[] = [
  {
    id: 'page-faq',
    title: 'FAQ',
    keywords: 'faq frequently asked questions help support ccboard',
    category: 'Pages',
    url: '/faq/',
    source: 'landing',
  },
]

export const SEARCH_INDEX: SearchEntry[] = [
  ...pageEntries,
  ...sectionEntries,
  ...featureEntries,
  ...docMainEntries,
  ...docTabEntries,
  ...pageExtraEntries,
]
