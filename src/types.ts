export interface MemoryItem {
  id: string;
  sessionId: string;
  kind: "short" | "long";
  content: string;
}
