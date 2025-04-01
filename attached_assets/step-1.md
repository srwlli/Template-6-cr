---
title: Step 1 – Structure and Coderef Injection
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Roadmapper
tags: ["#step-1", "#structure", "#coderef2"]
classification: INTERNAL
description: Establish the folder structure and inject Coderef2 references for the minimalist site.
---

# Step 1 – Define Project Structure and Inject CodeRefs

## 🔧 Tasks
1. Create the `minimalist-template` directory structure:
   ```
   /minimalist-template
   |-- index.html
   |-- home.html
   |-- page1.html
   |-- page2.html
   |-- page3.html
   |-- about.html
   |-- settings.html
   |-- /css
   |   |-- layout.css
   |   |-- components.css
   |   |-- themes.css
   |-- /js
   |   |-- main.js
   |-- README.md
   ```

2. Inject Coderef2 tags into future docs:
   - Pages: `@Pg/root/HomePage`, `@Pg/form/CreateFormPage`, `@Pg/form/MyFormPage`
   - CSS: `@S/css/layout`, `@S/css/components`, `@S/css/themes`
   - JS: `@Fn/js/main`

3. Reference `coderef-index.md` and validate structural consistency.

[agent-directive]
ref: step-1-scaffold
type: structure
scope: atomic
phase: 1
step: 1

linked-docs:
  - ./coderef-index.md

instructions: |
  Agent must build this directory and tag all atomic elements using valid CodeRef2 tags.
