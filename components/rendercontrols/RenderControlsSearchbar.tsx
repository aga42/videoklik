import { z } from "zod";
import { useRendering } from "../../helpers/use-rendering";
import { CompositionSearchbarProps } from "../../types/constants";
import { AlignEnd } from "./../AlignEnd";
import { Button } from "./../Button";
import { InputContainer } from "./../Container";
import { DownloadButton } from "./../DownloadButton";
import { ErrorComp } from "./../Error";
import { Input } from "./../Input";
import { ProgressBar } from "./../ProgressBar";
import { Spacing } from "./../Spacing";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const RenderControlsSearchbar: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  compositionName: string;
  
  inputProps: z.infer<typeof CompositionSearchbarProps>;
}> = ({ text, setText, inputProps, compositionName }) => {
  // const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);
  const { renderMedia, state, undo } = useRendering(compositionName, inputProps);

  const [credits, setcredits] = useState(0)
  const saveProfile = async (newCredit: number) => {
    try {
      console.log(`saving ${cookiesUserId}`)
      const response = await fetch(`api/profile/credit/${cookiesUserId}`, {
        method: "PATCH",
        body: JSON.stringify({
          credits: newCredit
        })

      })

      if (response.ok) {
        //do after save profile
        setcredits(newCredit)
        renderMedia()
      }

    } catch (error) {
      console.log('error gaes')
    } finally {
    }
  }

  //GET USER PROFILE SETTING
  const cookiesUserId = Cookies.get('user_id');
  useEffect(() => {
    
    const fetchProfile = async () => {

      try {

          console.log(`cookie user id ${cookiesUserId}`)

          const response = await fetch(`api/profile/${cookiesUserId}`)
          const data = await response.json()

          setcredits(data.credits)
          console.log(`dapet credit ${data.credits}`)

      } catch (error) {
        console.log(error)
      }

    }

    fetchProfile()
  }, [])
  //END GET USER PROFILE SETTING

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
          {credits === 0
            ?
            <div className=" text-gray-500 rounded-lg px-8 py-4 bg-gray-200">
            Not enough credits<a href="/pricing" className="text-fuchsia-500"> (Top up credits to render)</a>
            </div>
            :
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
          }
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
