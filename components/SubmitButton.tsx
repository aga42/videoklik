"use client";

import { SubmitButtonProps } from "../types";

const SubmitButton = ({title, containerStyles, handleClick, btnType, submitting}: SubmitButtonProps) => {
  return (
    <button
        disabled={submitting}
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center sm:py-2 sm:px-6 px-4 py-2 outline-none text-base ${containerStyles}`}
        onClick={handleClick}
    >
        <span className='flex-1'>
            {submitting ? 'Saving..' : title}
        </span>

    </button>
  )
}

export default SubmitButton