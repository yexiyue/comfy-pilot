# ComfyPilot 文档导航

## 这套文档为谁准备
你已经用 AI SDK UI 展示过消息和工具，也用 Rig 写过聊天程序。本路线从“能接模型”进阶到“能设计一个有状态、可恢复、可评测的 agent 系统”，不重复基础聊天 Demo。

项目以本地 ComfyUI 为图像执行引擎，第一版面向博客封面创作。实现语言先用 TypeScript，后续按边界迁移 Rust。

当前技术路线明确采用 **LangChain 基础组件 + LangGraph 自建创作循环**：先学习 Models、Messages、Tools，再学习图编排与上下文策略。初期不叠加 LangChain 的高层 createAgent 循环；Skills 提供按需加载的创作方法。

## 如何使用
技术载体采用 React + Vite 与 NestJS，前后端同仓库，发布时由后端提供静态页面和 API；采用模块化单体、SQLite 与本地资产目录。

1. 先读 [产品文档](product.md)，理解要做的用户体验。
2. 读 [路线图](roadmap.md)，一次完成一个阶段。
3. 按下表学习对应篇章。每篇只介绍知识、专业术语、设计问题和验收标准。
4. 到实际开发时，再围绕当前篇章询问实现方式。这里不提供安装命令、完整代码或绑定版本的 API 操作步骤。
5. 每阶段保留运行记录、图片和失败案例；评价进步的依据是系统行为，而不是读完了多少文档。

## 分篇教程
| 篇章 | 主题 |
|---|---|
| [01](tutorials/01-agent-and-harness.md) | 从聊天到 agent：系统全貌 |
| [02](tutorials/02-capabilities-and-workflows.md) | ComfyUI 能力与工具边界 |
| [02B](tutorials/02b-engineering-foundation.md) | 产品载体与 NestJS 工程化骨架 |
| [03](tutorials/03-brief-and-constraints.md) | 创作需求、结构化输出与约束 |
| [04](tutorials/04-state-and-assets.md) | 任务状态、图片资产与版本 |
| [04A](tutorials/04a-langchain-components.md) | LangChain 基础组件与职责边界 |
| [05](tutorials/05-agent-loop.md) | Agent 循环与 LangGraph 编排 |
| [06](tutorials/06-context-engineering.md) | 上下文工程 |
| [06A](tutorials/06a-skills-and-orchestration.md) | Skills、工具与编排运行时 |
| [07](tutorials/07-memory.md) | 短期状态与长期记忆 |
| [08](tutorials/08-human-feedback.md) | 人工反馈、中断与恢复 |
| [09](tutorials/09-reliable-execution.md) | 异步执行、重试与任务对账 |
| [10](tutorials/10-evaluation.md) | 视觉检查、评测与可观测性 |
| [11](tutorials/11-product-experience.md) | 流式体验、画廊与迭代交互 |
| [12](tutorials/12-harness-and-rust.md) | Harness 收口与 Rust 迁移 |

辅助资料：[术语表](glossary.md) · [官方阅读资料](references.md)

## 文档边界
这是一套针对本项目的学习计划，不是完整的模型训练、图像算法或 ComfyUI 节点教学。工作流与模型能力需在你本地核实；文档不假定已有编辑、局部重绘、放大或视觉理解模型。
