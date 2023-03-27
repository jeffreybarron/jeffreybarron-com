# Portfolio website of Jeffrey Barron.

initial build

```shell
npx create-next-app@latest
src false
app false
ts false
eslint true

npm install --save-dev @tailwindcss/typography autoprefixer postcss prettier prettier-plugin-tailwindcss tailwindcss
npm install --save @next/font
```

some babel config I dont want to chuck yet

```.babelrcc
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "prismjs",
      {
        "languages": [
          "javascript",
          "css",
          "markup"
        ],
        "plugins": [
          "line-numbers"
        ],
        "theme": "twilight",
        "css": true
      }
    ]
  ]
}
```

some Css I dont want to delete

```css
pre {
  inline-size: 100%;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  /* @apply bg-primary-contrast my-2 p-4 font-mono text-black; */
  /* align pre in middle of container */
}
```
