# BACKLOG

## IN PROGRESS
### **0.11.0** - `Go Live`
- [X] Buy domain name: zerodopamine.com
- [X] Create 1x TY for sub email
- [X] Create 1x Week 1 content email
- [X] Configure hosting (EC2 + Docker)
- [X] Infra point DNS to EC2 Elastic IP
- [X] Configure mongoDB cluster and connect to backend .env
- [X] Update docker-compose.yml for production
- [X] Configure nginx
    # 1 Ensure dirs exist
    `sudo mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled`

    # 2 Copy your site config into place
    `sudo cp /var/www/zerodopamine/etc/nginx/sites-available/zerodopamine.conf /etc/nginx/sites-available/zerodopamine.conf`

    # 3 Enable your site and remove default
    `sudo ln -sf /etc/nginx/sites-available/zerodopamine.conf /etc/nginx/sites-enabled/zerodopamine.conf`
    `sudo rm -f /etc/nginx/sites-enabled/default`

    # 4 Validate and reload
    `sudo nginx -t`
    `sudo systemctl reload nginx`

    # Verify containers are up and listening on the host:
    `docker compose ps`
    `ss -ltnp | egrep ':80|:3000|:4000'`

    # Test
    `curl -I http://zerodopamine.com
    curl -s -X POST http://zerodopamine.com/api/graphql \
    -H 'Content-Type: application/json' \
    -d '{"query":"{ __typename }"}'`
- [X] Configure SSL and Configure certbot
    `sudo apt-get update`
    `sudo apt-get install -y certbot python3-certbot-nginx`

    # Issue certs + enable HTTPS redirect and HSTS
    `sudo certbot --nginx \
    -d zerodopamine.com -d www.zerodopamine.com \
    --redirect --hsts --staple-ocsp \
    -m lfariaus@gmail.com --agree-tos -n`

    # Verify renewal works
    `sudo certbot renew --dry-run`

    # Validate and reload
    `sudo nginx -t`
    `sudo systemctl reload nginx`

    # Test HTTPs
    `curl -I https://zerodopamine.com`
    curl -s -X POST https://zerodopamine.com/api/graphql \
    -H 'Content-Type: application/json' \
    -d '{"query":"{ __typename }"}'`

    # Confirm Renewal Timer
    `systemctl status certbot.timer`

## BACKLOG
- Plug in Resend for triggering
- Validate domain on Resend
- Add Articles
- Adds types of users (Admin, Editor, Subscriber)
- Create 2 articles to kickstart the project
- Create 2 emails out of articles
- Add User Login, Registration, and Profile
- Add User Authentication
- Add Middleware for auth protected routes
- Add Redis for caching and rate limiting

## DONE
### **0.1.0** - `BE Apollo Server`
- sets up backend's apollo server

### **0.2.0** - `BE MongoDB`
- sets up backend's mongodb and first query

### **0.3.0** - `Docker Container`
- sets up running mongodb on docker container to work with github codespaces

### **0.4.0** - `FE Next.js`
- Adds in wireframe refs and sets up next.js project

### **0.5.0** - `FE Homepage`
- Adds in homepage and adds animations

### **0.6.0** - `BE Models`
- Adds in models and readme supercharge
- Adds in types
- Finishes setting up users models, queries, and mutations

### **0.7.0** - `FE Navbar`
- Adds in navbar (header) with page's countdown
- adds registered State
- enhancements to UX via pulse, email auto-focus and enter key submit

### **0.8.0** - `FE Footer`
- adds footer component
- adds About page

### **0.9.0** - `Docker Container`
- dockerizes frontend + backend + mongodb on single container

### **0.10.0** - `FE About Page V2`
- Update About page to talk a bit more about the project
- Adds in Subscribe button