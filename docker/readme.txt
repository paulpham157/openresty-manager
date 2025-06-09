Environmental requirements:
Docker 20.10.14 or above, Docker Compose 2.0.0 or above

Decompression OpenResty Manager Installation Package:
tar -zxf docker.tgz && cd om

OpenResty Manager docker management: Execute the following command and start the OpenResty Manager Docker service according to the prompts:
bash om.sh

Quick Start:
1. Login to the management: Access http://ip:34567 , the default username is "admin", and the default password is "#Passw0rd".
2. Add SSL certificates: Go to the certificates management menu, apply for a Let's Encrypt free SSL certificate or upload an existing certificate.
3. Add apps: Go to the app store menu and install apps such as WordPress with just one click.
4. Add upstreams: Go to the upstream management menu and add upstream load balancing for installed applications such as WordPress.
5. Add a site: Go to the sites menu, click the "New site" button, and follow the prompts to add the site domain names for reverse proxy.
6. Test connectivity: Change your domain dns A or CNAME record to the OpenResty Manager server IP, visit your website to see if it can be opened.