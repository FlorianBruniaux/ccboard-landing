/**
 * Search Data for ccboard Landing Page
 * Customize arrays with searchable content
 */

// Features
window.SEARCH_FEATURES = [
  {
    id: 'feat-1',
    type: 'feature',
    title: 'Dashboard',
    content: 'Overview stats model usage MCP servers 7-day activity API usage estimation plan budgets',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-2',
    type: 'feature',
    title: 'Sessions',
    content: 'Browse sessions search live Claude processes CPU RAM tokens detail view',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-3',
    type: 'feature',
    title: 'Config',
    content: 'Cascading configuration editor global project local 4-column diff view',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-4',
    type: 'feature',
    title: 'Hooks',
    content: 'Event-based hook management bash syntax highlighting test mode',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-5',
    type: 'feature',
    title: 'Agents',
    content: 'Browse agents commands skills frontmatter YAML parsing invocation stats',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-6',
    type: 'feature',
    title: 'Costs',
    content: 'Token analytics 4 tabs overview by model daily billing blocks',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-7',
    type: 'feature',
    title: 'History',
    content: 'Full-text search sessions temporal patterns filters',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-8',
    type: 'feature',
    title: 'MCP',
    content: 'Server management status detection env vars display',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'feat-9',
    type: 'feature',
    title: 'Analytics',
    content: 'Advanced analytics budget tracking trends patterns insights forecasting',
    category: 'Tab',
    url: '#features'
  },
  {
    id: 'perf-1',
    type: 'feature',
    title: 'Performance - 89x Faster Startup',
    content: 'SQLite cache 20s to 224ms warm cache speedup metadata lazy loading',
    category: 'Performance',
    url: '#performance'
  },
  {
    id: 'perf-2',
    type: 'feature',
    title: 'Performance - 10K+ Sessions',
    content: 'Handles effortlessly warm cache concurrent scanning tokio spawn',
    category: 'Performance',
    url: '#performance'
  },
  {
    id: 'perf-3',
    type: 'feature',
    title: 'Performance - Cache Hit Rate',
    content: '>99% cache hit rate after first run bincode serialization WAL mode',
    category: 'Performance',
    url: '#performance'
  }
];

// FAQ
window.SEARCH_FAQ = [
  {
    id: 'faq-1',
    type: 'faq',
    title: 'What is ccboard?',
    content: 'unified TUI Web dashboard Claude Code management 9 interactive tabs monitoring sessions costs config hooks agents MCP servers Rust 5.8MB binary',
    category: 'General',
    url: '#faq'
  },
  {
    id: 'faq-2',
    type: 'faq',
    title: 'How does the cache work?',
    content: 'SQLite metadata cache mtime-based invalidation 89x speedup 20s to 224ms >99% cache hit rate lazy session content loading',
    category: 'Technical',
    url: '#faq'
  },
  {
    id: 'faq-3',
    type: 'faq',
    title: 'Does it work on Linux/Windows?',
    content: 'macOS Linux Windows cross-platform file manager integration fully tested community-tested experimental',
    category: 'Platform',
    url: '#faq'
  },
  {
    id: 'faq-4',
    type: 'faq',
    title: 'How much does it cost?',
    content: 'free open-source MIT Apache-2.0 license no subscription no hidden costs cost analytics track Claude API usage',
    category: 'Pricing',
    url: '#faq'
  },
  {
    id: 'faq-5',
    type: 'faq',
    title: 'Can I use the web interface?',
    content: 'web UI ccboard web port 3333 both TUI Web simultaneously 100% feature parity 9 pages',
    category: 'Features',
    url: '#faq'
  },
  {
    id: 'faq-6',
    type: 'faq',
    title: 'Real-time monitoring support?',
    content: 'file watcher monitors ~/.claude changes 500ms debounce live updates TUI Web Server-Sent Events Sessions tab live Claude processes CPU RAM Token metrics',
    category: 'Features',
    url: '#faq'
  },
  {
    id: 'faq-7',
    type: 'faq',
    title: 'Difference with ccusage/agtrace?',
    content: 'ccusage CLI cost tracker no dashboard agtrace observability MCP self-reflection ccboard multi-concern dashboard config hooks agents MCP status advanced analytics forecasting TUI Web single binary',
    category: 'Comparison',
    url: '#faq'
  },
  {
    id: 'faq-8',
    type: 'faq',
    title: 'How do I contribute?',
    content: 'contributions welcome CONTRIBUTING.md fork repository feature branch tests cargo test clippy zero warnings Pull Request',
    category: 'Development',
    url: '#faq'
  }
];

// Install/Quick Start
window.SEARCH_DOCS = [
  {
    id: 'install-1',
    type: 'install',
    title: 'Installation - cargo install',
    content: 'cargo install ccboard Rust 1.85+ recommended installation method',
    category: 'Install',
    url: '#install'
  },
  {
    id: 'install-2',
    type: 'install',
    title: 'Installation - Pre-built binaries',
    content: 'GitHub Releases download macOS Linux Windows pre-built binaries alternative installation',
    category: 'Install',
    url: '#install'
  },
  {
    id: 'usage-1',
    type: 'doc',
    title: 'Launch TUI',
    content: 'ccboard launch dashboard default TUI interface',
    category: 'Usage',
    url: '#install'
  },
  {
    id: 'usage-2',
    type: 'doc',
    title: 'Launch Web Interface',
    content: 'ccboard web --port 3333 web interface localhost browser',
    category: 'Usage',
    url: '#install'
  },
  {
    id: 'usage-3',
    type: 'doc',
    title: 'Launch Both TUI + Web',
    content: 'ccboard both --port 3333 simultaneously TUI Web interface',
    category: 'Usage',
    url: '#install'
  },
  {
    id: 'usage-4',
    type: 'doc',
    title: 'Stats Summary',
    content: 'ccboard stats print summary exit CLI command',
    category: 'Usage',
    url: '#install'
  },
  {
    id: 'keys-1',
    type: 'doc',
    title: 'Keybindings - Navigation',
    content: '1-9 jump tab Tab next tab j k move down up vim style / search : command palette',
    category: 'Keybindings',
    url: '#install'
  },
  {
    id: 'keys-2',
    type: 'doc',
    title: 'Keybindings - File Operations',
    content: 'e edit file $EDITOR o reveal file manager',
    category: 'Keybindings',
    url: '#install'
  },
  {
    id: 'keys-3',
    type: 'doc',
    title: 'Keybindings - Other',
    content: 'r refresh data ? show help q quit',
    category: 'Keybindings',
    url: '#install'
  }
];
