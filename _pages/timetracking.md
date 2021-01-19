---
layout: topic
title: Time Tracking
subtitle: Explaining my time tracking setup.
author: nbelzer
tags: []
last_modified: 2020-08-06
---

Time Tracking has become quite a large aspect of my life. In my current setup I track all the time I spend on university and work (more details below). I do this for several reasons:

1. **To get a realistic view of what I'm working on, and how much I'm actually doing** -- My brain (and perhaps yours too) is pretty good at lying to yourself about the amount of work you got done today, this week or this month. Tracking the _productive_ time allows me to get a good grasp of these things.
2. **To reflect** -- Next to a realistic view of what I've done I use this data to reflect on projects I've started, track habits (like reading) and make future decisions. 
3. **A bit of focus and motivation** -- When starting one of my timers I use this process as a sort of reset for my brain. When the timer starts I should be doing the work.


## My current setup

My current setup includes [Toggl](https://toggl.com) as a backbone. I use my phone as the primary interface to this service through  multiple shortcuts (from the Shortcuts app). These shortcuts ask one simple question: "What are you working on?" while presenting me with a list of predefined projects. This allows me to quickly start and stop timers.

My goal is to track about 8-9 hours of productive work each day. While I almost never make it to this goal it helps me to cut away some distractions and work a little more. I decided upon this target by doing a simple calculation:

```
24 hours in a day
9 hours in bed (= 8 hours of sleep)
3 hours for shower, cooking, eating and other household tasks
3 hours for relaxing
---
9 hours left for productive work.
```

To make sure that the tracked time means something I only track time well spent. If I have a timer running and find myself distracted from the initial task I'll go into Toggl and either remove the tracked time or reduce the amount of time tracked. This makes sure that all data is what I consider productive work. Giving me a valuable metric to use for reflection and to gain insight.

---

Since iOS 14 came out in beta I have changed my setup slightly (as it previously relied on an app named [Timery](https://timeryapp.com) whose widget no longer works in iOS 14 (at least for the time being)). Since I was interested in Swift and SwiftUI I took the chance to develop my own app with widgets that I'd like to see. So far I've created two widgets that show the current (or last) running timer and a progress indicator to quickly see the amount of time tracked that day (towards my set goal). See the screenshot below:

![My current iOS 14 Time tracking setup](/assets/img/time-tracking-setup-ios-14.jpg)

So far I've enjoyed working on this app and I'll likely continue, perhaps one day publishing it on the App Store. For now I'm working on some simple graphs that can visualise time spent over a given period of time for a selection of projects. This is something I usually do during the academic year or at the end of a project. _I will update this page once I got that working_.

If you have any suggestions I'd like to hear them through twitter [@nickbelzer](https://twitter.com/nickbelzer).

## What to track

While I've tried to track almost all activities (from travelling to studying to eating) I've not found a lot of extra use in tracking these categories. These days I track five categories:
- **Personal** -- Mostly side projects like this digital garden, my Emacs setup and [Vimari](https://github.com/televator-apps/vimari).
- **Reading** -- I found no use in tracking specific books so I track the type of reading: _fiction_ or _educational_.
- **Learning** -- This includes self education, either using the internet, books or by trying something new. This is mostly a new category so it has to evolve a bit further. Right now I use it to track the amount of time spent on studying the book Structure and Interpretation of Computer Programs.
- **Work** -- This includes work related projects. 
- **Study** -- Used to track time spent on courses in a very general way.

This structure directly applies to my setup in Toggl where I have set up a project for each category and use tags to distinguish between the projects in these categories. Each project is colour coded such that the project of a specific timer is easy to recognise (see the current iOS 14 setup above).


## Links

- [Cortex (podcast)](https://www.relay.fm/cortex) -- Got me started with time tracking.
- [r/cortex](https://reddit.com/r/cortex) -- Has a lot of posts helping out people starting to track their time.
- [Toggl](https://toggl.com/) -- The service I use as a backbone for all my time tracking.
