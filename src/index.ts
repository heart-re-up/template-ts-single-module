import { test } from "./utils/test-util";

const main = async (...args: (string | object)[]) => {
  // import test
  test(...args);
};

main("Hello World");
