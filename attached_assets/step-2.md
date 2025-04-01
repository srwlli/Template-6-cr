---
title: Step 2 – Populate Pages with Content
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Roadmapper
tags: ["#step-2", "#populate", "#html"]
classification: INTERNAL
description: Fill all HTML files with the exact contents as defined in the spec.
---

# Step 2 – Populate HTML Content

## ✅ Populate files
Using `index.html` as the source, create and modify the following:

| File | Title Change | Heading Change | Paragraph Change |
|------|--------------|----------------|------------------|
| home.html | Home | Home Page | Home dashboard |
| page1.html | Page 1 | Page 1 Content | Page 1 area |
| page2.html | Page 2 | Page 2 Content | Page 2 area |
| page3.html | Page 3 | Page 3 Content | Page 3 area |
| about.html | About | About This Template | Info about project |
| settings.html | Settings | Settings | App/user settings |

Make sure the references to CSS and JS files match the structure in Step 1.

[agent-directive]
ref: step-2-populate
type: page
scope: literal
phase: 1
step: 2

linked-coderefs:
  - @Pg/root/HomePage
  - @Pg/form/CreateFormPage
  - @Pg/form/MyFormPage
linked-docs:
  - ./step-1.md

instructions: |
  Populate each file with specified edits based on index.html source.
