// export default {
//     testEnvironment: 'jsdom',
//     transform: {
//         '^.+\\.vue$': '@vue/vue3-jest',
//     },
// }

//jest.config.js
module.exports = {
    // moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    // moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        // '.*\\.js$':'babel-jest',
        // ".*\\.(vue)$": "vue-jest",
        // '^.+\\.vue$': '@vue/vue3-jest',
        // "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
};
