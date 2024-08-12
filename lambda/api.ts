import { z } from "zod";
import type { RenderMediaOnLambdaOutput } from "@remotion/lambda/client";
import {
  ProgressRequest,
  ProgressResponse,
  RenderRequest,
} from "../types/schema";
import { CompositionProps } from "../types/constants";
import { ApiResponse } from "../helpers/api-response";
// import {Res} from "remotion";

const makeRequest = async <Res>(
  endpoint: string,
  body: unknown,
): Promise<Res> => {

  try {
    const result = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    });
    const json = (await result.json()) as ApiResponse<Res>;
    if (json.type === "error") {
      throw new Error(json.message);
    }
  
    
    return json.data;
  } catch (error) {
    console.log(error)
    throw new Error("");
  }
};

export const renderVideo = async ({
  id,
  inputProps,
}: {
  id: string;
  inputProps: z.infer<typeof CompositionProps>;
}) => {
  const body: z.infer<typeof RenderRequest> = {
    id,
    inputProps,
  };

  return makeRequest<RenderMediaOnLambdaOutput>("/api/lambda/render", body);
};

export const getProgress = async ({
  id,
  bucketName,
}: {
  id: string;
  bucketName: string;
}) => {
  const body: z.infer<typeof ProgressRequest> = {
    id,
    bucketName,
  };

  return makeRequest<ProgressResponse>("/api/lambda/progress", body);
};
