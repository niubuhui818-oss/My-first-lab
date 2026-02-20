const add = require('./math');
test('1+2=3', () => {
  if (add(1, 2) !== 3) throw new Error("计算错误！");
});
