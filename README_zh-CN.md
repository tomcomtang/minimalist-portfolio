# 极简作品集

一个使用 Next.js 构建的简洁极简的作品集网站模板。

## 快速部署

点击下方按钮一键部署到腾讯云 EdgeOne：

[![部署到腾讯云](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/minimalist-portfolio&output-directory=./out&build-command=npm%20run%20build&install-command=npm%20install)

## 功能特性

- 响应式设计
- 可配置内容
- 现代化 UI/UX
- 易于自定义

## 快速开始

1. 克隆仓库：

```bash
git clone https://github.com/tomcomtang/minimalist-portfolio
cd minimalist-portfolio
```

2. 安装依赖：

```bash
npm install
```

3. 修改配置：
   编辑 `src/config/content.json` 文件以更新您的个人信息、项目、技能和其他内容。

4. 运行开发服务器：

```bash
npm run dev
```

5. 构建生产版本：

```bash
npm run build
```

## 在线演示

[在此查看在线演示](https://minimalist-portfolio.edgeone.app/)

## 配置文件指南

所有网站内容都可以在 `src/config/content.json` 文件中配置。配置文件包括以下部分：

### 导航栏（nav）

- `name`：网站名称
- `menu`：导航菜单项列表

### 首页（hero）

- `greeting`：问候语
- `name`：您的名字
- `title`：您的职位
- `description`：简短描述

### 关于（about）

- `title`：部分标题
- `description`：关于您的描述
- `button`：简历下载按钮文本

### 技能（skills）

- `title`：技能部分标题
- `categories`：技能分类列表
  - 每个分类包括 `title` 和 `skills` 数组
  - 每个技能包括 `name` 和 `image` 路径

### 经历（experience）

- `title`：经历部分标题
- `timeline`：经历时间线列表
  - 每个经历包括 `title`、`company`、`period` 和 `description`

### 项目（projects）

- `title`：项目部分标题
- `items`：项目列表
  - 每个项目包括 `title`、`description`、`technologies`、`github` 链接和 `image` 路径

### 联系（contact）

- `title`：联系部分标题
- `info`：联系信息
  - `email`：电子邮箱地址
  - `phone`：电话号码
  - `location`：位置
- `social`：社交媒体链接列表
  - 每个链接包括 `name`、`icon` 和 `link`
- `form`：联系表单文本
  - `name`：姓名输入标签
  - `email`：邮箱输入标签
  - `message`：留言输入标签
  - `submit`：提交按钮文本
- `emailjs`：EmailJS 配置
  - `service_id`：EmailJS 服务 ID（从 EmailJS 仪表板获取）
  - `template_id`：EmailJS 模板 ID（从 EmailJS 仪表板获取）
  - `public_key`：EmailJS 公钥（从 EmailJS 仪表板获取）
  - `to_email`：收件人电子邮箱地址

## EmailJS 配置指南

1. 注册 [EmailJS](https://www.emailjs.com/) 账户
2. 创建电子邮件服务：
   - 登录后，点击"Email Services"
   - 点击"Add New Service"
   - 选择电子邮件提供商（例如 Gmail、Outlook）
   - 按照步骤连接您的电子邮件账户
   - 完成后您将收到一个 `Service ID`
3. 创建电子邮件模板：
   - 点击"Email Templates"
   - 点击"Create New Template"
   - 使用以下变量设计您的电子邮件模板：
     - `{{from_name}}` - 发件人姓名
     - `{{from_email}}` - 发件人电子邮箱
     - `{{message}}` - 留言内容
     - `{{to_email}}` - 收件人电子邮箱
   - 保存以获取 `Template ID`
4. 获取公钥：
   - 在 EmailJS 仪表板转到"Account"页面
   - 找到"API Keys"部分
   - 复制 `Public Key`
5. 在 `src/config/content.json` 中配置这些详细信息

## 自定义样式

所有样式都在 `public/style.css` 文件中。您可以根据需要修改颜色、字体、间距等。

## 贡献

欢迎 Pull Request 和 Issue。

## 许可证

MIT 许可证
