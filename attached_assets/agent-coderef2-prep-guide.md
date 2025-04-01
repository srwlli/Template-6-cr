---
title: Agent Prep Guide – Using CodeRef2
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Training Team
tags: ["#coderef2", "#prep", "#agent", "#training"]
classification: INTERNAL
description: Agent-facing guide for preparing to use CodeRef2 effectively in execution tasks.
---

# 🧠 Agent Prep Guide – Mastering CodeRef2

This guide prepares you, the agent, to execute with full Coderef2 compliance and power. It explains **how to tag**, **when to use**, and **why it matters**.

---

## 📌 What is CodeRef2?

CodeRef2 is a **semantic code reference system** designed to:
- Make every reference machine-parsable
- Track file/function/component evolution
- Allow AI agents to **map, trace, and impact-assess** all changes

---

## 🧩 Core Format

```text
@Type/path#element:line{metadata}
```

| Part | Meaning |
|------|--------|
| `@Fn/js/main#initThemeToggle` | Function in JS file |
| `@Pg/form/MyFormPage` | Page doc |
| `@S/css/layout` | Style file |
| `@C/components/Sidebar#toggleVisibility` | Component + method |

---

## 🛠️ Where to Inject

| Artifact | CodeRef |
|----------|---------|
| HTML Page | `@Pg/...` |
| Component | `@C/...` |
| Function | `@Fn/...` |
| Style File | `@S/...` |
| JavaScript Method | `@Fn/js/...#methodName` |

Inject **one Coderef per doc or element** at minimum.

---

## ✅ Best Practices

- **Always include `[agent-directive]`** block in `.md` files
- Use `## Relationships` to define:
  ```yaml
  @Pg/root/HomePage:
    used-by: []
    depends-on: []
  ```
- Keep CodeRefs canonical: no whitespace, normalized paths
- Update `coderef-index.md` after new tags

---

## 🧪 Coderef2 Validation

To check a `.md` file:
1. YAML frontmatter present ✅
2. Coderef present in `ref:` and `Relationships` ✅
3. Directive block complete ✅
4. Included in `coderef-index.md` ✅

---

[agent-directive]
ref: agent-prep-coderef2
type: guide
scope: training
phase: 0
step: prep

linked-docs: []
instructions: |
  Study this guide before executing any Coderef2-tagged project.
  Ensure all outputs conform to the structure and traceability expected.
