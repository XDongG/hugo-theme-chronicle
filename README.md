
# Hugo Theme Chronicle

An elegant, minimal Hugo theme built for daily journaling, micro-notes, and thoughtful writing.

[Live Demo](https://github.com/XDongG/hugo-theme-chronicle) · [Report Bug](https://github.com/XDongG/hugo-theme-chronicle/issues) · [Request Feature](https://github.com/XDongG/hugo-theme-chronicle/issues) · [中文](README.zh.md)

---

## ✨ Features

- **Typography-Centric:** Clean, readable serif fonts designed for an effortless reading experience.
- **Minimalist Layout:** Uncluttered interface focused purely on your content.
- **Flexible Content Types:** Built-in support for long-form Posts, daily Journals, and quick Notes.
- **Fast & Lightweight:** Zero heavy JavaScript dependencies; optimized for speed and high performance.
- **Responsive Design:** Looks beautifully detailed across desktop, tablet, and mobile screens.

---

## 🚀 Quick Start

### Prerequisites

Ensure you have [Hugo](https://gohugo.io/getting-started/quick-start/) (Extended version recommended) installed.

### Installation

1. Navigate to your Hugo site directory:
   ```bash
   cd my-hugo-site

1. Add `hugo-theme-chronicle` as a Git submodule:

   ```bash
   git submodule add https://github.com/XDongG/hugo-theme-chronicle.git themes/hugo-theme-chronicle
	```

2. Update your site configuration (`hugo.toml` or `config.toml`):
   ```TOML
   theme = "hugo-theme-chronicle"
   ```

## ⚙️ Configuration

An example configuration snippet for your `hugo.toml`:
   ```TOML
   baseURL = '[https://example.com/](https://example.com/)'
   languageCode = 'en-us'
   title = 'My Chronicle'
   theme = 'hugo-theme-chronicle'
   
   [params]
     author = "Your Name"
     avatar = "images/avatar.jpg"
     description = "A personal space for thoughts and notes."
     
     

    [[menu.main]]
      name = "Posts"
      url = "/posts/"
      weight = 1

    [[menu.main]]
      name = "Journal"
      url = "/journal/"
      weight = 2

    [[menu.main]]
      name = "Notes"
      url = "/notes/"
      weight = 3

    [[menu.main]]
      name = "About"
      url = "/about/"
      weight = 4
   ```

## 📝 Writing Content

Organize your content structure seamlessly:
```Plaintext
content/
├── posts/      # Long-form blog posts
├── journal/    # Daily logs and journals
├── notes/      # Quick thoughts and micro-blogging
└── about.md    # About page
```

## 📄 License

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE).
