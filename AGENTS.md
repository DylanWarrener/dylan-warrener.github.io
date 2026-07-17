# AGENTS.md

# Dylan Warrener Portfolio

This document contains the permanent engineering standards for this repository.

Task prompts describe **what** should be built.

This document describes **how** it should be built.

---

# Project Overview

This repository contains Dylan Warrener's professional software engineering portfolio.

Primary goals:

- Demonstrate software engineering ability.
- Showcase real-world projects.
- Build trust with recruiters, clients and employers.
- Maintain a premium, production-quality experience.
- Prioritise quality over quantity.

The Hero section is considered the visual source of truth for the entire website.

Every new section should feel like it belongs to the existing design system.

---

# Technology Stack

- Nuxt 3
- Vue 3
- TypeScript
- Vuetify 3
- Pinia
- Tailwind CSS
- SCSS

Always use the existing project stack.

Do not introduce new frameworks or packages unless explicitly approved.

---

# Development Philosophy

Follow these principles:

- Build only what is required today.
- Avoid premature abstraction.
- Prefer clarity over cleverness.
- Keep components small and focused.
- Extract reusable components only when duplication exists.
- Prefer composition over inheritance.
- Prefer type safety wherever practical.
- Keep implementation maintainable.
- Avoid unnecessary complexity.

---

# File Structure

Follow the existing feature-first project structure.

Keep related files together.

Create reusable components only where they are genuinely shared.

Do not reorganise the repository without approval.

---

# Design System

The Hero section is the design source of truth.

New sections must inherit:

- colour palette
- typography
- spacing
- gutters
- border radius
- shadows
- borders
- icon treatment
- chip styling
- card styling
- CTA styling

Do not introduce a different visual language.

Maintain visual consistency throughout the website.

---

# Component Standards

Prefer:

- small components
- reusable components
- typed props
- semantic HTML

Avoid:

- giant components
- duplicated markup
- unnecessary wrappers
- deeply nested layouts

Extract repeated UI into reusable components.

Do not abstract single-use layouts.

---

# Accessibility

All new sections must:

- use semantic HTML
- maintain correct heading hierarchy
- support keyboard navigation
- expose visible focus states
- avoid unnecessary tab stops
- hide decorative icons from assistive technology
- satisfy WCAG AA contrast requirements

Static cards should never appear interactive.

Only interactive elements should receive hover and focus behaviour.

---

# Responsive Behaviour

Every section must support:

- Desktop
- Tablet
- Mobile

Prevent:

- horizontal overflow
- clipped content
- inconsistent spacing

Verify layouts at:

- 1536px
- 1280px
- 1024px
- 768px
- 375px

---

# Content Rules

Never invent:

- statistics
- metrics
- certifications
- employers
- project outcomes
- business claims

Only use verified information supplied by the user.

If required information is missing:

Stop.

Ask concise questions.

Never fabricate content.

---

# Validation

Use the project's existing scripts.

Run:

npm run format:check

npm run lint:check

npm run typecheck

Only format files changed for the current task.

Do not reformat unrelated files.

Do not modify unrelated code.

---

# Development Server

Reuse an existing development server whenever possible.

Do not create temporary project directories.

Only request permissions that are required.

Follow the principle of least privilege.

---

# Git Workflow

Always begin work from the latest development branch.

Create a feature branch using:

feature/<task-name>

Examples:

feature/credibility-section

feature/featured-projects

feature/how-i-work

Never commit directly to:

- development
- testing
- production

Do not merge branches.

Do not delete branches.

Wait for user approval before:

- committing
- pushing
- creating pull requests
- merging

---

# Branch Strategy

development

- Active development.
- Receives completed feature branches.

testing

- Production-like environment.
- Used for full QA and validation.

production

- Public website.
- Must always remain production-ready.

Feature branches should always target development.

---

# Existing User Changes

Never overwrite existing user work.

If unrelated files have been modified:

- preserve the changes
- explain why they would need modification
- request approval before proceeding

---

# Task Completion Summary

At the end of every completed task provide:

## Summary

Brief description of what was implemented.

## Files Changed

List every file created or modified.

## Validation

State the results of:

- format check
- lint check
- type check

## Responsive Verification

Summarise responsive behaviour.

## Accessibility Verification

Summarise accessibility checks performed.

## Remaining Placeholders

List any approved placeholders still present.

## Deferred Work

List anything intentionally left for future tasks.

---

# General Behaviour

Be conservative.

Prefer maintainability over cleverness.

Do not make assumptions.

When uncertain:

Stop and ask.

Never silently change project architecture.

Always preserve consistency with the existing codebase.
