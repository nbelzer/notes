---
title: Building my personal knowledge repository
subtitle: How I built this website.
layout: topic
author: nbelzer
tags: []
last_modified: 2020-09-05
---

For a while now I have looked up to personal knowledge repositories like the one from [Nikita Voloboev](https://wiki.nikitavoloboev.xyz). Using [Notion](https://www.notion.so) I've created my own personal repository of knowledge spanning many aspects of my life: from my work with different software libraries or programming languages to strategies for games and general thoughts about life.

![My notion categories](/assets/img/notion-person-wiki-categories.png)

Over the last two months I have been trying to find a way to start documenting some of this content online as I think that many of my findings can be useful for others.

## The Why

The basic idea behind having your own personal repository of knowledge is to provide you with a space where you can store information for your future self. You can't store everything in your brain (or at least I can't), your brain is prime real estate, it should be occupied with the memories you need the most (a bit like [memory caching](https://en.wikipedia.org/wiki/Cache_(computing))). Everything that doesn't have a place in the brain goes to the knowledge repository where it can be retrieved by your future self.

A simple example would be _re-arranging menu bar items on MacOS_: Hold down <kbd>⌘</kbd> while dragging items on the menu bar. This simple action can easily be forgotten, especially since it is not of importance in your daily life. When you need it you either have to rediscover the correct actions or search the web. With a knowledge repository you might have written down the steps and would have been able to quickly retrieve them, together with notes or relevant links. 

This example is simple and perhaps [not worth the trade off](https://xkcd.com/1205/) between documenting and rediscovering. However the scales quickly tip the other way when the action is slightly more complex. It also provides the ability to add a context to the data stored, in our example above our data could link to: [Hidden](https://github.com/dwarvesf/hidden) or [Dozer](https://github.com/Mortennn/Dozer), two open source applications for hiding elements in the menubar.

### Bookmarks

When you, like me, spend time on sites like [Hackernews](https://news.ycombinator.com), [Github](https://github.com/explore) or [Reddit](https://www.reddit.com) you will encounter useful articles, repositories or discussions about a topic that could become relevant later. Including these resources in to your knowledge repository is like giving yourself a head start when you actually dive in to a topic. I have found that this has helped me overcome the initial barrier of entry to learning or trying something new. 

## The How

After trying out some initial concepts I realised that there is one main requirement: _the repository should allow me to quickly add information whenever I want_, this is similar to how I worked in Notion. To realise this there should be no setup required in the writing process. Because of this posts are written in [Markdown](https://daringfireball.net/projects/markdown/), this allows me to add or edit content without having to build or run the website. Some editors like Visual Studio Code can even show a live preview without any setup. Next to this Markdown limits the possibly styling options and puts the focus on the writing process itself. [Jekyll](https://jekyllrb.com), a static site generator, is used to build out the Markdown content into a nicely presented site that can be hosted on [Github Pages](https://pages.github.com).

Next to making it physically easy to add content I also try to eliminate the stress of writing a perfectly coherent post from the start by viewing this repo as a [digital garden](https://joelhooks.com/digital-garden). In a digital garden notes grow over time, however they need attention. As a result some pages will be short while others are more developed. 

If you are interested in the source code for this knowledge repository you can find it on [Github](https://github.com/nbelzer/notes). Both the code and content is available there. If you have a suggestion, correction or are having issues with this site you can create an issue there to let me know.

## Future

Some ideas for the future of the site:
- Category pages based on tags.
- Automatically calculate the amount of time that has passed since a post was last edited. Should be possible using git. The age should be shown at the top of the page.
    - If a page hasn't been touched in a long time this could be reflected either visually or using a banner. Similarly the opposite could also be indicated.
- The repository could make use of page visits to reorder its content such that the most viewed/touched elements are shown on the front page. Could be interesting to play around with a caching algorithm for this. This would optimise the repo for all visitors.
- Expand bookmarks into small snippets that show [open graph data](https://ogp.me) like a title, image and small description.

It is likely that over time I will re-evaluate my workflow, following the thought of the digital garden I will update this post over time to reflect any changes.
