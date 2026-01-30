# Docker 部署指南

## 快速部署

```bash
# 1. 构建并启动容器
docker compose up -d --build

# 2. 查看日志
docker compose logs -f

# 3. 停止容器
docker compose down
```

## Nginx 域名配置

如果需要通过域名访问，建议在服务器上使用 nginx 作为反向代理：

```nginx
server {
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 环境变量配置

复制 `.env.example` 为 `.env` 并配置：

```bash
cp .env.example .env
```

## 一键部署脚本

创建 `deploy.sh`：

```bash
#!/bin/bash
set -e

echo "🚀 开始部署..."

# 拉取最新代码
git pull

# 构建并启动
docker compose up -d --build

echo "✅ 部署完成！"
echo "访问地址: http://localhost:8080"
```

## 生产环境建议

1. 使用 CI/CD 自动构建
2. 配置 SSL 证书
3. 设置日志轮转
4. 监控容器状态
