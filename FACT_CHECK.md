# Fact-check log

Checked on **22 July 2026** against the linked primary sources. This audit verifies that the publishers make the displayed claims; it does not independently audit their private datasets.

## Release-by-release evidence

| Release | Displayed value | Primary-source evidence | Audit result |
|---------|-----------------|-------------------------|--------------|
| π0 | 10,000+ h | The [paper](https://arxiv.org/abs/2410.24164) says pretraining uses over 10,000 hours of robot data, complemented by OXE; the OXE contribution is not given in hours. | Verified as a lower bound. |
| π0.5 | N/D | The [paper](https://arxiv.org/abs/2504.16054), Sec. IV-C, reports about 400 hours of mobile-manipulator data and an unquantified extended π0 dataset, other robot data, OXE, and web data. | Corrected from an inferred 10,400 h. The source does not establish that total. |
| GEN-0 | 270,000+ h | The [GEN-0 release](https://generalistai.com/blog/gen-0) reports over 270,000 hours of real-world manipulation trajectories. Generalist's [collection-hardware description](https://generalistai.com/blog/physical-commonsense) identifies lightweight handheld ergonomic devices that let humans manipulate objects naturally. | Verified; classified as a proprietary human-operated interface rather than branded UMI. |
| π*0.6 | N/D | The [release and paper](https://www.pi.website/blog/pistar06) describe “tens of thousands of hours” of multi-task, multi-robot demonstrations for offline-RL pretraining, followed by demonstrations, autonomous episodes, reward labels, and expert interventions through RECAP. No exact aggregate duration is published. | Added as `VLA + RL`; retained as N/D because the total cannot be rendered accurately in hours. |
| DreamDojo | 44,711 h | The [paper](https://arxiv.org/abs/2602.06949), Table 1, totals 43,827 h of DreamDojo-HV, 829 h of EgoDex, and 55 h in-lab: 44,711 h in the final mixture. | Corrected from the rounded 44,000 h abstract figure. |
| EgoScale | 20,854 h | The [paper](https://arxiv.org/abs/2602.16710) reports 20,854 hours of action-labeled egocentric human video for VLA pretraining. | Verified. |
| GEN-1 | 500,000+ h | The [release](https://generalistai.com/blog/gen-1) reports over half a million hours of physical-interaction data collected from humans with low-cost devices, no robot data in pretraining, and approximately one hour of robot data for each result shown. | Verified as a lower bound; adaptation data is excluded from the chart. |
| π0.7 | N/D | The [paper](https://arxiv.org/abs/2604.15483), Sec. VI-A, lists demonstrations, autonomous policy-evaluation data, human interventions, open robot datasets, egocentric human video, and web data, without an aggregate duration. The conclusion mentions autonomous RL as possible future work. | Added as a VLA, not an RL-trained model; retained as N/D. |
| LingBot-VLA 2.0 | ~60,000 h | The [paper](https://arxiv.org/abs/2607.06403) reports around 60,000 pretraining hours: 50,000 h of filtered robot trajectories across 20 configurations and 10,000 h of filtered egocentric video. | Corrected from an exact-looking 60,000 h label to an approximation. |
| GR00T N1.7 | ~40,000 h | NVIDIA's [technical post](https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/) reports ~32,000 h of real demonstrations and human egocentric data plus ~8,000 h of simulated rollouts and demonstrations. | Verified; broken source URL corrected from `groot` to `gr00t`. |
| Xiaomi-Robotics-1 | 100,000+ h | The [paper](https://arxiv.org/abs/2607.15330) reports over 100,000 pretraining hours of real-world UMI trajectories. The [project page](https://robotics.xiaomi.com/xiaomi-robotics-1.html) reports 1,700+ scenarios and a separate post-training mixture of about 10,000 h, including 7,200+ h of in-house robot data. | Verified as a lower bound; post-training hours are excluded from the chart. |
| ACT-2 | N/D | The [release](https://www.sunday.ai/blog/act-2-preview) describes a sensorized human pretraining dataset and relative scaling experiments but gives no absolute hour or trajectory total. Its one-demonstration result is explicitly a post-training experiment. Sunday's [company page](https://www.sunday.ai/company) places its Skill Capture Glove in the technical lineage of the UMI gripper. | Verified as undisclosed; an unsupported ACT-1 trajectory claim was removed. |

## Method checks

- Dates are the first arXiv submission dates or the dates printed on the first-party release pages.
- A `+` is used only where the source states “over” or “more than”; `~` is used for figures described as approximate or “around.”
- Numeric grids visualize the reported lower bound or approximate total. N/D entries have no grid.
- `VLA + RL` means the underlying model is a VLA and its policy is optimized with reinforcement learning. This avoids treating RL, a learning method, as an architecture parallel to VLA or world models.
- `Data` and `Collection` are separate dimensions. `Robot trajectories` means that a robot executes the recorded actions, whether a human teleoperates it, intervenes, or the policy runs autonomously. `Direct human manipulation` means that a person acts on the environment without a robot while a device captures the trajectory.
- Collection labels are shown only to the specificity supported by the source. Xiaomi uses UMI explicitly; Generalist describes a proprietary handheld UMI-like system; Sunday uses its Skill Capture Glove and documents its UMI lineage. An omitted collection label does not imply autonomous collection.
- Modalities are labels, not a visual breakdown of proportions. The only fully quantified split shown in the notes is LingBot's 50,000 h + 10,000 h; GR00T's 32,000 h bucket combines real demonstrations and human egocentric data.
- All 15 source and supporting URLs returned HTTP 200 during the audit.

## Build verification

The production checks passed on 22 July 2026:

```text
npm run lint
npm run build
```
