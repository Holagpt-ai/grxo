# DJ Goldie XO - Official Website

Official website for DJ Goldie XO, featuring EDM and Latin House music from NYC. This project implements a modern, bilingual web experience with English and Spanish language support.

---

## Sprint 0: Internationalization Setup ✅

This initial sprint establishes the foundation for a fully bilingual website experience, enabling seamless language switching between English and Spanish without page reloads or URL path changes.

### What's Implemented

**Internationalization Infrastructure** has been fully configured using next-intl, providing cookie-based locale persistence and browser language detection. The system automatically detects the user's preferred language from their browser settings and falls back to English as the default locale when no preference is found.

**Language Toggle Component** appears in the top navigation bar, displaying EN/ES buttons with a distinctive gold glow effect on the active language. The toggle is fully accessible with proper ARIA labels and works seamlessly on both desktop and mobile devices.

**Translation System** manages all user-facing text through JSON files located in the messages directory. The English translations (en.json) serve as the primary source, with Spanish translations (es.json) providing complete coverage of all interface elements including navigation items, hero section content, and footer text.

**Navigation Component** implements a sticky header with responsive design, featuring the GXO logo, main navigation links, language toggle, and social media icon placeholders. The mobile menu provides a collapsible interface for smaller screens.

**Design Foundation** establishes the visual identity with a dark theme featuring black backgrounds, neon accent colors, and gold highlights. The color palette uses amber and yellow gradients to create the signature abstract, high-energy aesthetic inspired by the project requirements.

---

## Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Frontend Framework | React 19 | Modern UI development with latest features |
| Routing | Wouter | Lightweight client-side routing |
| Styling | Tailwind CSS 4 | Utility-first responsive design |
| Internationalization | next-intl | Translation management and locale handling |
| State Management | js-cookie | Persistent locale storage |
| UI Components | shadcn/ui | Pre-built accessible components |
| Build Tool | Vite | Fast development and optimized builds |
| Package Manager | pnpm | Efficient dependency management |

---

## Project Structure

The codebase follows a modular architecture designed for scalability and maintainability.

```
goldie-xo-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── LanguageToggle.tsx
│   │   │   └── Navigation.tsx
│   │   ├── contexts/        # React context providers
│   │   │   ├── IntlContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/             # Utility functions
│   │   │   └── i18n.ts      # i18n configuration
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx          # Root application component
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles and theme
│   └── index.html           # HTML template
├── messages/
│   ├── en.json              # English translations
│   └── es.json              # Spanish translations
├── server/
│   └── index.ts             # Express server for production
├── package.json             # Dependencies and scripts
└── tailwind.config.ts       # Tailwind configuration
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (install via `npm install -g pnpm`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Holagpt-ai/grxo.git
cd grxo
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

The build output will be generated in the `dist/` directory.

### Running Production Build

Start the production server:

```bash
pnpm start
```

---

## Deployment to Vercel

Vercel provides seamless deployment for this React application with automatic builds and global CDN distribution.

### Step 1: Prepare Your Repository

Ensure your code is pushed to GitHub at https://github.com/Holagpt-ai/grxo.git (already completed).

### Step 2: Connect to Vercel

1. Visit [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Select the **Holagpt-ai/grxo** repository from the list
4. Vercel will automatically detect the project settings

### Step 3: Configure Build Settings

Vercel should auto-detect the configuration, but verify these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install` |
| Node Version | 18.x |

### Step 4: Environment Variables

No environment variables are required for Sprint 0. Future sprints may require API keys or configuration values.

### Step 5: Deploy

Click **"Deploy"** and Vercel will:
- Install dependencies
- Run the build command
- Deploy to a global CDN
- Provide a production URL (e.g., `grxo.vercel.app`)

### Step 6: Custom Domain (Optional)

To use a custom domain:
1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

---

## Internationalization Notes

### How It Works

