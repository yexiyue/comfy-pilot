# ComfyPilot
一个基于本地 ComfyUI 的 AI 图片创作工作台，也是系统学习 agent 与 harness 工程的实践项目。

**当前阶段：已初始化前后端脚手架，创作功能尚未实现。**

实际目录为 `app/web` 与 `app/server`，由根目录 pnpm workspace 管理。前端当前使用 TanStack Start（React + Vite），包含 SSR 构建，与此前纯 SPA 规划有区别；尚未实现由 NestJS 单独托管前端的生产部署。

## 本地开发

使用 Node.js 24 与 pnpm 11.20.0，在根目录执行：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

前端为 `http://127.0.0.1:3000`，NestJS 为 `http://127.0.0.1:3001`。开发代理将 `/api/*` 转发至 NestJS 并移除 `/api` 前缀；访问前端 `/api/` 可取得后端示例响应。

`pnpm build` 构建两端；`pnpm typecheck` 与 `pnpm lint` 检查两端；`pnpm test` 和 `pnpm test:e2e` 运行后端测试。依赖统一在根目录安装，维护一个锁文件；新增共享包时放入 `packages/`。

已移除 NestJS 云端 Observe 的占位配置，后续有实际需求时再接入。环境文件、构建产物与运行数据不提交到 Git。

## 产品规划

首版采用本地 Web 应用：React + Vite 前端、NestJS 常驻后端、LangChain + LangGraph 编排、SQLite 业务存储与本地资产目录。工程化入门见 [02B](docs/tutorials/02b-engineering-foundation.md)。

- [文档导航](docs/README.md)
- [产品文档](docs/product.md)
- [路线图与阶段验收](docs/roadmap.md)
- [系统边界与架构决策](docs/architecture.md)
- [术语表](docs/glossary.md)

项目名称中的 Pilot 表示陪伴用户完成创作、选择与修改的助手。目录名为 `comfy-pilot`。名称暂用于个人学习项目，未做商标或域名核验。
