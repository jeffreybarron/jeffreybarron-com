npx create-next-app@latest
src false
app false
ts false
eslint true

npm install --save-dev @tailwindcss/typography autoprefixer postcss prettier prettier-plugin-tailwindcss tailwindcss
npm install --save @next/font

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

TODO: Checkout https://rehype-pretty-code.netlify.app/

Primary
Secondary
Tertiary

Light
Dark

Success
Info
Warning
Danger

```css
--Base: #f1f3f0;
--Accent: #bb7f4c;
--Secondary: #f77316;
--Primary: #7b8bac;
--Default: #0a192f;

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
