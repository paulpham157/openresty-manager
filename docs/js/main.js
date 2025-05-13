// 初始化AOS动画库
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// 初始化剪贴板功能
new ClipboardJS('.copy-btn').on('success', function(e) {
    const originalText = e.trigger.textContent;
    e.trigger.textContent = 'Copied!';
    setTimeout(() => {
        e.trigger.textContent = originalText;
    }, 2000);
});

// 多语言支持
const translations = {
    zh: {
		title: 'OpenResty Manager - 最简单、功能强大的开源OpenResty管理器',
        features: '特色功能',
        installation: '安装指南',
        about: '关于项目',
        get_started: '快速开始',
        features_title: '特色功能',
        features_subtitle: '强大而简单的功能集合，满足您的所有需求',
        ui_title: '美观的UI界面',
        ui_desc: '提供直观、美观且易于使用的Web管理界面，让操作更加简单高效。',
        ssl_title: 'SSL证书管理',
        ssl_desc: '支持HTTP-01和DNS-01挑战方式，自动申请和续期免费SSL证书。',
        proxy_title: '反向代理',
        proxy_desc: '轻松创建和管理反向代理配置，无需深入了解OpenResty细节。',
        installation_title: '安装指南',
        installation_subtitle: '简单几步，快速部署OpenResty Manager',
        host_install: '主机版安装',
        docker_install: 'Docker版安装',
        copy: '复制',
        about_title: '关于项目',
        about_desc: 'OpenResty Manager是一个开源项目，致力于简化OpenResty的管理和配置过程。采用Go语言开发，具有高性能、跨平台等特点。',
        footer_text: '基于GPL协议开源。',
        hero_title: 'OpenResty Manager',
        hero_subtitle: '最简单、功能强大的开源OpenResty管理器，让您轻松管理网站和SSL证书',
        access_info: '访问地址：http://ip:34567',
        default_username: '默认用户名：admin',
        default_password: '默认密码：#Passw0rd'
    },
    en: {
		title: 'OpenResty Manager - The easiest using, powerful and beautiful OpenResty manager',
        features: 'Features',
        installation: 'Installation',
        about: 'About',
        get_started: 'Get Started',
        features_title: 'Features',
        features_subtitle: 'Powerful yet simple feature set to meet all your needs',
        ui_title: 'Beautiful UI',
        ui_desc: 'Provides an intuitive, beautiful and easy-to-use web management interface for efficient operations.',
        ssl_title: 'Free Certificates',
        ssl_desc: 'Supports HTTP-01 and DNS-01 challenges for automatic free SSL certificate application and renewal.',
        proxy_title: 'Reverse Proxy',
        proxy_desc: 'Easily create and manage reverse proxy configurations without deep OpenResty knowledge.',
        installation_title: 'Installation Guide',
        installation_subtitle: 'Quick deployment in a few simple steps',
        host_install: 'Host Installation',
        docker_install: 'Docker Installation',
        copy: 'Copy',
        about_title: 'About Project',
        about_desc: 'OpenResty Manager is an open-source project dedicated to simplifying OpenResty management and configuration. Developed in Go, it features high performance and cross-platform support.',
        footer_text: 'Open-sourced under GPL License.',
        hero_title: 'OpenResty Manager',
        hero_subtitle: 'The simplest and most powerful open-source OpenResty manager for effortless website and SSL certificate management',
        access_info: 'Access URL: http://ip:34567',
        default_username: 'Default Username: admin',
        default_password: 'Default Password: #Passw0rd'
    }
};

let currentLang = 'en';

// 切换语言函数
function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
    document.querySelector('.lang-switch').textContent = currentLang === 'zh' ? 'English' : '中文';
}

// 更新页面文本
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // 更新安装信息
    const hostInstallCard = document.querySelector('.installation-card');
    if (hostInstallCard) {
        const accessInfo = hostInstallCard.querySelector('p:nth-of-type(1)');
        const username = hostInstallCard.querySelector('p:nth-of-type(2)');
        const password = hostInstallCard.querySelector('p:nth-of-type(3)');
        
        if (accessInfo && username && password) {
            accessInfo.textContent = translations[currentLang].access_info;
            username.textContent = translations[currentLang].default_username;
            password.textContent = translations[currentLang].default_password;
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // 向下滚动
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            navbar.style.transform = 'translateY(0)';
        }
        
        if (currentScroll === 0) {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        } else {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
