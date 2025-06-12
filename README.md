# Minimalist Portfolio

A clean and minimalist portfolio website template built with Next.js.

## Quick Deploy

Click the button below to deploy to Tencent Cloud EdgeOne with one click:

[![Deploy to Tencent Cloud](https://img.shields.io/badge/Deploy%20to-Tencent%20Cloud-blue)](https://console.tencentcloud.com/edgeone/pages/new?template=https://github.com/tomcomtang/minimalist-portfolio&output-directory=./out&build-command=npm%20run%20build&install-command=npm%20install)

## Features

- Responsive design
- Configurable content
- Modern UI/UX
- Easy to customize

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/tomcomtang/minimalist-portfolio
cd minimalist-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Modify configuration:
   Edit the `src/config/content.json` file to update your personal information, projects, skills, and other content.

4. Run development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Configuration File Guide

All website content can be configured in the `src/config/content.json` file. The configuration file includes the following sections:

### Navigation Bar (nav)

- `name`: Website name
- `menu`: Navigation menu items list

### Homepage (hero)

- `greeting`: Greeting message
- `name`: Your name
- `title`: Your position
- `description`: Brief description

### About (about)

- `title`: Section title
- `description`: Description about you
- `button`: Resume download button text

### Skills (skills)

- `title`: Skills section title
- `categories`: Skills categories list
  - Each category includes `title` and `skills` array
  - Each skill includes `name` and `image` path

### Experience (experience)

- `title`: Experience section title
- `timeline`: Experience timeline list
  - Each experience includes `title`, `company`, `period`, and `description`

### Projects (projects)

- `title`: Projects section title
- `items`: Projects list
  - Each project includes `title`, `description`, `technologies`, `github` link, and `image` path

### Contact (contact)

- `title`: Contact section title
- `info`: Contact information
  - `email`: Email address
  - `phone`: Phone number
  - `location`: Location
- `social`: Social media links list
  - Each link includes `name`, `icon`, and `link`
- `form`: Contact form text
  - `name`: Name input label
  - `email`: Email input label
  - `message`: Message input label
  - `submit`: Submit button text
- `emailjs`: EmailJS configuration
  - `service_id`: EmailJS service ID (obtain from EmailJS dashboard)
  - `template_id`: EmailJS template ID (obtain from EmailJS dashboard)
  - `public_key`: EmailJS public key (obtain from EmailJS dashboard)
  - `to_email`: Recipient email address

## EmailJS Configuration Guide

1. Register for an [EmailJS](https://www.emailjs.com/) account
2. Create an Email Service:
   - After logging in, click "Email Services"
   - Click "Add New Service"
   - Choose an email provider (e.g., Gmail, Outlook)
   - Follow the steps to connect your email account
   - You'll receive a `Service ID` upon completion
3. Create an Email Template:
   - Click "Email Templates"
   - Click "Create New Template"
   - Design your email template using these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient's email
   - Save to get a `Template ID`
4. Get Public Key:
   - Go to the "Account" page in EmailJS dashboard
   - Find the "API Keys" section
   - Copy the `Public Key`
5. Configure these details in `src/config/content.json`

## Customizing Styles

All styles are in the `public/style.css` file. You can modify colors, fonts, spacing, and more according to your needs.

## Contributing

Pull requests and issues are welcome.

## License

MIT License
