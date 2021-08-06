# docker_ci
# Auto Deployment

#### 项目介绍

一个基于node.js开发的用于迅速搭建并使用 WebHook 进行自动化部署和运维系统，支持：Gitee。
现在绝大多数git仓库管理平台都支持设置一个回调URL，包括github、Gitee、Coding等。当开发者在本地push代码到远程时，就会向该URL发起请求，接收该请求的服务器可以在本地运行一个配置好的命令。
测试使用Docker / Github Webhook实现CI持续集成

#### 软件架构

node.js + gitee-webhook-handler + loger4js + pm2
推荐使用pm2进程管理器，能够监听代码改动，并自动docker-compose重启。

#### 安装教程

1. 克隆源码
    
        git clone git@gitee.com:geshuyong/GiteeWebHook.git
        #或
        git clone https://gitee.com/geshuyong/GiteeWebHook.git
    
2. 安装服务

        npm install
    
3. 修改配置文件config.js
    
        {
            os: "linux",        //系统类型：windows\linux
            path: "",           //WebHook POST路径，根据实际设定
            secret: "",         //请求密码，根据实际设定
            port: 1314          //WEB Hook服务端口号
        }


4. 配置命令脚本，将脚本添加至cmd目录，脚本名称为:仓库名称.sh。WEB_PATH的值需根据实际项目位置设定。

#### 安装教程


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

echo "# docker-ci" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/blaunicorn/docker-ci.git
git push -u origin main

git remote add origin https://github.com/blaunicorn/docker-ci.git
git branch -M main
git push -u origin main










