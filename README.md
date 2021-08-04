# docker_ci
测试使用Docker / Github Webhook实现CI持续集成

- docker-compose
- gitlab webhooks


## 示例代码运行
- NodeJS 8.0 need https://nodejs.org/en/
- Clone or download this repository
Enter your local directory, and 
- start webhooks watcher
``` bash
npm install
npx ## 示例代码运行
- NodeJS 10 need https://nodejs.org/en/
- Clone or download this repository
Enter your local directory, and 
- install dependencies:
``` bash
npm install
npm install pm2 -g
pm2 start webhooks.js --watch

```




设置Webhooks
简易的命令行入门教程:
Git 全局设置:

git config --global user.name "blackunicorn"
git config --global user.email "blackunicorn@163.com"
创建 git 仓库:

mkdir docker-cl
cd docker-cl
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/blaunicorn/docker-cl.git
git push -u origin master
已有仓库?

cd existing_git_repo
git remote add origin https://gitee.com/blaunicorn/docker-cl.git
git push -u origin master










