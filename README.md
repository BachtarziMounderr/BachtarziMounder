# Bachtarzi Mounder - Personal Portfolio

A clean, modern, and professional personal portfolio website showcasing skills, projects, and expertise in Data Science, Artificial Intelligence, and Web Development.

##  Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI/UX**: Clean, minimalist design with professional color palette
- **Smooth Animations**: Fade-in effects and smooth scrolling between sections
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Sections**: Hero, About, Skills, Projects, Contact, and Footer
- **Easy Customization**: Simple to modify and extend with new projects

##  Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: Ready for any static hosting service

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Personal background and interests
3. **Skills**: Technical expertise organized by category
4. **Projects**: Showcase of featured projects (including Movie Recommendation System)
5. **Contact**: Contact information and contact form
6. **Footer**: Copyright and quick navigation

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Steps
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bachtarzi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Name, title, and description
- `src/components/About.js` - Personal background
- `src/components/Contact.js` - Contact details and social links
- `src/components/Projects.js` - Project details and links

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for additional custom styles
- Adjust component classes for layout changes

### Adding New Projects
1. Open `src/components/Projects.js`
2. Add new project object to the `projects` array
3. Include title, description, technologies, and links
4. The component will automatically render new projects

### Profile Photo
Replace the placeholder "BM" initials in the Hero section with your actual photo:
1. Add your photo to `public/` directory
2. Update the Hero component to use an `<img>` tag instead of the initials div

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes


##  Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects showcase
│   ├── Contact.js      # Contact section
│   └── Footer.js       # Footer
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Future Enhancements

- [ ] Blog section for sharing insights
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Project filtering by technology
- [ ] Integration with external APIs
- [ ] Analytics and performance monitoring

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: bachtarzi.mounder@example.com
- **LinkedIn**: linkedin.com/in/bachtarzi-mounder
- **GitHub**: github.com/bachtarzi-mounder

---

Built with ❤️ by Bachtarzi Mounder
