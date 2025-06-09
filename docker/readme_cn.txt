环境要求：
Docker 20.10.14或以上，Docker Compose 2.0.0或以上

解压OpenResty管理器安装包：
tar -zxf docker.tgz && cd om

OpenResty Manager docker管理：
bash om.sh

快速入门：
1. 登录管理：访问http://ip:34567 ，默认用户名为“admin”，默认密码为“#Passw0rd”。
2. 添加SSL证书：转到证书管理菜单，申请Let's Encrypt免费SSL证书或上传现有证书。
3. 添加应用：转到应用商店菜单，一键安装应用，如WordPress等。
4. 添加上游：转到上游管理菜单，为安装的应用如WordPress站点添加上游负载均衡。
5. 添加站点：进入站点菜单，点击“新建站点”按钮，按照提示添加反向代理的站点域名。
6. 测试连接：将您的域名DNS A或CNAME记录更改为OpenResty Manager的服务器IP，访问您的网站查看是否可以打开。



