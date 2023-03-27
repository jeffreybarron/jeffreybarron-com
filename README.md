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
