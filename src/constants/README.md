# Website Content Constants

This folder contains all the hardcoded data/content for the PhysioCenter website. You can easily customize the website by editing these files without touching the component code.

## Files Overview

### `site.ts`
Contains general site information:
- Site name
- Tagline
- Description

### `hero.ts`
Hero section content:
- Badge text (e.g., "Trusted by 1000+ patients")
- Main heading
- Description text
- Button labels and links
- Success rate stat
- Image alt text

### `navigation.ts`
Navigation menu items:
- Nav links (Services, About, Contact)
- CTA button text and link

### `about.ts`
About section content:
- Section badge and heading
- Paragraphs describing the business
- Highlight badges
- Team features with icons

### `specialties.ts`
Services/Specialties section:
- Section heading and subheading
- Description
- List of all specialties with:
  - Title
  - Description
  - Icon (from lucide-react)
- CTA button

### `stats.ts`
Statistics section:
- Years of experience
- Number of patients treated
- Success rate
- Each stat has a value, label, and icon

### `contact.ts`
Contact section content:
- Section heading and description
- Form field labels and configuration
- Success message
- Contact information:
  - Address
  - Phone numbers
  - Email addresses
  - Business hours
- CTA buttons

## How to Customize

### Changing Text Content
Simply edit the string values in the respective files. For example, to change the hero heading:

```typescript
// In hero.ts
export const HERO_CONTENT = {
  heading: 'Your New Heading Here', // Change this
  // ...
}
```

### Changing Contact Information
Edit the `CONTACT_INFO` object in `contact.ts`:

```typescript
export const CONTACT_INFO = {
  address: {
    title: 'Visit Us',
    lines: ['Your Street', 'Your City', 'Your Zip'],
  },
  phone: {
    title: 'Call Us',
    lines: ['(123) 456-7890', 'Emergency: (098) 765-4321'],
  },
  // ...
}
```

### Adding/Removing Specialties
Edit the `SPECIALTIES_LIST` array in `specialties.ts`:

```typescript
import { YourIcon } from 'lucide-react';

export const SPECIALTIES_LIST = [
  {
    title: 'Your Service',
    description: 'Description of your service',
    icon: YourIcon, // Choose from lucide-react icons
  },
  // Add more or remove existing ones
]
```

### Changing Icons
Icons are imported from [lucide-react](https://lucide.dev/icons). Browse available icons and import the ones you want to use.

### Changing Statistics
Edit the `STATS_LIST` array in `stats.ts`:

```typescript
export const STATS_LIST = [
  {
    value: '20+',
    label: 'Years Experience',
    icon: Award,
  },
  // Modify values, labels, or icons
]
```

## Important Notes

- All files use TypeScript with `as const` for type safety
- Icons must be imported from `lucide-react`
- After making changes, the website will hot-reload in development mode
- For production, rebuild with `npm run build`
- Don't change the structure of the objects, only the values
- Keep the icon imports at the top of each file

## Need Help?

If you need to add new sections or make structural changes beyond just content updates, you'll need to modify the component files in `src/components/`.
