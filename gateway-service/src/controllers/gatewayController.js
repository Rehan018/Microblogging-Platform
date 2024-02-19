const { createProxyMiddleware } = require('http-proxy-middleware');

const userServiceProxy = createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true });
const postServiceProxy = createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true });
const followServiceProxy = createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true });
const searchServiceProxy = createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true });
const notificationServiceProxy = createProxyMiddleware({ target: 'http://localhost:3005', changeOrigin: true });
const analyticsServiceProxy = createProxyMiddleware({ target: 'http://localhost:3006', changeOrigin: true });

module.exports = {
    userServiceProxy,
    postServiceProxy,
    followServiceProxy,
    searchServiceProxy,
    notificationServiceProxy,
    analyticsServiceProxy
};
