function sum(firstArg, opt_argsStack) {
  const argsStack = (opt_argsStack || []).concat([firstArg]);

  const nextSum = nextArg => sum(nextArg, argsStack);
  nextSum.valueOf = () => argsStack.reduce((a, b) => a + b);
  return nextSum;
}

console.log(sum(1)(2)(10)(190));
