import { z } from "zod";
import { useRendering } from "../../helpers/use-rendering";
import { CompositionProps } from "../../types/constants";
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
import { UploadButton } from "../../utils/uploadthing";

export const RenderControlsTiktokComment: React.FC<{

  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  compositionName: string;
  inputProps: z.infer<typeof CompositionProps>;

}> = ({ text, setText, desc, setDesc, image, setImage, inputProps, compositionName }) => {
  
  const { renderMedia, state, undo } = useRendering(compositionName, inputProps);

  const [credits, setcredits] = useState(0)
  const [isPro, setisPro] = useState(false)
  const saveProfile = async (newCredit: number) => {
    try {
      const response = await fetch(`../api/profile/credit/${cookiesUserId}`, {
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

          const response = await fetch(`../api/profile/${cookiesUserId}`)
          const data = await response.json()

          setcredits(data.credits)
          setisPro(data.is_pro_member)

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
            placeholder="Fullname"
            type="text"
            maxLength={24}
          ></Input>
          <div className=" my-4">
            <Input
              disabled={state.status === "invoking"}
              setText={setDesc}
              text={desc}
              placeholder="Message"
              type="text"
              maxLength={48}
            ></Input>
          </div>
          <div className="w-fit grid grid-cols-2 sm:ml-2">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImage(res?.at(0)?.url ?? '')
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            <p className="text-gray-900 text-sm ml-4 my-auto">{image === "" ? "" : image.substring(image.length - 8, image.length)}</p>
          </div>
          
          <Spacing></Spacing>
          <div className=" mt-8 mx-auto">
          {credits === 0
            ?
            <div className=" text-gray-500 rounded-lg px-8 py-4 bg-gray-200">
            Not enough credits<a href="/pricing" className="text-fuchsia-500"> (Top up credits to render)</a>
            </div>
            :

            isPro === true ?
              <Button
                  disabled={state.status === "invoking"}
                  loading={state.status === "invoking"}
                  onClick={()=>{
                    saveProfile(credits-1)
                  }}
                >
                  Render video
              </Button>
            :

            <Link href="https://toathoule.com/4/7892388" target="blank">
              <Button
                  disabled={state.status === "invoking"}
                  loading={state.status === "invoking"}
                  onClick={()=>{
                    saveProfile(credits-1)
                  }}
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
