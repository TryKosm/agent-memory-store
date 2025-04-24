import { retentionDays } from "../src/policy.js";

if (retentionDays({ id: "1", sessionId: "s1", kind: "long", content: "x" }) !== 90) {
  throw new Error("policy test failed");
}
