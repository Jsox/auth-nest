module.exports = {
    apps: [
        {
            script: 'npm run build && start:prod',
        },
    ],

    // Deployment Configuration
    deploy: {
        production: {
            user: 'jsix-auth',
            host: ['192.168.0.13', '192.168.0.14', '192.168.0.15'],
            ref: 'origin/master',
            repo: 'git@github.com:Jsox/auth-nest.git',
            path: '/home/jsix-auth/htdocs/auth.jsix.ru',
            'post-deploy': 'npm install',
        },
    },
};
