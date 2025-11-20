# Production Deployment Checklist

This checklist helps ensure a smooth production deployment of the GEO Is The New SEO website.

## Pre-Deployment Checklist

### Environment Configuration
- [ ] Confirm repository access (private repo requires GitHub/Vercel token with appropriate permissions)
- [ ] Set up production PostgreSQL database (Vercel Postgres or Neon recommended)
- [ ] Configure `DATABASE_URL` environment variable with production database credentials
- [ ] Generate and set a strong `SESSION_SECRET` (use a random string generator)
- [ ] Set `SESSION_COOKIE_SECURE=true` (Vercel provides HTTPS automatically)
- [ ] Set `NODE_ENV=production`
- [ ] Configure `VITE_GA_MEASUREMENT_ID` for Google Analytics (optional)

### Database Setup
- [ ] Run database migrations: `npm run db:push`
- [ ] Verify database tables are created correctly
- [ ] Test database connectivity from the application

### Build Verification
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run check` to verify TypeScript compilation
- [ ] Run `npm run build` to create production build
- [ ] Verify build artifacts are in the `dist/` directory
- [ ] Check that `dist/public/` contains all static assets

### Security Review
- [ ] Verify no `.env` files are committed to git
- [ ] Ensure all API endpoints use CSRF protection
- [ ] Review that sensitive data is not exposed in client-side code
- [ ] Confirm CodeQL security scanning is passing
- [ ] Review npm audit results (current: 5 moderate dev-only vulnerabilities - acceptable)

### SEO & Analytics
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Test meta tags on all pages (use tools like [metatags.io](https://metatags.io))
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (if measurement ID configured)

### Content Review
- [ ] Review all page content for accuracy
- [ ] Test all internal navigation links
- [ ] Verify external tool links are working
- [ ] Check contact form submission (if backend is configured)
- [ ] Test email subscription flow

### Performance Testing
- [ ] Run Lighthouse audit on main pages
- [ ] Test page load times
- [ ] Verify images are optimized
- [ ] Test mobile responsiveness on multiple devices
- [ ] Check browser compatibility (Chrome, Firefox, Safari, Edge)

## Deployment Steps

### Option A: Vercel Deployment (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Configure environment variables in Vercel dashboard or via CLI
4. Run `npm run build` to create production build
5. Deploy with `vercel --prod`
6. Alternatively, connect your GitHub repo to Vercel for automatic deployments
7. Configure custom domain in Vercel dashboard (if applicable)
8. Set up Vercel Postgres or connect to Neon database
9. Run database migrations after deployment

### Option B: Standard Node.js Hosting
1. Upload code to your hosting provider
2. Set environment variables in hosting control panel
3. Run `npm install --production`
4. Run database migrations: `npm run db:push`
5. Build the application: `npm run build`
6. Start the server: `npm run start`
7. Configure reverse proxy (nginx/Apache) if needed
8. Set up SSL certificate for HTTPS
9. Configure process manager (PM2/systemd) for auto-restart

## Post-Deployment Verification

### Functional Testing
- [ ] Visit homepage and verify it loads correctly
- [ ] Test user registration/login (if enabled)
- [ ] Navigate through all main pages
- [ ] Test checklist progress tracking (requires authentication)
- [ ] Submit test email subscription
- [ ] Test contact form
- [ ] Verify 404 page displays for invalid routes

### Monitoring Setup
- [ ] Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
- [ ] Configure error tracking (if implemented)
- [ ] Set up log aggregation (if needed)
- [ ] Monitor server resources (CPU, memory, disk)
- [ ] Set up database backups

### DNS & Domain
- [ ] Configure DNS A/CNAME records to point to server
- [ ] Set up SSL/TLS certificate (Let's Encrypt recommended)
- [ ] Verify HTTPS is working correctly
- [ ] Test domain redirects (www to non-www or vice versa)

### Final Checks
- [ ] Test all critical user flows
- [ ] Verify analytics are tracking page views
- [ ] Check browser console for JavaScript errors
- [ ] Review server logs for any errors
- [ ] Confirm email deliverability (if using email features)

## Known Issues & Limitations

### Acceptable for Production
- **Bundle Size Warning**: Main JavaScript bundle is 548KB. This is acceptable for an MVP. Consider code splitting in future iterations if performance becomes an issue.
- **Dev Dependencies**: 5 moderate npm vulnerabilities in dev dependencies (esbuild-related). These only affect the development server, not production builds.

### Current Blockers (Nov 20, 2025)
- **Dependency installation is blocked**: `npm install` currently returns 403 responses from the npm registry (e.g., `@eslint/js`), so `npm run build` cannot produce the required `dist/public` output for Vercel. Resolve by restoring registry access (e.g., through the proxy configuration) and rerun `npm install` followed by `npm run build` to confirm artifacts are generated.

### Future Enhancements
- Implement code splitting to reduce initial bundle size
- Add backend email service for contact form
- Implement blog CMS
- Add user-generated content features
- Consider CDN for static assets
- Implement advanced analytics tracking

## Rollback Plan

If issues occur after deployment:
1. Keep previous build artifacts
2. Have database backup ready
3. Document rollback command (depends on hosting provider)
4. Monitor error logs immediately after deployment
5. Have a communication plan for users if issues arise

## Support & Maintenance

- Monitor error logs regularly
- Review analytics data weekly
- Update dependencies monthly
- Renew SSL certificates as needed
- Perform security audits quarterly

---

**Last Updated**: November 7, 2024
**Version**: 1.0.0
