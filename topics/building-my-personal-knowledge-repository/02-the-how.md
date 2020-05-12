---
title: The how
author: nbelzer
layout: subpage
main: "topics/_posts/2020-05-12-building-my-personal-knowledge-repository.md"
---

To create an online knowledge repository I've chosen to use a static site generator, specifically [Jekyll](https://jekyllrb.com). I prefer using a static site generator for this as it simplifies deployment to using [Github Pages](https://pages.github.com) or a simple nginx docker image. A minor limitation to Github Pages being that it does not support plugins that are not on the [whitelist](https://pages.github.com/versions/). However this can be resolved by using my own build setup whenever I might need any of these plugins.

I've chosen Jekyll over other static site generators (Hugo, Gatsby, Next.js or Nuxt) for its simplicity (say compared to Gatsby) and the ability to use plugins. This allows me to introduce functionality at a later stage when needed. Apart from the framework, the content itself will be stored in Markdown with minimal custom elements so that if needed I could move over to a different system.

---

I will keep this section up to date with information about the different features I add to this site. For now this only includes subpages:

{% include subpage.html page='topics/building-my-personal-knowledge-repository/02-01-subpages.md' color='text-green-400' %}

---

For more specific details I recommend taking a look at the source code at [Github](https://github.com/nbelzer/notes).