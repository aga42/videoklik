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
        // "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Headers": "content-type,authorization",

        // "Access-Control-Allow-Headers" : "Content-Type",
        // "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        // "Access-Control-Allow-Methods": "POST" // Allow only POST request 
      },
    });
    const json = (await result.json()) as ApiResponse<Res>;

    // const string = (await result.text());
    // console.log(`pertama ${json}`)
    // const jsonFirst = string === "" ? {} : JSON.parse(string);
    // console.log(`kedua ${jsonFirst}`)
    // const json = (jsonFirst) as ApiResponse<Res>;
    // console.log(`ketiga ${json}`)

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
  // return makeRequest<RenderMediaOnLambdaOutput>("https://main.d1t2r37kmmw96.amplifyapp.com/api/lambda/render", body);
  // return makeRequest<RenderMediaOnLambdaOutput>("https://5mt6sywv5a.execute-api.us-east-1.amazonaws.com/FirstDeploy", body);
  // return makeRequest<RenderMediaOnLambdaOutput>("https://ulmmtt5bustyydwjumrpd34w7a0ndtnb.lambda-url.us-east-1.on.aws/", body);
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
  // return makeRequest<ProgressResponse>("https://main.d1t2r37kmmw96.amplifyapp.com/api/lambda/progress", body);
  // return makeRequest<ProgressResponse>("https://5mt6sywv5a.execute-api.us-east-1.amazonaws.com/FirstDeploy", body);
  // return makeRequest<ProgressResponse>("https://ulmmtt5bustyydwjumrpd34w7a0ndtnb.lambda-url.us-east-1.on.aws/", body);
};
