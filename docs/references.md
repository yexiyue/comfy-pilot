# 官方阅读资料
按学习主题查阅，不要求完整通读所有框架文档。网页和 API 会变化，实际实现时以对应安装版本为准。

## LangGraph / LangChain：TypeScript
工程化前置阅读见 [02B](tutorials/02b-engineering-foundation.md)：[NestJS Modules](https://docs.nestjs.com/modules)、[Providers](https://docs.nestjs.com/providers)、[HTTP 适配器](https://docs.nestjs.com/techniques/performance)、[SSE](https://docs.nestjs.com/techniques/server-sent-events)。核对日期：2026-09-13。框架文档说明机制，模块划分与部署方式是本项目的设计决策。

- [Thinking in LangGraph](https://docs.langchain.com/oss/javascript/langgraph/thinking-in-langgraph)：需求如何映射成图。
- [LangGraph overview](https://docs.langchain.com/oss/javascript/langgraph/overview)：编排运行层的边界。
- [Context engineering](https://docs.langchain.com/oss/javascript/langchain/context-engineering)：模型、工具与生命周期上下文。
- [Memory overview](https://docs.langchain.com/oss/javascript/concepts/memory)：记忆概念。
- [Short-term memory](https://docs.langchain.com/oss/javascript/langchain/short-term-memory)：历史裁剪、删除与摘要。
- [Persistence](https://docs.langchain.com/oss/javascript/langgraph/persistence)：运行状态保存。
- [Interrupts](https://docs.langchain.com/oss/javascript/langgraph/interrupts)：人工反馈及恢复时的执行语义。

## ComfyUI：本地服务
- [Server overview](https://docs.comfy.org/development/comfyui-server/comms_overview)：通信结构。
- [Routes](https://docs.comfy.org/development/comfyui-server/comms_routes)：任务提交、队列、历史及图片等接口。
- [Messages](https://docs.comfy.org/development/comfyui-server/comms_messages)：服务端事件语义。

这些是服务接入资料，不证明本地具备某种图像模型或编辑能力。实际能力必须从本地节点、模型与验证过的工作流确认。

## 跨语言工程阅读
- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)：上下文策略。
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)：长任务的进度、交接与验证。
- [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)：任务级评测。

## Rust 扩展
- [Rig 文档](https://docs.rig.rs/)：模型和工具相关抽象。无需为了学习本项目先重学 Rust。

## Skills 与运行时的关系
- [Agent Skills 概览](https://agentskills.io/home)：技能的用途与知识包形式。
- [Deep Agents Skills（TypeScript）](https://docs.langchain.com/oss/javascript/deepagents/skills)：技能发现、按需加载、参考资料与脚本。
- 对照前面的 LangGraph overview，理解知识包和执行运行时的不同职责。

建议在上下文工程之后阅读。选用 Skills 不意味着必须使用 Deep Agents，也不表示原生 LangGraph 会自动识别技能目录。

## LangChain 基础组件：在图编排之前阅读
- [Models](https://docs.langchain.com/oss/javascript/langchain/models)：模型接口与调用。
- [Messages](https://docs.langchain.com/oss/javascript/langchain/messages)：消息角色、内容与工具交互。
- [Tools](https://docs.langchain.com/oss/javascript/langchain/tools)：工具描述、参数和执行。
- [LangChain overview](https://docs.langchain.com/oss/javascript/langchain/overview)：基础组件与高层 agent 的关系。

对应 [04A](tutorials/04a-langchain-components.md)。先理解 Models → Messages → Tools，再进入 LangGraph；阅读包含 createAgent 的例子时区分组件概念和高层循环。本项目初期采用自建图。
