---
title: "SandWorm: Event Camera & Visuotactile"
description: "Targeting the challenges of subsurface exploration in granular media, we developed a snake-like robot with peristaltic-rotating locomotion ability and an integrated IMU-enhanced event camera-based visuotactile sensor."
journal: "IEEE Transactions on Robotics"
side: "left"
position: 1
heroImage: "/pub1.png"
badge: "T-RO"
tags: ["Visuotactile Perception", "Event-based Vision", "Screw-actuated Robot"]
---

<div style="text-align: center; margin-top: 20px;">
<a href="/publications" style="text-decoration: none;">
<span aria-hidden="true">📄</span> <span style="text-decoration: underline;">Paper</span>
</a>
</div>

<div style="max-width: 640px; margin: 0 auto; text-align: center;">

<iframe src="https://www.youtube.com/embed/l238n79DOzo" width="640" height="360" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block; width: 100%; max-width: 640px; margin: 0 auto; border: none;"></iframe>

*Introduction Video*

</div>

This project addresses the fundamental challenges of robotic perception and locomotion in granular media environments. Traditional vision systems fail in opaque granular materials, making subsurface exploration extremely challenging for robotic systems.

<div style="text-align: center;">

![Structure diagram](struc.gif)

*Integrating vibration to event-based perception*

</div>

Inspired by pioneering works like AMI-EV, Evetac, and ARCsnake, we systematically investigated the impact of 𝐚𝐜𝐭𝐢𝐯𝐞 𝐯𝐢𝐛𝐫𝐚𝐭𝐢𝐨𝐧 on event cameras, and integrated this insight into the head of a snake-like robot for visuotactile perception. Instead of treating vibration as noise, we engineered it into a dual advantage for both perception and actuation. The robot simultaneously enables 1000 Hz pixel-level tactile imaging and enhanced subsurface propulsion. 

<div style="text-align: center;">

![IMU integration](imu.jpg)

*Active vibration induces fluctuations in event density, which can be estimated and filtered by the IMU signal*

</div>

Leveraging onboard IMU data, we further enhanced the perception ability with an model-based algorithm tailored to event stream sparsity and elastomer mechanics. Finally, we validated the system through extensive field experiments.

<div style="text-align: center;">

![Experiment demonstration](exp.gif)

*Field experiment of the SandWorm robot, demonstrating its locomotion and perception abilities in granular materials*

</div>
