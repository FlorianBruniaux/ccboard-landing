---
title: Installation
description: All installation methods for ccboard - Homebrew, Cargo, pre-built binaries, and from source.
section: Getting Started
order: 2
---

## Homebrew (Recommended)

The fastest method with automatic updates:

```bash
brew tap FlorianBruniaux/tap
brew install ccboard
```

Benefits: no Rust toolchain required, clean uninstall, automatic updates via `brew upgrade`.

## Cargo

If you have Rust installed (1.85+):

```bash
cargo install ccboard
```

> Claude Code users typically already have Rust installed.

## Pre-built Binaries

Download from [GitHub Releases](https://github.com/FlorianBruniaux/ccboard/releases/latest):

1. Download the binary for your platform
2. Make it executable: `chmod +x ccboard`
3. Move to PATH: `mv ccboard /usr/local/bin/`

## From Source

```bash
git clone https://github.com/FlorianBruniaux/ccboard.git
cd ccboard
cargo build --release
# Binary at target/release/ccboard
```

## Verify Installation

```bash
ccboard --version
# ccboard 0.8.0

ccboard stats
# Quick check that everything works
```

## Platform Support

| Platform | Status |
|----------|--------|
| macOS (Apple Silicon + Intel) | Fully tested |
| Linux (x86_64) | Community-tested |
| Windows | Experimental |

## Updating

```bash
# Homebrew
brew upgrade ccboard

# Cargo
cargo install ccboard --force

# After upgrade, clear cache
ccboard clear-cache
```
