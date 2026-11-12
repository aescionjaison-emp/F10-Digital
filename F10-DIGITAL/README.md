# F10 DIGITAL — Enterprise Corporate Transformation Platform

> **"BUILDING DIGITAL GROWTH. Enabling Performance Transformation."**  
> Your Digital Growth & Performance Transformation Partner.

---

## 🌐 Live Production Deployments

| Platform | Production URL | Status | Details |
| :--- | :--- | :--- | :--- |
| **Firebase Hosting (Primary)** | **[https://f10-digital.web.app](https://f10-digital.web.app)** | `Active (HTTP 200)` | Global Firebase Edge CDN |
| **Firebase Hosting (Secondary)** | **[https://f10-digital.firebaseapp.com](https://f10-digital.firebaseapp.com)** | `Active (HTTP 200)` | Firebase App Domain |
| **GitHub Repository** | **[https://github.com/aescionjaison-emp/F10-Digital](https://github.com/aescionjaison-emp/F10-Digital)** | `Main Branch` | Automated CI/CD configured |
| **Local Development** | **[http://localhost:3005](http://localhost:3005)** | `Active (HTTP 200)` | Local Next.js 15 preview |

---

## 1. Firebase Configuration

Integrated in [`F10-DIGITAL/Frontend/src/lib/firebase.ts`](file:///c:/Users/USER/Desktop/F10%20digital/F10-DIGITAL/Frontend/src/lib/firebase.ts):

```typescript
export const firebaseConfig = {
  apiKey: "AIzaSyDUfTS2q1pyqLef4T2RhJYSKM6jw0quDNw",
  authDomain: "f10-digital.firebaseapp.com",
  projectId: "f10-digital",
  storageBucket: "f10-digital.firebasestorage.app",
  messagingSenderId: "474675545429",
  appId: "1:474675545429:web:f4701e50bb07c098945bdc",
  measurementId: "G-251EMZF58Y"
};
```

---

## 2. GitHub & CI/CD Deployment via `firebase login:ci`

### Manual Deployment via CLI
```bash
# Build static export
cd F10-DIGITAL/Frontend
npm run build

# Deploy to Firebase Hosting
cd ../..
firebase deploy --only hosting
```

### Automated GitHub Actions CI/CD Deployment
The repository includes [`.github/workflows/firebase-hosting-merge.yml`](file:///c:/Users/USER/Desktop/F10%20digital/.github/workflows/firebase-hosting-merge.yml).

To enable automated deploys on every `git push`:
1. Run `firebase login:ci` in your terminal.
2. Complete Google authentication in the browser and copy the printed token:
   ```
   ✔  Success! Use this token to authenticate on a CI server:
   1//0g...
   ```
3. Go to GitHub:  
   **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**
4. Add secret:
   - **Name**: `FIREBASE_TOKEN`
   - **Secret**: *(Paste your token)*
5. On every push to `main`, GitHub Actions will build and deploy automatically to `https://f10-digital.web.app`.

---

## 3. Brand Identity & Features

- **Colors**: Pure Bright White (`#FFFFFF`), Light Slate (`#F8FAFC`), Deep Obsidian (`#0F172A`), and Vibrant Royal Cobalt (`#2554D7`).
- **Hero Section**: Authentic Dubai aerial drone video with verified bottom-left badges (GoodFirms, Clutch, AppFutura, Google Partner).
- **Navigation Bar**: High-contrast glass header at top + Pure white on scroll.
- **Certifications**: Box-free floating HD vector logos with slow automatic slideshow and hover-pause.
- **Founder**: Daniel Vincent profile with authentic portrait, vision, and strategy booking.
- **Client Testimonials**: Verified case results from MindParcs USA, BlueWave Retail Canada, and Apex Healthcare UAE.
- **Interactive FAQs**: Accordion answers to core enterprise engagement questions.
