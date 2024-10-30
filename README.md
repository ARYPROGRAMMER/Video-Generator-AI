<div align="center">
  <img src="https://socialify.git.ci/ARYPROGRAMMER/Video-Generator-AI/image?description=1&descriptionEditable=This%20Next.js%20application%20generates%20videos%20based%20on%20client-provided%20Queries&font=Bitter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Dark" alt="Video-Generator-AI" />

  # AI Video Generation SaaS Platform
  *Transform text into engaging videos with cutting-edge AI technology* ✨

  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-Latest-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
  [![GPT-4](https://img.shields.io/badge/GPT--4-Enabled-brightgreen?style=for-the-badge&logo=openai)](https://openai.com/)
  [![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge&logo=clerk)](https://clerk.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Postgres](https://img.shields.io/badge/Postgres-Latest-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
  [![DrizzleORM](https://img.shields.io/badge/Drizzle-ORM-green?style=flat-square)](https://orm.drizzle.team/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![ElevenLabs](https://img.shields.io/badge/Eleven_Labs-API-red?style=flat-square)](https://elevenlabs.io/)
  [![AssemblyAI](https://img.shields.io/badge/Assembly_AI-Latest-orange?style=flat-square)](https://www.assemblyai.com/)
  [![Gemini](https://img.shields.io/badge/Gemini-15_Flash-blue?style=flat-square)](https://gemini.com/)
  [![License](https://img.shields.io/github/license/ARYPROGRAMMER/Video-Generator-AI?style=flat-square)](LICENSE)
  [![Issues](https://img.shields.io/github/issues/ARYPROGRAMMER/Video-Generator-AI?style=flat-square)](https://github.com/ARYPROGRAMMER/Video-Generator-AI/issues)
  [![Pull Requests](https://img.shields.io/github/issues-pr/ARYPROGRAMMER/Video-Generator-AI?style=flat-square)](https://github.com/ARYPROGRAMMER/Video-Generator-AI/pulls)
  [![Contributors](https://img.shields.io/github/contributors/ARYPROGRAMMER/Video-Generator-AI?style=flat-square)](https://github.com/ARYPROGRAMMER/Video-Generator-AI/graphs/contributors)

  [Demo](https://your-demo-link.com) · [Report Bug](https://github.com/ARYPROGRAMMER/Video-Generator-AI/issues) · [Request Feature](https://github.com/ARYPROGRAMMER/Video-Generator-AI/issues)

  ![Demo](public/demo.gif)

</div>

---

## Overview

A modern **Next.js 15** application that transforms text queries into high-quality videos using cutting-edge AI technologies. Perfect for marketers, educators, and content creators looking to streamline their video content production.

<div align="center">
  [![Vercel Deployment](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FARYPROGRAMMER%2FVideo-Generator-AI)
</div>

### ✨ Key Features

- **AI Video Generation** - Transform text to engaging videos
- **Secure Authentication** - Powered by Clerk Auth
- **Text-to-Speech** - High-quality voice synthesis with Eleven Labs
- **Caption Generation** - Advanced audio processing with Assembly AI
- **Modern UI** - Beautiful interface with shadcn/ui
- **Database** - Robust data handling with Drizzle ORM
- **AI Integration** - GPT-4 and Gemini 15 Flash

<div align="center">
  <a href="https://www.producthunt.com/posts/Video-Generator-AI?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;video&#0045;generator" target="_blank">
    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=undefined&theme=light" alt="AI&#0032;Video&#0032;Generator - Transform&#0032;text&#0032;into&#0032;engaging&#0032;videos&#0032;with&#0032;AI | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
  </a>
</div>

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ARYPROGRAMMER/Video-Generator-AI.git
cd Video-Generator-AI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env.local` file in the root directory and add the following variables. **Please note**: You must provide your own API keys as placeholder values have been removed for security.

```plaintext
NEXT_PUBLIC_DRIZZLE_DATABASE_URL=postgresql://<your-database-url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_ELEVEN_LABS_API_KEY=<your-eleven-labs-api-key>
NEXT_PUBLIC_FIREBASE_API_KEY=<your-firebase-api-key>
NEXT_PUBLIC_CAPTION_API=<your-caption-api-key>
HUGGINGFACE_API_KEY=<your-huggingface-api-key>
NEXT_PUBLIC_OPENAI_API_KEY=<your-openai-api-key>
```

> ⚠️ **Warning**: The app may not function correctly if the developer’s API keys are expired or invalid. Please ensure your own valid API keys are added to avoid disruptions.

### 4. Run the App

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

---

## Contributing

We welcome contributions! Please fork the repository, make your changes, and submit a pull request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<div align="center">
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20AI%20Video%20Generator!&url=https%3A%2F%2Fgithub.com%2FARYPROGRAMMER%2FVideo-Generator-AI">
    <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FARYPROGRAMMER%2FVideo-Generator-AI" alt="Tweet">
  </a>
  <a href="https://discord.gg/yourdiscord">
    <img src="https://img.shields.io/discord/YOUR_DISCORD_ID?style=flat-square&logo=discord" alt="Discord">
  </a>
</div>

