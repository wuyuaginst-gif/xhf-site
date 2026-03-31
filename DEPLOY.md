# Docker 部署指南

## 快速部署

```bash
# 1. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，配置数据库等信息

# 2. 构建并启动容器
docker compose up -d --build

# 3. 查看日志
docker compose logs -f

# 4. 停止容器
docker compose down
```

服务将在 `http://localhost:3001` 启动

## Nginx 反向代理配置（推荐用于生产环境）

如果需要通过域名访问或使用 80/443 端口，建议在服务器上使用 nginx 作为反向代理：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 客户端最大上传大小
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket 支持（如果需要）
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

配置 SSL 证书（使用 Let's Encrypt）：

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com
```

## 环境变量配置

必须配置的环境变量（在 `.env` 文件中）：

```bash
# 数据库连接
DATABASE_URL=mysql://user:password@host:3306/database

# JWT 密钥（生产环境必须修改）
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# 应用配置
VITE_APP_TITLE=湖北鑫恒福科技
```

可选配置：

```bash
# OAuth 认证
OAUTH_SERVER_URL=https://your-oauth-server.com
OWNER_OPEN_ID=your_owner_open_id

# S3 存储
S3_ACCESS_KEY_ID=your_key
S3_SECRET_ACCESS_KEY=your_secret
S3_REGION=us-east-1
S3_BUCKET=your_bucket
```

## 数据库迁移

首次部署或更新数据库结构时：

```bash
# 在容器内执行
docker compose exec app npm run db:push
```

## 一键部署脚本

创建 `deploy.sh`：

```bash
#!/bin/bash
set -e

echo "🚀 开始部署..."

# 拉取最新代码
git pull

# 停止旧容器
docker compose down

# 构建并启动新容器
docker compose up -d --build

# 等待服务启动
sleep 5

# 检查服务状态
docker compose ps

echo "✅ 部署完成！"
echo "访问地址: http://localhost:3001"
```

使用方法：

```bash
chmod +x deploy.sh
./deploy.sh
```

## 生产环境检查清单

- [ ] 修改 `.env` 中的 `JWT_SECRET`
- [ ] 配置正确的 `DATABASE_URL`
- [ ] 运行数据库迁移 `npm run db:push`
- [ ] 配置 Nginx 反向代理
- [ ] 配置 SSL 证书
- [ ] 设置防火墙规则
- [ ] 配置日志轮转
- [ ] 设置监控和告警

## 常见问题

### 端口被占用

修改 `docker-compose.yml` 中的端口映射：

```yaml
ports:
  - "8080:3001"  # 将本地 8080 端口映射到容器 3001 端口
```

### 数据库连接失败

确保数据库可以从 Docker 容器访问。如果数据库在本机，使用 `host.docker.internal` 代替 `localhost`：

```bash
DATABASE_URL=mysql://user:password@host.docker.internal:3306/database
```

### 查看容器日志

```bash
docker compose logs -f app
```
