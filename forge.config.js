module.exports = {
    packagerConfig: {
        icon: './src/icons/icon',
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                iconUrl: 'https://www.bsrserver.org:8443/minio/frontend/common/logos/logo.ico',
                setupIcon: './src/icons/icon.ico',
            },
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {
                icon: './src/icons/icon.icns',
            },
        },
    ],
};
