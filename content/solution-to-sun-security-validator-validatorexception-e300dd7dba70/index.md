---
title: ""
description: "Solution to “sun.security.validator.ValidatorException: No trusted certificate found” when installing SBT on a new (Ubuntu) system: I had a perplexing problem on my new Ubuntu 16.04 LTS system today…"
date: "2016-05-02T20:14:16.534Z"
categories: 
  - Sbt
  - Scala
  - Ubuntu

published: true
---

Solution to “sun.security.validator.ValidatorException: No trusted certificate found” when installing SBT on a new (Ubuntu) system:

I had a perplexing problem on my new Ubuntu 16.04 LTS system today. After installing SBT and attempting to compile a project that I know is good I saw a spate of dependency errors that looked like:

```
https://repo.scala-sbt.org/scalasbt/ivy-snapshots/org.scala-sbt/compiler-interface/0.13.8/jars/compiler-interface-bin.jar
[FAILED ] org.scala-sbt#precompiled-2_8_2;0.13.8!compiler-interface-bin.jar: sun.security.validator.ValidatorException: No trusted certificate found (1658ms)
```

It took me a long time to figure out, for a while I thought Maven/Bintray might be down (panic) but that seemed unreasonable especially as nothing was on Twitter about it.

**Solution:** Cue half an hour later when I figured out that something that I’d installed as part of the setup of this new machine had installed “openjdk-9-jre-headless” and made it the default — SBT was running with a default of ‘experimental java 9’. Nuking that package and using update-java-alternatives to setup the also installed openjdk-8-jre-headless sorted it right out.