The internationalization system operates through a combination of React context, cookie storage, and dynamic message loading. When a user visits the site, the system checks for a saved language preference in cookies. If no cookie exists, it examines the browser's language settings to determine the appropriate locale. The selected language is then stored in a cookie that persists for 365 days, ensuring consistent language preference across sessions.

### Adding New Translations

To add new translatable content:

1. **Add keys to translation files** in `messages/en.json` and `messages/es.json`:

```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Section description text"
  }
}
```

2. **Use translations in components** with the `useTranslations` hook:

```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('newSection');
  
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Adding New Languages

To support additional languages beyond English and Spanish:

1. Update the locale configuration in `client/src/lib/i18n.ts`:

```typescript
export const locales = ['en', 'es', 'fr'] as const; // Add 'fr' for French
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français', // Add French
};
```

2. Create a new translation file `messages/fr.json` with all required keys

3. The language toggle will automatically include the new language option

---

## Design System

### Color Palette

The design system employs a dark aesthetic with vibrant accent colors to create the signature nightlife atmosphere.

| Color | Usage | Tailwind Class |
|-------|-------|----------------|
| Black (`#000000`) | Primary background | `bg-black` |
| Amber 400 (`#fbbf24`) | Primary accent, active states | `text-amber-400` |
| Yellow 500 (`#eab308`) | Secondary accent, gradients | `text-yellow-500` |
| Gray 300 (`#d1d5db`) | Body text | `text-gray-300` |
| Gray 400 (`#9ca3af`) | Muted text | `text-gray-400` |

### Typography

The typography system combines **Montserrat** for headings and **Roboto** for body text, creating a modern and readable hierarchy.

- **Display Font:** Montserrat (weights: 400, 500, 600, 700, 800, 900)
- **Body Font:** Roboto (weights: 300, 400, 500)

### Visual Effects

**Gold Glow Effect** is applied to active language toggles and interactive elements using the shadow utility:

```css
shadow-[0_0_15px_rgba(251,191,36,0.5)]
```

**Gradient Animation** creates dynamic text effects on the hero headline:

```css
bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400
animate-gradient
```

---

## Code Quality Standards

This project maintains strict code quality standards to ensure clean, maintainable, and production-ready code.

### No Zombie Code

The codebase contains **zero unused imports, variables, or placeholder code**. Every line serves a purpose and contributes to the application's functionality.

### No External IDE References

There are **no references to Replit, CodeSandbox, or any other external IDE**. The code is fully portable and can be run in any standard Node.js environment.

### Modular Architecture

Components are designed to be **reusable and composable**, following React best practices for separation of concerns and single responsibility.

### Type Safety

TypeScript is used throughout the project to provide **compile-time type checking** and improved developer experience.

---

## Future Sprints

The following sprints will build upon this internationalization foundation:

**Sprint 1: Hero Section & Visual Identity** will implement the abstract neon paint-splatter aesthetic with the main hero image, animated gold heart logo, and primary call-to-action buttons.

**Sprint 2: About & Music Pages** will create the artist biography section and music player integration with Spotify and SoundCloud embeds.

**Sprint 3: Book & Merch Pages** will develop the book showcase with purchase options and merchandise grid with product cards.

**Sprint 4: Podcast & Tour Dates** will implement the podcast episode listing with audio players and tour dates calendar with ticket links.

**Sprint 5: Contact & Social Integration** will add the contact form with booking inquiries and full social media integration across all platforms.

**Sprint 6: Performance & SEO Optimization** will focus on image optimization, lazy loading, meta tags, and analytics integration.

---

## Contributing

This is a private project for DJ Goldie XO. For inquiries or collaboration opportunities, please contact the development team.

---

## License

All rights reserved. © 2026 DJ Goldie XO

---

## Repository

**GitHub:** https://github.com/Holagpt-ai/grxo.git

**Deployment:** Vercel (instructions above)

---

## Support

For technical issues or questions about the codebase, please open an issue on the GitHub repository.
