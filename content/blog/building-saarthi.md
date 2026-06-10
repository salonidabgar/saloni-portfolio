---
title: "Building Saarthi: Predictive Driver-State Monitoring, Not Reactive Alarms"
excerpt: "Today's driver monitoring fires rule-based alarms after the lapse. Saarthi models driver state as a trend and intervenes before it. What I'm building, and why."
date: "2026-06-11"
readTime: "5 min read"
category: "AI Engineering"
tags: ["AI", "Computer Vision", "Automotive", "Driver Monitoring", "Side Projects"]
featured: true
emoji: "🛞"
color: "#16875f"
image: "/images/blog/saarthi/og.png"
heroImage: "/images/blog/saarthi/hero.png"
---

Driver drowsiness alarms share one design flaw: they fire *after* the event they exist to prevent. Your eyes stay closed past a threshold, and then the car beeps. That's detection, not prevention.

I work on vehicle software at Jaguar Land Rover, and Saarthi is my project aimed at that gap. The name is Sanskrit for charioteer, the one who reads the warrior, the horses, and the field as a single system and acts before being asked.

Saarthi is my entry to **Tata InnFuze**, an innovation challenge across the Tata group. It opened with **1,125 submissions**, around **60 teams** made the shortlist, and I'm one of them. I'm now at **Stage 4**, where the idea has to become a working proof of concept.

## The one-line version

Saarthi models driver state as a trend and steps in early, with a response sized to the situation, instead of waiting for a fixed rule to trip and then alarming.

![Reactive systems alarm after the lapse. Saarthi aims to act before it.](/images/blog/saarthi/01-late-vs-early.png)

## What's wrong with current systems

Three things, and they feed each other.

The logic is rule-based: eyes closed longer than X, alarm. The trigger condition is the bad event itself, so by design nothing happens until the thing you wanted to avoid is already happening. There's no notion of a driver slowly degrading over the last few minutes.

The threshold is the same for everyone. Resting blink rate, eye geometry, and natural posture vary a lot between people, so a population-wide X over-fires for some drivers and misses others. Over-firing is how drivers learn to ignore the system. Plenty just turn it off.

And the response is one loud beep, whatever the situation. No warm-up, no context.

The root cause is shared: the system judges single instants against fixed rules instead of reading the person over time.

## The approach

It starts with a plain webcam facing the driver. No extra hardware. Each frame gives eye openness, blink dynamics, and head pose. One frame is a snapshot; a few minutes of frames is a trend, and the trend is where the signal lives. Blink rate creeping up, micro-nods, gaze starting to wander.

Driver signals alone aren't enough, though. A two-second glance away is nothing in an empty car park and a real problem at a cluttered junction. So the driver stream gets read together with what the vehicle is doing and what's around it, as one picture rather than as independent subsystems.

![Three streams — driver, vehicle, surroundings — read as one picture over time.](/images/blog/saarthi/02-one-picture.png)

The output side is the part I care about most. Instead of one alarm there's a ladder, gated by how confident the system is: silence while you're fine, a soft visual cue when something starts to drift, a firmer nudge if it keeps going, and a clear intervention only when it's actually warranted.

![From silence to firm intervention — a ladder, not a single shout.](/images/blog/saarthi/03-escalation-ladder.png)

## The proof-of-concept plan

Stage 4 is about evidence. The POC has to show three things, each with a number attached:

1. A model reading trends can flag rising risk seconds before a rule-based system trips. Measured as lead time against a faithful reimplementation of today's threshold logic, on the same data.
2. A short per-driver calibration cuts false alarms compared with one population threshold, at the same detection rate.
3. Graded escalation gets faster and less stressed responses than a single loud alarm. Measured in a small within-subject study where the only thing that changes is the intervention style.

The build order follows the risk. Webcam perception gets validated first, against public hand-labelled driving data, because if that doesn't hold then nothing above it matters. Then come the forecasting models, then personalisation. The human study goes last, once the system in front of people is worth their time.

One constraint I'm keeping on purpose: everything runs on commodity hardware. Cars already ship with cabin cameras and capable compute, so the production story for this class of system is software on what's already there. I want the POC to live under the same discipline.

## Known limits

Low light is the obvious weak spot. Ordinary cameras degrade exactly when drowsiness peaks, which is why production systems use infrared. Sunglasses and hands on faces will fight any face-based pipeline. Public driver-monitoring data is modest in size, so I'll have to be careful not to over-read early numbers. And a desk rig is not a moving car at 2 a.m.

I can live with all of that for now. This phase is about whether the idea has legs.

## Why this problem

Mostly pragmatic reasons. This is my domain; I work on vehicle software, so I know what production constraints look like from the inside. The hardware is already in cars, which means anything that genuinely works here ships as software and is useful well beyond one competition demo. And honestly, we've spent a decade teaching cars to read the road. Reading the driver always seemed like the half that got postponed.

---

*If it survives the competition, the fuller write-up comes later. Numbers, failures, the embarrassing bugs.*
