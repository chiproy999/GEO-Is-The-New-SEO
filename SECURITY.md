# Security Policy

## Supported Versions

We actively support the latest version of GEO Is The New SEO with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it by emailing the maintainers or creating a private security advisory on GitHub.

**Please do not report security vulnerabilities through public GitHub issues.**

When reporting a vulnerability, please include:
- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if available)

We will respond to security reports within 48 hours and will work to address confirmed vulnerabilities as quickly as possible.

## Security Best Practices

This application follows security best practices including:
- CSRF protection on all state-changing endpoints
- Secure session management
- Input validation and sanitization
- SQL injection prevention through parameterized queries
- XSS prevention through React's built-in escaping
- Regular dependency updates and security audits

