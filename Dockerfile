# 使用基础的Node.js镜像
# FROM dev-docker-hub.tianhong.cn/library/node:14.16 as builder
FROM node:18.16.0 as builder

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# # 安装项目依赖
RUN npm config set registry http://nexus.lzstack.com/repository/npmproxy
RUN npm install

# ENV NODE_ENV production
RUN npm run build

# FROM dev-docker-hub.tianhong.cn/library/nginx:1.21 AS production
FROM nginx:1.21.1-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
