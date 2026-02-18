---
title: Costs (Tab 6)
description: Token analytics with 4 sub-views for cost tracking and model breakdown.
section: Features
order: 3.6
---

## Overview

The Costs tab provides detailed token analytics with 4 sub-views for understanding your Claude Code spending.

## 4 Sub-Views

1. **Overview**: Total cost, cost per session, monthly trends
2. **By Model**: Breakdown by model (opus, sonnet, haiku) with percentages
3. **By Project**: Cost grouped by project directory
4. **Timeline**: Daily/weekly/monthly cost charts

## Cost Calculation

ccboard calculates costs based on token counts from session JSONL files, using current Anthropic pricing. Costs are computed at parse time and cached in SQLite.

## Export

Export cost data in CSV or JSON format for external analysis:

```bash
ccboard stats --json
```
