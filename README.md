# Nana Firdausi Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing projects, skills, and professional experience with a clean, accessible design.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Vite
- 🎯 React Router for smooth navigation
- 💅 Tailwind CSS for styling
- ♿ Accessibility-focused (WCAG compliant)
- 📱 Mobile-first responsive layout
- 🎭 Beautiful UI with Lucide React icons
- 📝 Contact form with validation
- 🚀 Optimized for production

## Pages

- **Home**: Hero section with introduction and core skills showcase
- **About**: Professional bio, skills, experience, and education
- **Projects**: Portfolio of featured and additional projects with live demos
- **Contact**: Functional contact form with validation and social links

## Tech Stack

- React 19.2.0
- Vite 7.2.5
- React Router DOM 7.12.0
- Tailwind CSS 4.1.18
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nanafirdausi/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Replace the placeholder resume
   - Replace `public/resume.pdf` with your actual resume PDF

4. Update personal information
   - Edit contact details in `src/Pages/Contact.jsx`
   - Update social media links in `src/Components/Footer.jsx`
   - Modify bio and experience in `src/Pages/About.jsx`
   - Add your projects in `src/Pages/Project.jsx`

5. Start development server
```bash
npm run dev
```

6. Build for production
```bash
npm run build
```

## Customization

### Colors
The portfolio uses a pink color scheme. To change the primary color, update the Tailwind classes:
- `bg-pink-500` → `bg-your-color-500`
- `text-pink-500` → `text-your-color-500`
- `hover:bg-pink-600` → `hover:bg-your-color-600`

### Logo
Replace `logo.png` in the root directory with your own logo.

### Favicon
Replace `public/vite.svg` with your custom favicon.

## Project Structure

```
my-portfolio/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── vite.svg           # Favicon
├── src/
│   ├── Components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeCardOne.jsx
│   │   └── HomeCardTwo.jsx
│   ├── Pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   └── Contact.jsx
│   ├── assets/          # Images and static files
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template with meta tags
└── package.json         # Dependencies

```

## Accessibility

This portfolio follows WCAG 2.1 guidelines:
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images
- Color contrast compliance

## License

This project is open source and available under the MIT License.

## Contact

Nana Firdausi
- Email: nanafirdausi@example.com
- LinkedIn: [linkedin.com/in/nanafirdausi](https://linkedin.com/in/nanafirdausi)
- GitHub: [github.com/nanafirdausi](https://github.com/nanafirdausi)

---

Built with ❤️ using React and Tailwind CSS
