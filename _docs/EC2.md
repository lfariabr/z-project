# Setting up webserver:
EC2 new instance
Select instance type
Create keypem file
Config network settings (port 22, 443, 80)
Create instance, ok

# Elastic IP
on EC, generate new IP
connect it to instance

# Connecting to server
chmod 400 zd-keypair.pem
ssh -i ./zd-keypair.pem ubuntu@52.9.250.18

# Update and install
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y git nginx build-essential

# Node LTS + PM2
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm i -g pm2

# Docker Engine
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(. /etc/os-release; echo $VERSION_CODENAME) stable" \
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Optional: run docker without sudo (log out/in after)
sudo usermod -aG docker $USER

# Make sure docker/compose are enabled (start on boot)
sudo systemctl enable --now docker
docker --version
docker compose version

# Firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status

# Picking a deploy path
sudo mkdir -p /var/www/zerodopamine
sudo chown -R ubuntu:ubuntu /var/www/zerodopamine
cd /var/www/zerodopamine

# Cloning the repo
git clone https://github.com/lfariabr/z-project.git .

--- we're here --- 

# Running the docker container
docker compose up -d --build
docker compose logs -f db backend frontend

# Deploy sequence (server)
## go to deploy dir
cd /var/www/zerodopamine

## pull latest
git pull --ff-only

## rebuild + start
docker compose build
docker compose up -d

## check
docker compose ps
docker compose logs -f --tail 100