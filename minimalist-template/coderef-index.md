---
title: CodeRef2 Index - Minimalist Template
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Maintainer
tags: ["#coderef2", "#index", "#documentation"]
classification: INTERNAL
description: Complete index of all CodeRef2 tags used in the minimalist template project.
---

# CodeRef2 Index

This document catalogs all CodeRef2 tags used throughout the minimalist template project for reference and traceability.

## Pages (`@Pg/`)

| CodeRef | File | Description |
|---------|------|-------------|
| `@Pg/root/HomePage` | index.html | Main entry page for the template |
| `@Pg/root/HomePage` | home.html | Home dashboard page |
| `@Pg/form/CreateFormPage` | page1.html | Form creation page |
| `@Pg/form/MyFormPage` | page2.html | Form viewing page |
| `@Pg/content/ContentPage` | page3.html | Content display page |
| `@Pg/info/AboutPage` | about.html | About project information page |
| `@Pg/config/SettingsPage` | settings.html | Settings configuration page |

## Styles (`@S/`)

| CodeRef | File | Description |
|---------|------|-------------|
| `@S/css/layout` | css/layout.css | Layout and structural styling |
| `@S/css/components` | css/components.css | Component-specific styling |
| `@S/css/themes` | css/themes.css | Theme definitions and dark/light mode |

## Functions (`@Fn/`)

| CodeRef | File | Description |
|---------|------|-------------|
| `@Fn/js/main` | js/main.js | Main JavaScript entry point |
| `@Fn/js/main#initThemeToggle` | js/main.js | Theme toggle initialization |

## Components (`@C/`)

| CodeRef | File | Description |
|---------|------|-------------|
| `@C/ui/ThemeToggle` | js/main.js, js/theme-toggle.js | Theme toggle component functionality |

## Relationships

### @Pg/root/HomePage
```yaml
used-by: []
depends-on:
  - @S/css/layout
  - @S/css/components
  - @S/css/themes
  - @Fn/js/main
