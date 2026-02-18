---
title: Hooks (Tab 4)
description: Event-based hook management with syntax highlighting and test mode.
section: Features
order: 3.4
---

## Overview

The Hooks tab browses all Claude Code hooks with syntax highlighting and a test mode.

## Features

- **Hook browser** listing all configured hooks
- **Syntax highlighting** for hook scripts
- **Test mode** to validate hooks without executing side effects
- **Event types** displayed with associated triggers
- **Edit**: press `e` to edit a hook in `$EDITOR`

## Hook Location

Hooks are stored in `~/.claude/hooks/` and are event-based triggers that run on specific Claude Code events (pre/post session, on error, etc.).
