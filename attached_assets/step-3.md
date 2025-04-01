---
title: Step 3 – Coderef Agent Training
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Roadmapper
tags: ["#step-3", "#training", "#coderef2"]
classification: INTERNAL
description: Train agent on how to use CodeRef2 while building or referencing code in the project.
---

# Step 3 – Coderef2 Agent Training

## 🎓 Training Objectives
- Learn to use `@Type/path#element:line{metadata}` tags.
- Tag every file, function, and UI construct with appropriate `@Pg/`, `@Fn/`, `@S/`, `@C/` markers.

## 📘 Examples

- HTML page: `@Pg/root/HomePage`
- CSS layout file: `@S/css/layout`
- JavaScript entry: `@Fn/js/main#initThemeToggle`

## 🧩 Tips
- Always include `[agent-directive]` at the end of `.md` files.
- Sort and log in `coderef-index.md`.
- Use relationships block to show `depends-on`, `used-by`.

[agent-directive]
ref: step-3-train-agent
type: education
scope: training
phase: 1
step: 3

linked-docs:
  - ./step-1.md
  - ./step-2.md

instructions: |
  Review and internalize how to semantically tag each element using Coderef2.
