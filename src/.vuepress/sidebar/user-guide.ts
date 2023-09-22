import { arraySidebar } from "vuepress-theme-hope";

export const userGuide = arraySidebar([
  //   "",
  "why-use-zotero",
  "quick-start",
  {
    text: "基础使用",
    icon: "module",
    // prefix: "basic-usage",
    collapsible: true,
    children: ["install", "add-items", "organize-library", "take-notes"],
  },
  {
    text: "创建参考文献",
    icon: "code",
    // prefix: "generate-bibliography",
    collapsible: true,
    children: [
      "citation-styles",
      "create-bibliographies-within-zotero",
      "ms-word-plugin",
      "wps-plugin",
      "creat-bibliographies-via-zotero-bib",
    ],
  },
  {
    text: "同步、协作与备份",
    icon: "language",
    // prefix: "sync-collaboration-backup",
    collapsible: true,
    children: ["sync", "sync-via-webdav", "group", "backup"],
  },
  {
    text: "插件",
    icon: "plugin",
    prefix: "plugins",
    collapsible: true,
    children: "structure",
  },
  {
    text: "常见问题",
    icon: "question",
    prefix: "faqs",
    collapsible: true,
    children: "structure",
  },
  {
    text: "杂项",
    icon: "advance",
    prefix: "misc",
    collapsible: true,
    children: "structure",
  },
]);
