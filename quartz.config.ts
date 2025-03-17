import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🎓 Edidact",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: '<G-DLD908YWKW>',
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Oswald",
        body: "Nunito",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f9f9f9",
          lightgray: "#e0e0e0",
          gray: "#b0b0b0",
          darkgray: "#333333",
          dark: "#1a1a1a",
          secondary: "#7c4dff",
          tertiary: "#b39ddb",
          highlight: "rgba(125, 77, 255, 0.1)",
          textHighlight: "#7D4DFF33",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#333333",
          gray: "#555555",
          darkgray: "#e0e0e0",
          dark: "#f9f9f9",
          secondary: "#9575cd",
          tertiary: "#7e57c2",
          highlight: "rgba(149, 117, 205, 0.2)",
          textHighlight: "#9575CD4D",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
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
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
