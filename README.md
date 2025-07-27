
# 🎰 Jackpot Application

A fast, smooth gaming platform where users can enjoy original games across devices. Built for performance, scalability, and clean code architecture.

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)  
2. [How to Run the Program](#how-to-run-the-program)  
3. [Application Structure](#application-structure)  
4. [Technology Stack and Design Choices](#technology-stack-and-design-choices)  
5. [Packages Used](#packages-used)  
6. [Main Files and Custom Hooks](#main-files-and-custom-hooks)  
7. [Key Considerations](#key-considerations)  
8. [Folder Structure](#folder-structure)  
9. [📷 Screenshots](#-screenshots)  
10. [📄 Full Documentation](#-full-documentation)

---

## 1. Project Overview

Jackpot is a high-performance gaming app offering a seamless, engaging experience with minimal load times. It’s optimized for cross-device play and built with maintainability and scalability in mind.

---

## 2. How to Run the Program

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Then open your browser at:  
- Home: http://localhost:3000/  
- Provider: http://localhost:3000/provider  
- Favorite: http://localhost:3000/favorite  

---

## 3. Application Structure

The project follows the **Atomic Design** pattern—components are organized as Atoms, Molecules, Organisms, and Templates. This makes the UI scalable, testable, and easy to maintain.

---

## 4. Technology Stack and Design Choices

- ⚛ **Zustand** for state management (lightweight and minimal boilerplate)
- 🔁 **React Query** for caching and async data management
- 🎨 **SCSS Modules** for scoped and maintainable styles
- ✨ **TypeScript** for type safety and better developer experience
- 🔐 **.env** files for secure configuration

---

## 5. Packages Used

| Package                       | Purpose                                                   |
|------------------------------|-----------------------------------------------------------|
| @tanstack/react-query        | Data fetching, caching, and syncing                       |
| axios                        | HTTP client for API calls                                 |
| clsx                         | Conditional class name management                         |
| next                         | React framework for SSR and routing                       |
| react                        | Core UI library                                           |
| react-dom                    | DOM rendering for React                                   |
| react-intersection-observer  | Viewport detection for elements                          |
| sass                         | Support for SCSS modules                                 |
| zustand                      | Minimal and scalable state management                    |

---

## 6. Main Files and Custom Hooks

| File/Folder                            | Purpose                                         |
|----------------------------------------|-------------------------------------------------|
| `hooks/PageHooks/*`                    | Page-specific business logic (custom hooks)     |
| `hooks/queries/*`                      | Data fetching hooks using React Query           |
| `store/actions.ts`                     | Zustand state update logic                      |
| `store/types.ts`                       | TypeScript types for the store                  |
| `store/gameStates.ts`                  | Zustand logic for game filters                  |
| `services/`                             | API service abstraction                         |
| `types/`                                | Global app type definitions                     |
| `baseLocalization/baseLocalization.ts` | String localization management                  |
| `constants/constants.ts`               | App-wide constants                              |
| `globalStyles/variables.ts`            | Device-related sizes                            |
| `globalStyles/colors.ts`               | Shared color variables                          |
| `helper/categorizeGamesByCategory.ts`  | Grouping logic for game categories              |
| `utils/debounce.ts`                    | Debounce utility for input                      |

---

## 7. Key Considerations

- The API returns inconsistent results when using the `provider` parameter.
- Sorting (ascending/descending) via the `order` parameter does not yield reliable results.
- The Favorite feature persists using Zustand and handles sorting/searching client-side.

---

## 8. Folder Structure

Follows Atomic Design:
- `components/atoms`
- `components/molecules`
- `components/organisms`
- `components/templates`
- With support from hooks, services, stores, helpers, and utils.

---

## 📷 Screenshots

<div style="display: flex; overflow-x: auto; gap: 1rem; padding: 1rem 0;">
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/1-jackpot-homepage.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/2-jackpot-search.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/3-jackpot-provider.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/4-jackpot-favorite-sort.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/5-jackpot-favorite-unsort.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/6-jackpot-category-sort.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/7-jackpot-catgeory-unsort.png?raw=true" width="300" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/8-jackpot-mobile.png?raw=true" width="150" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/9-jackpot-mobile.png?raw=true" width="150" />
  <img src="https://github.com/hack5hu/jackpot/blob/main/public/10-jackpot-mobile.png?raw=true" width="150" />
</div>

---

## 📄 Full Documentation

👉 [Download the full project architecture PDF](https://github.com/hack5hu/jackpot/blob/main/Jackpot%20Application%20-%20Setup%20and%20Architecture%20Overview%20-%20Priyanshu.pdf)
