module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: "development",
    // 统一登录
    LOGIN_URL: "http://xxx",
    SERVER_URL: "http://localhost:7788",
    SYSTEM_PORT: "8888",
  },
  // 测试环境
  test: {
    NODE_ENV: "test",
    // 统一登录
    LOGIN_URL: "http://yyy",
    SERVER_URL: "https://yyy.yyy",
    SYSTEM_PORT: "8888",
  },
  // 生产环境
  pro: {
    NODE_ENV: "production",
    // 统一登录
    LOGIN_URL: "http://xxx",
    SERVER_URL: "https://xxx.xxx",
    SYSTEM_PORT: "8888",
  },
};
