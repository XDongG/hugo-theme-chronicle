# Hugo Theme Chronicle

一款专为日常日志、碎片随手记与深度写作打造的优雅极简 Hugo 主题。

[在线演示](https://github.com/XDongG/hugo-theme-chronicle) · [提交 Bug](https://github.com/XDongG/hugo-theme-chronicle/issues) · [反馈需求](https://github.com/XDongG/hugo-theme-chronicle/issues) · [english](README.md)

---

## ✨ 主题特性

- **排版至上：** 经过精细微调的衬线字体与优雅间距，带来如纸质书般舒适惬意的阅读体验。
- **极简设计：** 摒弃繁复装饰与冗余视觉元素，让读者全神贯注于文字本身。
- **多类型内容支持：** 原生支持深度文章（Posts）、日常日志（Journal）与随手记（Notes）。
- **轻量高效：** 无重型 JavaScript 依赖，加载迅速，性能极佳。
- **响应式布局：** 完美适配 Desktop、Tablet 及 Mobile 各类屏幕尺寸。

---

## 🚀 快速开始

### 前置要求

请确保本地已安装 [Hugo](https://gohugo.io/getting-started/quick-start/)（建议使用 Extended 扩展版）。

### 安装步骤

1. 进入你的 Hugo 站点根目录：
   ```bash
   cd my-hugo-site
   ```

1. 将 `hugo-theme-chronicle` 作为 Git 子模块引入：
   ```Bash
   git submodule add https://github.com/XDongG/hugo-theme-chronicle.git themes/hugo-theme-chronicle
   ```

2. 修改你的站点配置文件（`hugo.toml` 或 `config.toml`）：
   ```TOML
   theme = "hugo-theme-chronicle"
   ```

## ⚙️ 示例配置

在 `hugo.toml` 中添加以下基础配置：
   ```TOML
   baseURL = '[https://example.com/](https://example.com/)'
   languageCode = 'zh-cn'
   title = '我的编年史'
   theme = 'hugo-theme-chronicle'

   [params]
     author = "你的名字"
     avatar = "images/avatar.jpg"
     description = "记录生活与思考的个人空间"

   [[menu.main]]
     name = "文章"
     url = "/posts/"
     weight = 1

   [[menu.main]]
     name = "日志"
     url = "/journal/"
     weight = 2

   [[menu.main]]
     name = "随手记"
     url = "/notes/"
     weight = 3

   [[menu.main]]
     name = "关于"
     url = "/about/"
     weight = 4
   ```

## 📝 内容创作目录结构

建议按以下目录组织你的内容：
   ```Plaintext
   content/
   ├── posts/      # 深度长文/博客文章
   ├── journal/    # 随笔与日常日志
   ├── notes/      # 灵感闪现与碎片记录
   └── about.md    # 关于页面
   ```

## 📄 开源协议

本项目遵循 [MIT 开源协议](https://www.google.com/search?q=LICENSE)。