# PhysioCenter Website Customization Guide

All website content has been extracted into easy-to-edit constant files. You can now customize the entire website by editing files in the `src/constants/` folder.

## 📁 Constants Folder Structure

```
src/constants/
├── README.md          # Detailed guide for editing constants
├── index.ts           # Central export file (don't modify)
├── site.ts            # Site name, tagline, description
├── hero.ts            # Hero section content
├── navigation.ts      # Navigation menu items
├── about.ts           # About section content
├── specialties.ts     # Services/specialties list
├── stats.ts           # Statistics (years, patients, success rate)
└── contact.ts         # Contact form and contact info
```

## 🎯 Quick Start Guide

### 1. Change Site Name and Tagline
Edit `src/constants/site.ts`:
```typescript
export const SITE_INFO = {
  name: 'YourBusinessName',
  tagline: 'Your tagline here',
  description: 'Your description',
}
```

### 2. Update Contact Information
Edit `src/constants/contact.ts`:
```typescript
export const CONTACT_INFO = {
  address: {
    title: 'Visit Us',
    lines: ['123 Your Street', 'Your City', 'ZIP Code'],
  },
  phone: {
    title: 'Call Us',
    lines: ['(555) 123-4567', 'Emergency: (555) 999-0000'],
  },
  email: {
    title: 'Email Us',
    lines: ['info@yourbusiness.com', 'appointments@yourbusiness.com'],
  },
  hours: {
    title: 'Hours',
    lines: ['Mon-Fri: 9AM - 6PM', 'Sat: 10AM - 4PM', 'Sun: Closed'],
  },
}
```

### 3. Modify Services/Specialties
Edit `src/constants/specialties.ts`:
```typescript
export const SPECIALTIES_LIST = [
  {
    title: 'Your Service Name',
    description: 'Description of your service',
    icon: YourIconName, // From lucide-react
  },
  // Add more services or remove existing ones
]
```

### 4. Update Statistics
Edit `src/constants/stats.ts`:
```typescript
export const STATS_LIST = [
  { value: '20+', label: 'Years Experience', icon: Award },
  { value: '10000+', label: 'Happy Clients', icon: Users },
  { value: '99%', label: 'Success Rate', icon: TrendingUp },
]
```

### 5. Change Hero Section
Edit `src/constants/hero.ts`:
```typescript
export const HERO_CONTENT = {
  badge: { text: 'Your badge text' },
  heading: 'Your Main Heading',
  description: 'Your description text',
  // ... more fields
}
```

## 🎨 Available Icons

Icons are from [Lucide React](https://lucide.dev/icons). Popular options:
- Medical: `Stethoscope`, `Heart`, `Activity`, `Pill`, `Syringe`
- Business: `Building`, `Users`, `Award`, `TrendingUp`
- Contact: `Phone`, `Mail`, `MapPin`, `Clock`
- Actions: `Calendar`, `Send`, `ArrowRight`, `CheckCircle2`

To use a new icon:
1. Visit https://lucide.dev/icons
2. Find the icon you want
3. Import it: `import { IconName } from 'lucide-react'`
4. Use it in your constant: `icon: IconName`

## 🔄 After Making Changes

### Development Mode
Changes will hot-reload automatically:
```bash
npm run dev
```

### Production Build
After customization, rebuild for deployment:
```bash
npm run build
```

## 📝 What Was Changed

All components have been updated to use constants instead of hardcoded values:
- ✅ `Hero.tsx` - Uses `HERO_CONTENT`
- ✅ `Header.tsx` - Uses `SITE_INFO`, `NAV_LINKS`, `CTA_BUTTON`
- ✅ `Footer.tsx` - Uses `SITE_INFO`, `NAV_LINKS`
- ✅ `About.tsx` - Uses `ABOUT_CONTENT`, `TEAM_FEATURES`
- ✅ `Specialties.tsx` - Uses `SPECIALTIES_CONTENT`, `SPECIALTIES_LIST`
- ✅ `Stats.tsx` - Uses `STATS_LIST`
- ✅ `Contact.tsx` - Uses `CONTACT_CONTENT`, `CONTACT_INFO`

## 🚀 Benefits

1. **Easy Updates**: Change content without touching component code
2. **Centralized**: All content in one place
3. **Type-Safe**: TypeScript ensures you don't break anything
4. **Maintainable**: Clear separation of content and presentation
5. **Reusable**: Same data used across multiple components

## ⚠️ Important Notes

- Don't change the structure of objects, only the values
- Keep icon imports at the top of each file
- Use `as const` at the end of constant objects (already done)
- Test changes locally before deploying

## 📚 Need More Help?

See `src/constants/README.md` for detailed documentation on each file.
