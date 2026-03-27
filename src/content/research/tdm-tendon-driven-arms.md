---
title: "Actuation Design of Tendon-Driven Arms"
description: "A novel time-division multiplexing approach for tendon-driven robotic arms that achieves lightweight design while maintaining fault tolerance capabilities."
side: "left"
position: 2
heroImage: "/pub2.png"
tags: ["Tendon-Driven", "Multiplexing", "Fault Tolerance"]
---

Robotic manipulators for aerospace missions must stay lightweight while remaining dependable in remote and hazardous environments. To meet these constraints, we introduce Time-Division Multiplexing Actuation (TDMA), a practical actuation strategy for tendon-driven robots that reduces the number of actuators without sacrificing torque output or fault tolerance.


<div style="text-align: center; margin: 20px 0 32px;">
<a href="/publications" style="text-decoration: none;">
<span aria-hidden="true">📄</span> <span style="text-decoration: underline;">Paper</span>
</a>
</div>


<div style="max-width: 640px; margin: 0 auto; text-align: center;">

<iframe src="https://www.youtube.com/embed/EeqdluQUVsQ" width="640" height="360" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block; width: 100%; max-width: 640px; margin: 0 auto; border: none;"></iframe>

*Introduction Video*

</div>

TDMA is built around a vertically stacked rotational selection mechanism that combines self-rotating TDM motors for fast reconfiguration, electromagnetic clutches for sub-0.1 second engagement, a worm gear reducer for high load capacity and self-locking, and a dual-encoder design for accurate long-term positioning. Using this hardware, the MuxArm platform achieves a self-weight of 2.17 kg, supports a 10 kg actuator driving capacity, and maintains end-effector accuracy up to 1% of its length even under partial servo failure. We also develop an actuation-space trajectory planning method that enables fault-tolerant control and reduces tendon load by up to 50% compared with conventional approaches.
