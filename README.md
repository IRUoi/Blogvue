# Blogvue
这是一个前后端分离的个人博客

技术栈：

- SpringBoot
- Mybatis Plus
- Shiro
- Lombok
- Redis 
- Hibernate validatior
- Jwt

核心：使用 Shiro 进行权限验证从而实现用户登录，Redis 存储会话信息

## 项目运行

1. 运行 Sql 脚本（MySql）
>账号：admin
>密码：111111
2. 安装并运行 Redis
3. 导入项目后端（blog）并运行
4. 导入项目前端（blog-vue）
安装依赖
`npm install`
运行前端
`npm run dev`