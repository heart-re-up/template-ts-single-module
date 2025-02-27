// 샘플 코드 실행 예제
import * as pkg from "../src/index";
import { test } from "../src/utils/test-util";

console.log("sample code execution...");
console.log("package content:", pkg);

// 여기에 샘플 코드를 추가하세요
const main = async () => {
  try {
    test("test for importing module in src", { data: "sample data" });
    console.log("sample code executed successfully");
  } catch (error) {
    console.error("sample code execution error:", error);
  }
};

main().catch(console.error);
