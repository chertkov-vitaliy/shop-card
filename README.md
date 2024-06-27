
# Create the cloud node and scan port 
> sudo nmap -sV [IP]

# Connect to remote host: 
> ssh root@[IP]

# Create user 
> adduser [user]

# Add user to sodo list 
> sudo usermod -aG sudo [user]
> sudo su - [user]

# Check for latest updates:
sudo apt update

# Проверка локали 
> locale -a 
# Установка локали ru_RU.utf8
> sudo apt install language-pack-ru


# Установка git 
> sudo apt install git

# Установка nvm и latest Node 
https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/?tabs=wget

> wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
> source ~/.bashrc
> nvm install node
> node --version
> npm install --global yarn


# Установка БД.  Добавить официальный PPA от разработчиков PostgreSQL
> sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
> wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
> sudo apt update
> sudo apt -y install postgresql
> ps f --forest -u postgres | grep -v "f --forest -u postgres"

# Создаем пользователя для БД
> sudo su - postgres
> CREATE ROLE shop WITH LOGIN PASSWORD '123!';
> CREATE DATABASE shop LOCALE
    'ru_RU.utf8' OWNER shop  TEMPLATE template0;
> ALTER USER shop CREATEDB;
# Правим конфиг prizma


# Deployment
https://nuxt.com/docs/getting-started/deployment

# Инициализация БД
> npx prisma migrate dev --name init
# Перегенерация клиента prizma
> npx prisma generate

# Запуск WWW службы на 3000
> npm run build
> node .output/server/index.mjs

# Установка процесс менеджера Node
> npm install pm2 -g

# Создание файла ecosystem.config.cjs
module.exports = {
apps: [
    {
        name: 'StudentTracker',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
    }]
}

# Install PM2 Process Management
> npm install pm2@latest -g
> pm2 start ecosystem.config.cjs


pm2 list	View the list of started services
pm2 show id number	Check the detailed service status corresponding to the id number
pm2 start name (service name)	start service
pm2 stop name (service name)	terminate service
pm2 restart name (service name)	restart service
pm2 delete name (service name)	delete service
pm2 kill name (service name)	kill service
pm2 logs name (service name)	View service execution log
pm2 logs name (service name)	View service log

Убедиться что служба запущена.
pm2 logs StudentTracker


# Запуск
https://pm2.keymetrics.io/docs/usage/quick-start/

# Просмотр запущенных сервисов на порту
sudo lsof -i
netstat -pnltu



# Installing Nginx
sudo apt-get install nginx
sudo rm /etc/nginx/sites-enabled/default
vim nano /etc/nginx/sites-available/node

server {
    listen 80;
    server_name innostart-unecon-ru.ru;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3000";
    }
}

sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node
sudo service nginx restart
systemctl status nginx 

# Увеличение разрешенного размера для загрузки файлов на Nginx
sudo vi /etc/nginx/nginx.conf

# Проверить конфигурацию файла
client_max_body_size 100M
sudo nginx -t
nginx -s reload


# link
https://dev.to/jsstackacademy/deploy-nodejs-application-using-nginx-3jhh
https://losst.pro/nastrojka-iptables-dlya-chajnikov
https://nuxtjs-org-docus-fork.netlify.app/docs/deployment/pm2/
https://pm2.keymetrics.io/docs/usage/quick-start/
