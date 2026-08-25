import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');

async function checkFile(filePath, route) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        
        // 1. 检查是否为空或只有基本的 HTML 结构
        if (!content || content.length < 500) {
            throw new Error(`Content is too short (${content.length} chars). Possible prerender failure.`);
        }

        // 2. 检查关键标志：React 是否渲染出了内容
        // 如果页面只含有一个空的 #root 且没有包含品牌关键词，说明预渲染没生效
        if (content.includes('id="root"></div>') && !content.includes('Claropack')) {
            throw new Error(`Empty #root detected. Prerender did not capture React output.`);
        }

        // 3. Ensure each generated page exposes its canonical URL to crawlers.
        const canonical = `https://claropack.com${route}`;
        if (!content.includes(`rel="canonical" href="${canonical}"`)) {
            throw new Error(`Canonical URL missing or incorrect: ${canonical}`);
        }

        // 4. Local source images prevent a third-party hotlink failure from breaking a page.
        if (content.includes('alicdn.com')) {
            throw new Error('External Alibaba CDN image reference found. Use local assets instead.');
        }

        // 5. Check every rendered page retains the brand identity.
        if (!content.includes('Claropack')) {
            throw new Error(`Brand keyword "Claropack" missing.`);
        }

        // 6. Social sharing metadata must be present for rich link previews.
        if (!content.includes('property="og:image"')) {
            throw new Error('og:image missing. Social shares will render without a preview image.');
        }
        if (!content.includes('name="twitter:card"')) {
            throw new Error('twitter:card missing. X/Twitter shares will not render a large card.');
        }

        console.log(`✅ ${route} passed.`);
        return true;
    } catch (err) {
        console.error(`❌ ${route} failed: ${err.message}`);
        return false;
    }
}

async function run() {
    console.log("--- Starting Site Doctor Audit ---");

    const sitemap = await fs.readFile(path.join(DIST_DIR, 'sitemap.xml'), 'utf-8');
    const requiredSitemapUrls = [
        'https://claropack.com/blog/pet-vs-pp-cups',
        'https://claropack.com/blog/cup-lid-compatibility-guide',
        'https://claropack.com/blog/bubble-tea-cup-sizes-guide',
        'https://claropack.com/blog/how-to-import-plastic-cups-from-china',
        'https://claropack.com/blog/pet-cup-weight-cost-guide',
        'https://claropack.com/blog/cup-sealing-film-machine-guide',
        'https://claropack.com/blog/paper-vs-pla-cups-guide',
        'https://claropack.com/blog/cup-caliber-standardization-guide',
        'https://claropack.com/blog/square-injection-pp-cups-branding',
        'https://claropack.com/blog/pet-cup-capacity-carton-planning-guide',
        'https://claropack.com/blog/injection-pp-cup-model-weight-guide',
        'https://claropack.com/blog/cup-lid-weight-caliber-guide',
        'https://claropack.com/blog/paper-cup-wall-types-guide',
        'https://claropack.com/blog/u-shape-fat-cup-guide',
        'https://claropack.com/blog/strawless-sipper-lids-guide'
    ];
    for (const url of requiredSitemapUrls) {
        if (!sitemap.includes(`<loc>${url}</loc>`)) {
            throw new Error(`Sitemap is missing ${url}`);
        }
    }
    
    const checks = [
        { path: 'index.html', route: '/' },
        { path: 'products/index.html', route: '/products' },
        { path: 'products/pet-cold-cups/index.html', route: '/products/pet-cold-cups' },
        { path: 'products/injection-pp-cups/index.html', route: '/products/injection-pp-cups' },
        { path: 'products/lids-sealing-films/index.html', route: '/products/lids-sealing-films' },
        { path: 'products/paper-pla-cups/index.html', route: '/products/paper-pla-cups' },
        { path: 'about/index.html', route: '/about' },
        { path: 'contact/index.html', route: '/contact' },
        { path: 'blog/index.html', route: '/blog' },
        { path: 'blog/pet-vs-pp-cups/index.html', route: '/blog/pet-vs-pp-cups' },
        { path: 'blog/cup-lid-compatibility-guide/index.html', route: '/blog/cup-lid-compatibility-guide' },
        { path: 'blog/bubble-tea-cup-sizes-guide/index.html', route: '/blog/bubble-tea-cup-sizes-guide' },
        { path: 'blog/how-to-import-plastic-cups-from-china/index.html', route: '/blog/how-to-import-plastic-cups-from-china' },
        { path: 'blog/pet-cup-weight-cost-guide/index.html', route: '/blog/pet-cup-weight-cost-guide' },
        { path: 'blog/cup-sealing-film-machine-guide/index.html', route: '/blog/cup-sealing-film-machine-guide' },
        { path: 'blog/paper-vs-pla-cups-guide/index.html', route: '/blog/paper-vs-pla-cups-guide' },
        { path: 'blog/cup-caliber-standardization-guide/index.html', route: '/blog/cup-caliber-standardization-guide' },
        { path: 'blog/square-injection-pp-cups-branding/index.html', route: '/blog/square-injection-pp-cups-branding' },
        { path: 'blog/pet-cup-capacity-carton-planning-guide/index.html', route: '/blog/pet-cup-capacity-carton-planning-guide' },
        { path: 'blog/injection-pp-cup-model-weight-guide/index.html', route: '/blog/injection-pp-cup-model-weight-guide' },
        { path: 'blog/cup-lid-weight-caliber-guide/index.html', route: '/blog/cup-lid-weight-caliber-guide' },
        { path: 'blog/paper-cup-wall-types-guide/index.html', route: '/blog/paper-cup-wall-types-guide' },
        { path: 'blog/u-shape-fat-cup-guide/index.html', route: '/blog/u-shape-fat-cup-guide' },
        { path: 'blog/strawless-sipper-lids-guide/index.html', route: '/blog/strawless-sipper-lids-guide' }
    ];

    let allPassed = true;
    for (const check of checks) {
        const fullPath = path.join(DIST_DIR, check.path);
        const passed = await checkFile(fullPath, check.route);
        if (!passed) allPassed = false;
    }

    if (!allPassed) {
        console.error("--- Audit Failed! Fix prerender script before deploying. ---");
        process.exit(1);
    } else {
        console.log("--- Site Doctor Audit Passed! ---");
        process.exit(0);
    }
}

run();
