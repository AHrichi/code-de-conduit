# Code de la Route Tunisie 🚗 (Tunisian Driving License App)

A modern, comprehensive, and interactive desktop application built to help users study and prepare for the Tunisian driving license theoretical exam (Code de la Route).

## ✨ Features

- **Interactive Study Modules**: Comprehensive coverage of all 11 chapters of the Tunisian driving code, including priority rules, signs, overtaking, first aid, and point systems.
- **Hide Mode (Reading Mode)**: Test your memory by hiding the rule explanations and signs behind a frosted glass effect, only revealing them when you hover or click.
- **Memorization Tracking**: Mark individual rules as "memorized" to keep track of your progress.
- **Chapter Tests**: Dedicated quizzes at the end of each chapter with instant feedback and explanations.
- **Smart Dashboard**: Visual progress tracking, including overall completion percentage and chapter-specific mastery.
- **Mock Exams**: Realistic general quizzes drawing from all chapters to simulate the real exam environment.
- **Desktop Application**: Packaged as a standalone Linux desktop app (`.deb` and `.AppImage`) using Electron for offline studying.
- **Modern UI**: Beautiful UI built with Angular 19, Tailwind CSS, and FontAwesome, featuring dark mode support and smooth animations.

## 🚀 Tech Stack

- **Frontend Framework**: Angular 19 (Standalone Components, Signals for state management)
- **Styling**: Tailwind CSS & SCSS
- **Desktop Packaging**: Electron & Electron-Builder
- **Icons**: FontAwesome 6

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally (Web)
Run the Angular development server:
```bash
npm start
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running Locally (Electron)
To run the app inside an Electron window during development:
```bash
npm run electron:serve
```

## 📦 Building and Packaging

### Web Build
To build the application for web deployment:
```bash
npm run build
```
The build artifacts will be stored in the `app-build/` directory.

### Desktop Build (Linux)
To package the application into distributable Linux formats (`.deb` and `.AppImage`):
```bash
npm run electron:build
```
The packaged installers will be available in the `dist/` directory.

## 📂 Project Structure

- `src/app/data/`: Contains all the textual content, rules, and test datasets for the chapters.
- `src/app/pages/`: Contains the main routed components (Study, Dashboard, Test, Report).
- `src/app/components/`: Reusable UI components (Rule Cards, Sign Cards, Navigation).
- `src/app/store/`: Application state management using Angular Signals.
- `public/`: Static assets including the application icon.
- `main.js`: The Electron entry file.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📄 License
This project is for educational purposes.
