# 官方阅读资料
按学习主题查阅，不要求完整通读所有框架文档。网页和 API 会变化，实际实现时以对应安装版本为准。

## LangGraph / LangChain：TypeScript
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
