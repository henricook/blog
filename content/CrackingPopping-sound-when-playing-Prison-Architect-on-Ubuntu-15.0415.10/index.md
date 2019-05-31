---
title: "Cracking/Popping sound when playing Prison Architect on Ubuntu 15.04/15.10"
description: "On a new build of Ubuntu 15.10, whenever playing Prison Architect there was a constant crackling/popping over the top of the game music and effects. The fix was quite simple but took me a while to…"
date: "2015-11-18T21:35:07.088Z"
categories: 
  - Prison Architect
  - Ubuntu Sound
  - Steam

published: true
canonicalLink: https://medium.com/@henricook/cracking-popping-sound-when-playing-prison-architect-on-ubuntu-15-04-15-10-7c08f4dbf5b5
---

On a new build of Ubuntu 15.10, whenever playing Prison Architect there was a constant crackling/popping over the top of the game music and effects.

The fix was quite simple but took me a while to find. So here it is in case you have the same problem.

Locate preferences.txt (on my machine in ~/.Prison Architect/preferences.txt), open it and change ‘SoundEnableDsp’ from ‘true’ to ‘false’. Reload the game if it was open at the time.

Let me know if that works for you!