# Portfolio website of Jeffrey Barron

## Markdown Rules
1. Markdown files must have a file extension of '.mdx' or '.md' only.
2. Each markdown file must contain the following Frontmatter
``` yaml
---
modified: {{date:YYYY-MM-DD HH:mm}}  
modifiedTs: {{date:x}}  
created: {{date:YYYY-MM-DD HH:mm}}  
createdTs: {{date:x}}  
layout: MDXLayout  
route: /blog  
slug: __SLUG__
ext: .mdx or .md 
title: {{title}}  
summary: __SUMMARY__
image: /images/photos/20230411-Three-Sisters.jpg
authors: [jeffbarron]  
tags: [draft]
---
```

## Deployment

##### .env.local
``` env.devlopment 
SENDGRID_API_KEY=XXXXX
```

##### .env.development
``` env.devlopment 
ROOT_URI=http://localhost:3000
```

##### .env.production
``` env.production 
ROOT_URI=https://jeffreybarron.com
```

#### Build and Run Development
``` shell 
make dev
```

#### Build Production
``` shell 
make build
```

#### Build and Local Production
``` shell 
make start
```


## Useful links
- [Customise Markdown](https://www.programcreek.com/typescript/?code=juliencrn%2Fusehooks-ts%2Fusehooks-ts-master%2Fsite%2Fsrc%2Fcomponents%2FmdxRenderer.tsx)


