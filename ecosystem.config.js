module.exports = {
    apps: [
        {
            script: 'npm run build && npm run start:prod',
        },
    ],

    // Deployment Configuration
    deploy: {
        production: {
            user: 'jsix-auth',
            host: ['94.250.250.66'],
            ref: 'origin/master',
            repo: 'git@github.com:Jsox/auth-nest.git',
            path: '/home/jsix-auth/htdocs/auth.jsix.ru',
            'post-deploy': 'npm install',
        },
    },
};
