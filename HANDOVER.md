# Claropack.com 独立站项目交接手册 (Handover)

> **致接手的 AI 助手：** 这是一个已正式上线的 B2B 外贸独立站项目。请完整阅读此文档以接手后续 SEO/GEO 优化任务。

---

## 1. 项目基础信息 (The Basics)
- **品牌/域名**：Claropack / [https://claropack.com](https://claropack.com)
- **行业**：一次性食品包装 (PET 冷饮杯、注塑 PP 杯、杯盖)
- **定位**：工厂直供 B2B 询盘站 (贸易商背景，非直称工厂)
- **GitHub 仓库**：`https://github.com/parkourV/claropack-official` (推送 `main` 分支即触发部署)
- **托管平台**：Cloudflare Pages (项目名: `claropack-official`)
- **本地路径**：`C:\Users\Jacky\AccioWork\2026-07-27-10-06-12\clearcup-packaging`

## 2. 技术栈与核心文件 (Tech Stack)
- **框架**：React + Vite (单页应用 SPA)
- **路由**：React Router (`BrowserRouter`)
- **预渲染 (P0-1)**：已实现！本地构建会运行 `scripts/prerender.mjs` 生成静态 HTML 存入 `dist/`，解决 SEO 空 HTML 问题。
- **构建命令**：`npx vite build && node scripts/prerender.mjs` (注意：因环境问题，请直接调 `npm`/`node` 命令，不要过 `site.js`)
- **部署模式**：**产物上传模式** —— Cloudflare Pages 的 Build Command 已设为 `echo skip`，它直接部署 git 提交的 `dist` 目录。

## 3. 已打通的后端 (Supabase)
- **功能**：联系我们表单已接通数据库，询盘实写入入库。
- **项目 ID**：`qigzdorfnydgfotdzyte`
- **数据表**：`public.inquiries` (已配 RLS 匿名插入权限)
- **密钥文件**：`src/supabaseClient.js` (已使用最新的 publishable key)

## 4. 关键资产与 SEO 状态
- **图片**：全站已换成阿里店铺真实高清直链图片 (alicdn)，解决了构建资源打包丢失问题。
- **SEO/GEO 基建**：已上线 `sitemap.xml`、`robots.txt`、`llms.txt` (针对 AI 爬虫)、JSON-LD 结构化数据 (FAQ/Org/Product)。
- **收录**：GSC (Google Search Console) 已验证并提交 sitemap。Bing Webmaster 已导入。

## 5. 剩余任务清单 (Roadmap)
> 详细方案见：`C:\Users\Jacky\AccioWork\2026-07-27-10-06-12\claropack-seo-geo-优化方案.md`

1. **P1 决策博客 (核心)**：创建 `/blog/`，首发《PET vs PP cups》、《Cup Lid Chart》等文章（利用 `pdf_pages/` 里的真实克重/装箱数据）。
2. **P1 图片本地化**：目前用的是阿里直链（防盗链风险），下一步需下载到本地转 WebP。
3. **P2 多语言**：对标站有西语站，我们需要在 `/es/` 路径复刻内容抢占拉美市场。
4. **询盘通知**：目前数据只进数据库，可考虑加一个 Edge Function 实现表单提交自动发邮件。

## 6. 给下一个 AI 的首条指令建议 (Prompt)
> "请读取项目根目录的 HANDOVER.md 和 claropack-seo-geo-优化方案.md。我已换好低成本模型，请根据方案执行 P1 阶段的任务：首先创建 /blog/ 路由框架并基于 pdf_pages 里的真实参数写第一篇《PET vs PP 材质对比深度指南》。"

---
**历史踩坑记录：**
- 编辑 JSX 必须 `npm run build` 验证，曾因残留 `}` 导致部署旧版。
- 预渲染后必须用 `ReactDOM.hydrateRoot` 否则表单点击没反应。
- Cloudflare 构建配置必须保持为“直接部署产物”，不要让它在云端重跑 build。
