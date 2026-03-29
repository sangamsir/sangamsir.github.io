<div align="center">

<img src="https://img.shields.io/badge/MindriX-मन%20की%20विद्या-D4AF37?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0Q0QUYzNyIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6Ii8+PC9zdmc+" alt="MindriX">

# 🦅 MindriX — मन की विद्या

### *भारत का #1 Hindi Psychology Self-Mastery App*

**90-Day Journey · Daily Lessons · AI Tutor · Tools Hub**

[![Live App](https://img.shields.io/badge/🌐%20Live%20App-sangamsir.github.io%2FMindriX-D4AF37?style=flat-square)](https://sangamsir.github.io/MindriX)
[![Creator](https://img.shields.io/badge/👤%20Creator-@SangamSir-gold?style=flat-square)](https://youtube.com/@SangamSirOfficial)
[![Instagram](https://img.shields.io/badge/📷%20Instagram-@mindrix__psychologylearning-E1306C?style=flat-square)](https://instagram.com/mindrix_psychologylearning)
[![Telegram](https://img.shields.io/badge/✈️%20Telegram-@mindrixbysangamsir-2CA5E0?style=flat-square)](https://t.me/mindrixbysangamsir)
[![License](https://img.shields.io/badge/📜%20License-MIT%20Modified-green?style=flat-square)](LICENSE.md)

---

</div>

## 📖 About MindriX

**MindriX** एक Hindi-language psychology education और self-development Progressive Web App है जो Hindi-speaking students और working professionals के लिए बनाई गई है।

> *"मन को जानो, जीवन बदलो।"* — @SangamSir

MindriX एक **90-Day structured psychology curriculum** follow करती है जिसमें daily lessons, quizzes, tools, और AI tutor शामिल हैं — सब कुछ Hindi में।

---

## ✨ Features

### 📚 Core Learning
| Feature | Description |
|---------|-------------|
| **90-Day Curriculum** | Freud से Flow State तक — 90 structured psychology lessons |
| **Daily Lessons** | हर day एक नया topic · Sections · Quiz · Completion tracking |
| **Progress Ring** | Visual 90-day journey tracker |
| **Streak System** | Daily streak + Streak Freeze feature |
| **Badges & XP** | Earn badges as you complete milestones |

### 🛠️ Tools Hub
| Tool | Description |
|------|-------------|
| **AI Psychology Tutor** | Anthropic Claude-powered Hindi psychology Q&A |
| **CBT Journal** | Cognitive Behavioral Therapy thought journal |
| **Gratitude Journal** | Daily 3-point gratitude practice |
| **Mood Tracker** | Daily mood + sleep logging with charts |
| **Habit Tracker** | Custom habit building with streaks |
| **Breathing Exercises** | 4-7-8, Box Breathing, Calm Breathing |
| **Anger Thermometer** | Rate anger 1–10 → get techniques |
| **Life Wheel** | 8-dimension life assessment (SVG chart) |
| **Stress Test (PSS)** | Perceived Stress Scale assessment |
| **Focus Timer** | Pomodoro-based study timer |
| **Vision Board** | Personal goals visualization |
| **Brain Quiz** | Random psychology trivia challenge |
| **Memory Game** | Card matching brain game |
| **Reaction Test** | Neural speed reaction game |

### ❤️ Save & Export
| Feature | Description |
|---------|-------------|
| **Like System** | Save quotes, affirmations, cognitive biases, mindful moments |
| **Saved Panel** | All liked items in one place, grouped by type |
| **Export System** | Export lesson + journal + saved items + progress as beautiful HTML |

### 👑 Premium System
| Feature | Description |
|---------|-------------|
| **Premium Lessons** | Dark Psychology, Body Language, NLP, Advanced topics |
| **UPI Payment** | Direct UPI payment → UTR verification → Activation Code |
| **Coin System** | Earn coins via referrals → unlock premium free |
| **Referral Program** | Share code → earn 10 coins per referral |
| **Coin Shop** | Buy themes, badges with coins |
| **Wheel of Fortune** | Daily spin for bonus coins |
| **Marketplace** | Publish & sell psychology resources |

### 🔐 Authentication & Sync
| Feature | Description |
|---------|-------------|
| **Firebase Auth** | Email/Password + Google Sign-In |
| **Cloud Sync** | Real-time progress sync across devices |
| **Offline Support** | Full offline functionality |
| **Forgot Password** | Firebase password reset flow |

### 🎨 Personalization
| Feature | Description |
|---------|-------------|
| **12 Themes** | Dark, Light, Midnight Blue, Emerald, Purple, Rose, Sunset, Arctic, Saffron, Ocean, Sakura, Parchment, AMOLED |
| **Widget Customizer** | Show/hide home screen widgets |
| **Auto Dark Mode** | Time-based theme switching |
| **Sound Effects** | 8 custom SFX |
| **Background Music** | Ambient study music |

---

## 🚀 Tech Stack

```
Frontend    : Pure HTML5 + CSS3 + Vanilla JavaScript (Single file)
Backend     : Firebase (Auth + Realtime Database)
AI          : Anthropic Claude API (via Cloudflare Worker proxy)
Hosting     : GitHub Pages
Push Notif  : PushAlert
PWA         : Service Worker + Web Manifest
```

---

## 📁 Project Structure

```
MindriX/
├── index.html          # 🦅 Complete app — single file (~1.8MB)
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (offline support)
├── README.md           # This file
└── LICENSE.md          # Copyright & license
```

> **Note:** MindriX is a **single-file PWA** — the entire app (HTML + CSS + JS + all 90 lessons) is in `index.html`. This is by design for maximum offline reliability and GitHub Pages compatibility.

---

## ⚙️ Setup & Deployment

### Prerequisites
- GitHub account
- Firebase project (free tier works)
- Anthropic API key (for AI Tutor)
- Cloudflare account (for API proxy — keeps keys safe)

### 1. Firebase Setup
```
1. firebase.google.com → Create project
2. Authentication → Enable: Email/Password + Google
3. Realtime Database → Create → Start in test mode
4. Database Rules:
   {
     "rules": {
       "users": {
         "$uid": { ".read": "$uid === auth.uid", ".write": "$uid === auth.uid" }
       }
     }
   }
5. Project Settings → Add Web App → Copy config
6. Paste config in index.html at MX_FB_CONFIG
```

### 2. Cloudflare Worker (AI Tutor Proxy)
```javascript
// worker.js — deploy at Cloudflare Workers
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    const body = await request.json();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
```

### 3. GitHub Pages Deploy
```bash
git clone https://github.com/sangamsir/MindriX.git
cd MindriX
# Add your index.html, manifest.json, sw.js
git add .
git commit -m "🦅 Deploy MindriX"
git push origin main
# Enable GitHub Pages: Settings → Pages → main branch → /root
```

---

## 🔑 Key localStorage Keys

| Key | Description |
|-----|-------------|
| `mv1.3.5.7.1.0` | Main state (streak, done, pts, coins, etc.) |
| `mv_prefs` | User preferences (theme, sfx, notifications) |
| `mx_cbt` | CBT journal entries |
| `mx_grat_YYYY-MM-DD` | Daily gratitude entries |
| `mv_habits2` | Habit tracker data |
| `mx_liked_v1` | Liked/saved quotes & insights |
| `mx_prem_v2` | Premium activation data |
| `mv_stress` | Stress test history |
| `mv_lifewheel` | Life wheel assessment |
| `mx_mood_v1` | Mood log |

---

## 📊 Curriculum Overview

```
Days 01–10  : Psychology Foundations — History, Freud, Jung
Days 11–20  : Emotions & Mindset — EQ, Anger, Growth Mindset
Days 21–30  : Social Psychology — Influence, Relationships, Bias
Days 31–40  : Cognitive Science — Memory, Attention, Decision Making
Days 41–50  : Positive Psychology — Flow, Happiness, Resilience
Days 51–60  : Applied Psychology — Sleep, Willpower, Habits
Days 61–70  : Advanced Topics — Intuition, Ego, Trauma
Days 71–80  : Communication — Body Language, Persuasion, NLP*
Days 81–90  : Mastery & Identity — Purpose, Leadership, Legacy

*Premium content
```

---

## 👑 Premium Content

Premium activation via:
1. **UPI Payment** (₹149 lifetime) → UTR → WhatsApp → Activation Code
2. **Referral Coins** (149 coins = free premium)
3. **Activation Code** (direct entry)

---

## 🛡️ Security Features

- Activation codes are email-bound (each code works for one account only)
- Brute-force protection: 3 wrong attempts → 60-minute lockout
- Admin code generator requires master key + password
- Cloudflare Worker proxy keeps Anthropic API key server-side

---

## 📱 PWA Installation

MindriX is a full Progressive Web App:

**Android Chrome:**
> Tap ⋮ menu → "Add to Home Screen" → Install

**iPhone Safari:**
> Tap Share → "Add to Home Screen" → Add

---

## 🤝 Contributing

This is a **personal project** by @SangamSir. The source code is **not open for contributions or forks** without explicit permission.

If you find a bug or have a suggestion:
- Telegram: [@mindrixbysangamsir](https://t.me/mindrixbysangamsir)
- Instagram: [@mindrix_psychologylearning](https://instagram.com/mindrix_psychologylearning)

---

## 📜 License

```
Copyright (c) 2026 Sangam Rajput (@SangamSir)

Personal & Educational use only.
Commercial use, forking, and redistribution strictly prohibited.
See LICENSE.md for full terms.
```

---

## 🌐 Connect

<div align="center">

| Platform | Link |
|----------|------|
| 📺 YouTube | [@SangamSirOfficial](https://youtube.com/@SangamSirOfficial) |
| 📷 Instagram | [@mindrix_psychologylearning](https://instagram.com/mindrix_psychologylearning) |
| ✈️ Telegram | [@mindrixbysangamsir](https://t.me/mindrixbysangamsir) |
| 🌐 App | [sangamsir.github.io/MindriX](https://sangamsir.github.io/MindriX) |

</div>

---

<div align="center">

**🦅 MindriX — मन को जानो, जीवन बदलो।**

*Made with ❤️ by [@SangamSir](https://youtube.com/@SangamSirOfficial) · © 2024–2025*

</div>
