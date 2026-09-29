<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
- Before you create a new components, please check shadcn and if shadcn has the components then install them
- If you create a new components, still reuse shadcn or existing components as possible
- for color dont make inline color like <h1 className="bg-#FFFFFF"> but rather add it to global.css and call it like <h1 className="bg-black">
- same with size, don't ever make your own size like <div className="text-[12rem]"> no, please use tailwind preset sizes like text-sm, or whatever, applied to everything not just text