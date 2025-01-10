// app/api/langflow/route.ts
import { NextRequest, NextResponse } from "next/server";
import { LangflowClient } from "@/lib/langflowClient";

export async function POST(req: NextRequest) {
  try {
    const { inputValue, stream } = await req.json();

    const langflowClient = new LangflowClient(
      process.env.LANGFLOW_BASE_URL || "https://api.langflow.astra.datastax.com",
      process.env.LANGFLOW_APP_TOKEN || "<YOUR_APPLICATION_TOKEN>"
    );

    const flowIdOrName = "313faef3-fc3a-4229-9b87-5611ccbe451a";
    const langflowId = "269cdafa-5acf-42c7-884e-528834710684";

    // Provide any custom tweaks here
    const tweaks = {
      "ChatInput-GcvKv": {},
      "ParseData-FdIK0": {},
      "Prompt-N7q6D": {},
      "ChatOutput-cjy7v": {},
      "AstraDB-N9kaS": {},
      "AstraDB-gcplW": {},
      "File-WB82a": {},
      "OpenAIEmbeddings-cO6qo": {},
      "OpenAIEmbeddings-ONrK4": {},
      "OpenAIModel-dH9JT": {},
      "SplitText-QtjEE": {},
    };

    const response = await langflowClient.runFlow(
      flowIdOrName,
      langflowId,
      inputValue,
      "chat", // inputType
      "chat", // outputType
      tweaks,
      stream
    );

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
