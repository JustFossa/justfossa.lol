# JustFossa Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases the work and expertise of JustFossa, a self-taught software engineer from the Czech Republic.

## 🚀 Features

- **Modern Design**: Clean, minimal design with dark theme
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations using Framer Motion
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper semantic markup
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn style)
│   ├── navigation.tsx    # Navigation component
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── projects-section.tsx # Projects section
│   ├── expertise-section.tsx # Expertise section
│   └── testimonials-section.tsx # Testimonials section
├── lib/                  # Utility functions
├── design.json           # Design system configuration
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Design System

The portfolio follows a comprehensive design system defined in `design.json`:

- **Colors**: Dark theme with orange accent (#ff6b35)
- **Typography**: Inter font family with responsive scale
- **Spacing**: Consistent spacing system
- **Components**: Reusable component patterns
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

### Home Page (`/`)

- Hero section with animated text and marquee
- About section with glitched text effect
- Projects showcase with masonry grid
- Expertise areas with skill cards
- Testimonials carousel

### About Page (`/about`)

- Detailed work history
- Design process steps
- Community work and achievements

### Projects Page (`/projects`)

- Filterable project grid
- Project details with technologies
- Live and GitHub links

### Contact Page (`/contact`)

- Contact form with validation
- Contact information
- Social media links
- Availability status

## 🎯 Key Features

### Animations

- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Text glitch effects
- Infinite marquee animations

### Responsive Design

- Mobile-first approach
- Responsive typography
- Adaptive layouts
- Touch-friendly interactions

### Performance

- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- Optimized fonts

## 🔧 Customization

### Colors

Update the color scheme in `tailwind.config.js` and `design.json`:

```javascript
colors: {
  primary: {
    background: "#0a0a0a",
    text: "#ffffff",
    accent: "#ff6b35",
    // ... other colors
  }
}
```

### Content

- Update personal information in component files
- Replace project data in `projects-section.tsx`
- Modify testimonials in `testimonials-section.tsx`
- Update contact information in `contact/page.tsx`

### Styling

- Modify global styles in `app/globals.css`
- Update component styles using Tailwind classes
- Customize animations in `tailwind.config.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from [Devraj Chatribin's portfolio](https://devrajchatribin.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animation library [Framer Motion](https://www.framer.com/motion/)
- UI patterns from [shadcn/ui](https://ui.shadcn.com/)

## 📞 Contact

- **Website**: [justfossa.lol](https://justfossa.lol)
- **Email**: hello@justfossa.lol
- **GitHub**: [@justfossa](https://github.com/justfossa)
- **LinkedIn**: [JustFossa](https://linkedin.com/in/justfossa)
