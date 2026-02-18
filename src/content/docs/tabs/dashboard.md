---
title: Dashboard (Tab 1)
description: Overview of ccboard's Dashboard tab showing key metrics, model usage, and activity.
section: Features
order: 3.1
---

## Overview

The Dashboard is the landing tab when you launch ccboard. It provides a high-level view of your Claude Code usage.

## Key Metrics

- **Total sessions** and **active sessions count**
- **Total cost** (all time and current month)
- **Model distribution** (opus, sonnet, haiku percentages)
- **7-day activity chart** showing session counts per day

## Clickable KPI Cards

.Since v0.5.0, KPI cards are clickable, clicking a metric navigates you to the relevant detailed tab (e.g., clicking cost navigates to Tab 6 - Costs).

## Data Source

Dashboard data is aggregated from all parsed sessions in `~/.claude/sessions/`. The cache ensures this loads in ~224ms after the first run.
