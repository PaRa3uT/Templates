1. npm inint
2. Install packages:
    Vite:
        npm i -D vite
        npm i -D @vitejs/plugin-vue

    Vue3 (Composition API):
        npm i vue@next

        Pinia (Store):
            npm i pinia

        Router:
            npm i vue-router@4

    Tailwind:
        npm i -D postcss
        npm i -D autoprefixer
        npm i -D tailwindcss

3. npx tailwindcss init -p
    tailwind.config.js:
        content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]

4. npx vite (npx vite build)
