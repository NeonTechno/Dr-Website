# Decentralized Rights Protocol - Website

## 🚀 DRP 2.0 - Enhanced with NVIDIA AI Verification

Welcome to the official website repository for the **Decentralized Rights Protocol (DRP)**. This version includes comprehensive economic pages, NVIDIA AI verification integration, and a modern, professional design.

## 🌐 Live Sites

- **Main Site**: https://decentralizedrights.com
- **App Portal**: https://app.decentralizedrights.com
- **Explorer**: https://explorer.decentralizedrights.com
- **API**: https://api.decentralizedrights.com

## ✨ What's New in Version 2.0

### 🎨 Modern Professional Design
- **Eliminated amateur purple backgrounds** - Replaced with professional blue/indigo gradients
- **Consistent branding** - Unified color scheme across all pages
- **Enhanced typography** - Improved readability and hierarchy
- **Smooth animations** - Subtle transitions for better UX

### 📊 New Economic Pages
- **Micro Economics** ()/economics/micro) - Token utility, supply & demand, transaction costs, incentive mechanisms
- **Macro Economics** ()/economics/macro) - Global impact, adoption metrics, economic forecasts
- **Interactive calculators** - Token value and economic projections
- **NVIDIA AI verification** - All economic data is AI-authenticated

### 🤖 NVIDIA Integration
- **Content Verification** - AI-powered authentication for all pages
- **Predictive Analytics** - Economic forecasts powered by NVIDIA
- **Real-time Validation** - Continuous data verification

### 🔧 Technical Improvements
- **TypeScript** - Full type safety across all components
- **Next.js 14** - Latest features with App Router
- **TailwindCSS** - Maintainable utility-first styling
- **Vercel Optimized** - Ready for seamless deployment

## 📁 Project Structure

```
Dr-Website/
├── app/
│   ├── economics/
│   │   ├── micro/
│   │   │   └── page.tsx          # Micro Economics
│   │   ├── macro/
│   │   │   └── page.tsx          # Macro Economics
│   │   └── layout.tsx            # Economics Layout
│   ├── app-portal/
│   │   └── page.tsx              # App Dashboard
│   ├── explorer/
│   │   └── page.tsx              # Block Explorer
│   ├── layout.tsx                # Root Layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global Styles
│   └── not-found.tsx             # 404 Page
├── .env.example                  # Environment Template
├── next.config.js                # Next.js Configuration
├── vercel.json                   # Vercel Configuration
├── tailwind.config.ts            # Tailwind Configuration
├── tsconfig.json                 # TypeScript Configuration
└── package.json                  # Dependencies
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- NVIDIA API Key (optional for full features)

### Installation

```bash
# Clone the repository
git clone https://github.com/NeonTechno/Dr-Website.git
cd Dr-Website

# Install dependencies
npm install
# or
yarn install

# Copy environment file
cp .env.example .env.local

# Add your NVIDIA API key to .env.local
NVIDIA_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository: `NeonTechno/Dr-Website`
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**
   - Add `NVIDIA_API_KEY` from your `.env.local` file
   - Add any other required variables

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live!

4. **Custom Domain (Optional)**
   - Add `app.decentralizedrights.com` in Vercel project settings
   - Configure DNS records with your domain provider

### Other Platforms

The project is configured for standalone output and can be deployed to:
- AWS Amplify
- Netlify
- Cloudflare Pages
- Any Node.js server

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NVIDIA_API_KEY` | NVIDIA API key for verification | Yes | - |
| `NVIDIA_VERIFICATION_API_URL` | NVIDIA verification endpoint | No | `https://api.nvidia.com/verify` |
| `NEXT_PUBLIC_APP_NAME` | Application name | No | `Decentralized Rights Protocol` |
| `NEXT_PUBLIC_NETWORK` | Blockchain network | No | `mainnet` |
| `NEXT_PUBLIC_ENABLE_AI_VERIFICATION` | Enable AI verification | No | `true` |

### Subdomains

The project includes routing configuration for subdomains:

- `/` → decentralizedrights.com
- `/app/*` → app.decentralizedrights.com
- `/explorer/*` → explorer.decentralizedrights.com
- `/api/*` → api.decentralizedrights.com

## 📊 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/app-portal` | App Dashboard - Submit proofs, track rights |
| `/explorer` | Block Explorer - View blocks and transactions |
| `/economics/micro` | Micro Economics - Token utility, supply & demand |
| `/economics/macro` | Macro Economics - Global impact, forecasts |

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | #2563eb | Buttons, headers, accents |
| Indigo | #4f46e5 | Gradients, secondary elements |
| Success Green | #16a34a | Verified states, success messages |
| Warning Yellow | #d97706 | Pending states, warnings |
| Danger Red | #dc2626 | Errors, failed states |
| Neutral Gray | #6b7280 | Text, borders, backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Sizes**: xs (0.75rem), sm (0.875rem), base (1rem), lg (1.125rem), xl (1.25rem), 2xl (1.5rem), 3xl (1.875rem), 4xl (2.25rem), 5xl (3rem)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

Decentralized Rights Protocol - All Rights Reserved

## 🙏 Acknowledgments

- **NVIDIA** - AI verification and authentication
- **Vercel** - Hosting and deployment
- **Next.js** - React framework
- **TailwindCSS** - Utility-first CSS
- **TypeScript** - Type safety

## 📞 Support

For issues or questions:

1. Check the [Documentation](https://docs.decentralizedrights.com)
2. Open an issue on [GitHub](https://github.com/NeonTechno/Dr-Website/issues)
3. Join our [Discord](https://discord.gg/drp)

---

**Built with ❤️ by the Decentralized Rights Protocol Team**

*Last Updated: July 11, 2026*