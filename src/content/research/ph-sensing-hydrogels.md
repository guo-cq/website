---
title: "Machine Vision-based Sensing Pipeline"
description: "An implantable hydrogel pH sensing pipeline that combines 3-D ultrasonic imaging with machine-vision-based geometric reconstruction and regression modeling."
journal: "IEEE Sensors Journal"
side: "right"
position: 3
heroImage: "/pub3.png"
tags: ["Machine Vision", "pH Sensing", "Hydrogels"]
---

<div style="text-align: center; margin: 20px 0 32px;">
<a href="/publications" style="text-decoration: none;">
<span aria-hidden="true">📄</span> <span style="text-decoration: underline;">Paper</span>
</a>
</div>

Stimuli-responsive hydrogels with embedded microparticles (i.e., silica beads) can be implanted subcutaneously or deeply to monitor physiological signals beneath the epidermis in a remote manner. Using an ultrasonic imaging system, gel deformation can be detected in response to pH variation. However, accurately measuring swelling dynamics is difficult in practice because of misalignment between the gel and the ultrasonic wave.

To address this, we develop a machine-vision-based algorithm that processes recorded 3-D ultrasonic videos through a serial pipeline: noise reduction, mathematical morphology, edge detection, polygonal approximation, and projection correction. The irregular gel cross section is converted into a square-like representation, enabling accurate cross-sectional area estimation. We then train linear and logarithmic regression models to couple gel cross-sectional area with surrounding pH values. The best-performing model reaches an R2 of 0.86 with an RMSE of 0.97, suggesting strong potential for portable, implantable, and wireless hydrogel sensing systems.

The core contribution is a mathematically derived modeling framework that enables reliable projection correlation and robust pH inference from ultrasonic geometry.
