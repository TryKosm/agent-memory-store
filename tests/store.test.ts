import { add, list } from "../src/store.js";

add({ id: "1", sessionId: "s1", kind: "short", content: "hello" });
if (list("s1").length !== 1) {
  throw new Error("store test failed");
}
