# 术语索引
这里给出本项目中的简要含义；深入解释见对应教程。

| 术语 | 中文及含义 | 篇章 |
|---|---|---|
| Agent | 根据观察决定下一步的任务执行系统 | 01、05 |
| Harness | 运行循环、上下文、工具环境和可靠性机制 | 01、12 |
| Workflow | 由程序组织的步骤 | 01、02 |
| Tool calling | 模型提出工具请求，程序校验并执行 | 05 |
| Capability | 环境实际具备的能力 | 02 |
| Schema | 输入输出的数据约束 | 02、03 |
| Brief | 创作目标与约束的结构化记录 | 03 |
| Provenance | 信息来源 | 03 |
| State | 当前任务的事实集合 | 04 |
| Asset | 图片等持久产物 | 04 |
| Lineage | 产物的来源与版本关系 | 04 |
| Node / Edge | 图中的步骤与连接 | 05 |
| Reducer | 状态更新的合并规则 | 05 |
| Context engineering | 为每次模型调用组织必要信息 | 06 |
| Compaction | 压缩历史信息 | 06 |
| Offloading | 大资料外置，按需访问 | 06 |
| Retrieval | 获取当前相关资料 | 06、07 |
| Memory | 会话内或跨会话保存的有用信息 | 07 |
| HITL | Human-in-the-loop，人工介入 | 08 |
| Interrupt / Resume | 暂停与继续图运行 | 08 |
| Checkpoint | 运行状态检查点 | 08 |
| Idempotency | 重复操作不产生额外预期外效果 | 09 |
| Reconciliation | 本地与外部实际状态核对 | 09 |
| Trace / Span | 全程轨迹及其中一次操作 | 10 |
| Eval / Rubric | 评测与评分标准 | 10 |
| Streaming | 增量发送消息或任务事件 | 11 |
| Contract | 模块间的数据与行为契约 | 12 |

特别区分：ComfyUI workflow 不等于 LangGraph workflow；ComfyUI prompt_id 不等于文本提示词；应用 thread 不等于操作系统线程；任务完成不等于用户接受图片。
