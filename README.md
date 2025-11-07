# Decentralized Rights Protocol - Website

Welcome to the official website repository for the Decentralized Rights Protocol.

## 🌐 Live Sites

- **Main Site**: https://decentralizedrights.com
- **Explorer**: https://explorer.decentralizedrights.com
- **API**: https://api.decentralizedrights.com
- **App**: https://app.decentralizedrights.com

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
Dr-Website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── not-found.tsx    # 404 page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── vercel.json          # Vercel routing config
├── tailwind.config.ts   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## 🔧 Configuration

### Subdomains

The project includes routing configuration for subdomains in both `next.config.js` and `vercel.json`:

- `/explorer/*` → explorer.decentralizedrights.com
- `/api/*` → api.decentralizedrights.com
- `/app/*` → app.decentralizedrights.com

### Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure DNS in your domain provider:
   - Main: decentralizedrights.com → Vercel
   - Explorer: explorer.decentralizedrights.com → Separate Vercel project
   - API: api.decentralizedrights.com → Separate Vercel project
   - App: app.decentralizedrights.com → Separate Vercel project

## 📝 License

Decentralized Rights Protocol - All Rights Reserved

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
