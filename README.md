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

--Base: #F1F3F0;
--Accent: #BB7F4C;
--Secondary: #F77316;
--Primary: #7B8BAC;
--Default: #0A192F;
