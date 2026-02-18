---
title: Analytics (Tab 9)
description: Budget tracking, trends, insights, and 30-day cost forecasting.
section: Features
order: 3.9
---

## Overview

The Analytics tab provides advanced analytics with budget tracking, trend analysis, and cost forecasting.

## 4 Views

1. **Budget**: Monthly budget status with visual warnings and alert thresholds
2. **Trends**: 7/30/90-day cost trends with charts
3. **Insights**: Automated observations about usage patterns
4. **Forecasting**: 30-day cost projection based on historical data

## Budget Setup

Configure in `~/.claude/settings.json`:

```json
{
  "budget": {
    "monthlyBudgetUsd": 50.0,
    "alertThresholdPct": 80.0
  }
}
```

When usage exceeds the alert threshold, ccboard displays visual warnings in both TUI and Web interfaces.

## Forecasting

The 30-day forecast uses a weighted moving average of your recent session costs to project future spending. This helps you anticipate budget exhaustion before it happens.
