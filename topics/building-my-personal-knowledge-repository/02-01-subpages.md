---
title: Subpages
author: nbelzer
layout: subpage
main: "topics/building-my-personal-knowledge-repository/02-the-how.md"
---

While I tried to keep my setup simple, one of the more complex aspects of this repository is the subpages feature. Jekyll makes it easy to link from one post to another, however I wanted the links between pages to contain a rich preview that was generated automatically. For example showing the title of the subpage with a little excerpt from the page.

To allow for the subpages feature I had to set up the site as follows (this might required some knowledge about Jekyll to understand):
 - The `topics/_posts/` folder contains the entry point for each all topics I will write about. You are reading the subpage for one of them.
 - Subpages are stored in a `topics/<article-name>/` folder containing the same name of the article for organisation.
 - The main topic page can link to a subpage using a simple include file: `subpage.html`, that looks up the subpage based on directory location. It shows the page title together with a small excerpt of the subpage. On click it brings you to the subpage (you clicked on one to get here).
   ```
   {% raw %}{% include subpage.html 
      page='topics/building-my-personal-notes/02-01-subpages.md' 
      color='text-green-400' %}{% endraw %}
   ```
 - The subpages have a `main` attribute in their [front matter](https://jekyllrb.com/docs/front-matter/) such that they are aware of the page they belong to. This allows me to add the "Back to:" link you can see above this page.
   ```
   ---
   title: Subpages
   ...
   main: "topics/building-my-personal-notes/02-the-how.md"
   ---
   ```

As can be seen this means I need to perform a little extra work for the subpages, the trade-off however it worth the end result as it both looks good and allows me an easy way to structure my content.