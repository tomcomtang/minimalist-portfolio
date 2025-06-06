# Minimalist Portfolio

一个简洁的个人作品集网站模板，使用 Next.js 构建。

## 特点

- 响应式设计
- 可配置的内容
- 现代化的 UI/UX
- 易于定制

## 快速开始

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/minimalist-portfolio.git
cd minimalist-portfolio
```

2. 安装依赖：

```bash
npm install
```

3. 修改配置文件：
   编辑 `src/config/content.json` 文件，更新你的个人信息、项目、技能等内容。

4. 运行开发服务器：

```bash
npm run dev
```

5. 构建生产版本：

```bash
npm run build
```

## 配置文件说明

所有的网站内容都可以在 `src/config/content.json` 文件中配置。配置文件包含以下部分：

### 导航栏 (nav)

- `name`: 网站名称
- `menu`: 导航菜单项列表

### 首页 (hero)

- `greeting`: 问候语
- `name`: 你的名字
- `title`: 你的职位
- `description`: 简短描述

### 关于 (about)

- `title`: 标题
- `description`: 关于你的描述
- `button`: 下载简历按钮文本

### 技能 (skills)

- `title`: 技能部分标题
- `categories`: 技能分类列表
  - 每个分类包含 `title` 和 `skills` 数组
  - 每个技能包含 `name` 和 `image` 路径

### 经验 (experience)

- `title`: 经验部分标题
- `timeline`: 经验时间线列表
  - 每个经验包含 `title`、`company`、`period` 和 `description`

### 项目 (projects)

- `title`: 项目部分标题
- `items`: 项目列表
  - 每个项目包含 `title`、`description`、`technologies`、`github` 链接和 `image` 路径

### 联系 (contact)

- `title`: 联系部分标题
- `info`: 联系信息
  - `email`: 邮箱地址
  - `phone`: 电话号码
  - `location`: 位置
- `social`: 社交媒体链接列表
  - 每个链接包含 `name`、`icon` 和 `link`
- `form`: 联系表单文本
  - `name`: 名字输入框标签
  - `email`: 邮箱输入框标签
  - `message`: 消息输入框标签
  - `submit`: 提交按钮文本

## 自定义样式

所有的样式都在 `public/style.css` 文件中。你可以根据需要修改颜色、字体、间距等。

## 贡献

欢迎提交 Pull Request 或创建 Issue。

## 许可

MIT License
