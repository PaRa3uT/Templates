1. npm inint
2. Install packages:
    Vite:
        npm i -D vite
        npm i -D @vitejs/plugin-vue
        *npm i -D vite-plugin-pwa (https://vite-plugin-pwa.netlify.app/guide/#installation)
        *npm i -D vite-plugin-linter (https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/)

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
        npm i @tailwindcss/forms

    Linting:
        npm i -D eslint
        npm i -D eslint-plugin-vue
        npx eslint src --ext .vue,.js

    Testing:
        * Vitest (Unit Testing) (Не работает)
            npm i -D vitest
            npm i -D jsdom
            npm i -D c8 (coverage)
        + Peeky (https://peeky.dev/guide/#development-ui) 
            npm i -D @peeky/test
            npm i -D @vue/test-utils
            
            npx peeky run
            npx peeky open
        * jest:
            npm install --save-dev @vue/vue3-jest
            npm install --save-dev @vue/test-utils@next
            npm install --save-dev jest

            npm install --save-dev vue-jest@next


            npx jest --coverage


        * Cypress (E2E testing)

3. npx tailwindcss init -p
    tailwind.config.js:
        content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]

4. npx vite (npx vite build)

5. Testing (jest)
