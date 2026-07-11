import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🏛️ Me.archive",
    pageTitleSuffix: " · Me.archive",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "asong56.github.io/Me.archive",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Gilda Display",        // Yohaku: serif with ink weight for titles
        body: "Open Sans",         // Clean, readable body
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fefefb",          // 纸张本白 — paper white
          lightgray: "#f0ede6",      // 浅中性 — light neutral
          gray: "#b8b0a3",           // 中性灰 — mid neutral
          darkgray: "#3d3833",       // 深文字 — dark text
          dark: "#1c1917",           // 最深 — near-black
          secondary: "#33A6B8",      // 浅葱 — Yohaku light-mode accent
          tertiary: "#7dd3dc",       // accent soft hover
          highlight: "rgba(51,166,184,0.08)",
          textHighlight: "rgba(51,166,184,0.18)",
        },
        darkMode: {
          light: "#1c1c1e",          // 暖灰夜色 — warm dark
          lightgray: "#2c2c2e",      // 深中性
          gray: "#636366",           // 中性灰
          darkgray: "#d1cdc7",       // 浅文字
          dark: "#f5f0ea",           // 亮白文字
          secondary: "#F596AA",      // 桃 — Yohaku dark-mode accent
          tertiary: "#f9b8c5",       // accent soft hover
          highlight: "rgba(245,150,170,0.08)",
          textHighlight: "rgba(245,150,170,0.18)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
