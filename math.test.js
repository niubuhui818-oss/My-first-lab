const add = require('./math');

// 我们用最原始的 if 判断来代替 test 函数
console.log("正在启动体检...");

const result = add(1, 2);

if (result === 3) {
    console.log("✅ 测试通过：1 + 2 等于 3");
    process.exit(0); // 告诉 GitHub Actions：成功了！
} else {
    console.error("❌ 测试失败：期待 3，但得到了 " + result);
    process.exit(1); // 告诉 GitHub Actions：失败了！
}
