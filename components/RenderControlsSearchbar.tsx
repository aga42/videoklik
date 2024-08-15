import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionSearchbarProps } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";
import Link from "next/link";

export const RenderControlsSearchbar: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  
  inputProps: z.infer<typeof CompositionSearchbarProps>;
}> = ({ text, setText, inputProps }) => {
  // const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);
  const { renderMedia, state, undo } = useRendering("Searchbars", inputProps);

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <Input
            disabled={state.status === "invoking"}
            setText={setText}
            text={text}
            placeholder="Search label"
            type="text"
            maxLength={24}
          ></Input>
          
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
