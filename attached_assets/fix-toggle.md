---
title: Fix Theme Toggle Visibility and Functionality
version: 1.0.0
date: 2025-04-01
authors:
  - name: Coderef Agent
tags: ["#fix", "#theme", "#coderef2", "#step-1"]
classification: INTERNAL
description: Restrict theme toggle to the home page and enable proper dark/light mode toggling via next-themes.
---

# Fix Theme Toggle Scope and Functionality

## Objective

- Move the theme toggle so it only appears on `@Pg/root/HomePage`
- Enable working dark/light theme support using `next-themes` and Tailwind CSS `darkMode: 'class'`

---

## Required Actions

1. **Restrict visibility** of the toggle:
   - Locate the toggle component in `@C/ui/ThemeToggle`
   - Remove it from global layout (likely `_app.tsx` or `Layout.tsx`)
   - Add it explicitly inside `@Pg/root/HomePage`

2. **Enable dark/light support**:
   - Wrap app in `ThemeProvider` from `next-themes` in `_app.tsx`
   - Ensure `tailwind.config.js` includes `darkMode: 'class'`
   - Update toggle logic in `@C/ui/ThemeToggle` to use `useTheme()`

3. **Test results**:
   - Toggle is only visible on HomePage
   - Theme changes instantly and persists

---

## Constraints

| Rule | Status |
|------|--------|
| Do not modify routing logic | ✅ Required |
| Only update files tagged in this instruction | ✅ Required |
| Do not affect non-theme UI | ✅ Required |

---

## Documentation Requirements

Update or create:
- `@Pg/root/HomePage`: Confirm `ThemeToggle` is included here only
- `@C/ui/ThemeToggle`: Confirm use of `useTheme()` and correct toggle behavior

---

## References

- `@Pg/root/HomePage`
- `@C/ui/ThemeToggle`
- `@F/pages/_app.tsx`
- `@F/tailwind.config.js`

---

## Deliverables

- Modified files with updated logic and correct Coderef2 structure
- Log of changes in `./step-1.2-index.md`

---

[agent-directive]
ref: @Task/fix-theme-toggle
type: execution
phase: 1
step: step-1.2-theme-fix

linked-docs:
  - ./step-1.2-index.md

instructions: |
  1. Locate and remove `ThemeToggle` from any layout-level or `_app.tsx` placement.
  2. Insert `<ThemeToggle />` directly in `@Pg/root/HomePage`.
  3. Update `_app.tsx` to wrap app in `ThemeProvider` from `next-themes`.
  4. Ensure `tailwind.config.js` has `darkMode: 'class'`.
  5. Update toggle logic in `@C/ui/ThemeToggle` to use `useTheme()` and persist theme.
  6. Test toggle visibility and functionality manually or via snapshot test.
  7. Log results in `./step-1.2-index.md`.
