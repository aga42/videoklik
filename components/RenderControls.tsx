import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";
import Link from "next/link";

export const RenderControls: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
  suffix: string;
  setSuffix: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ text, setText, prefix, setPrefix, suffix, setSuffix, duration, setDuration, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <Input
            disabled={state.status === "invoking"}
            setText={setPrefix}
            text={prefix}
            placeholder="Prefix"
            type="text"
            maxLength={3}
          ></Input>
          <div className=" my-4">
            <Input
              disabled={state.status === "invoking"}
              setText={setSuffix}
              text={suffix}
              placeholder="Suffix"
              type="text"
              maxLength={3}
            ></Input>
          </div>
          {/* <Input
            disabled={state.status === "invoking"}
            setText={setDuration}
            text={duration}
            placeholder="Duration"
            type="number"
            maxLength={1}
          ></Input> */}
          <div className=" mb-4">
            <Input
              disabled={state.status === "invoking"}
              setText={setText}
              text={text}
              placeholder="Value"
              type="number"
              maxLength={7}
            ></Input>
          </div>
          
          <Spacing></Spacing>
          <div className=" mt-8 mx-auto">
          <Link href="https://toathoule.com/4/7892388" target="blank">
          <Button
                disabled={state.status === "invoking"}
                // disabled={true}
                loading={state.status === "invoking"}
                onClick={renderMedia}
              >
                Render video
              </Button>
          </Link> 
            </div>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <ProgressBar
            progress={state.status === "rendering" ? state.progress : 1}
          />
          <Spacing></Spacing>
          <AlignEnd>
          <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};
