"use client";

import { AppDispatch } from "@/lib/store";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { handleClickDelete } from "./deleteHandleClick";

export default function DeleteNoteButton({
  _id,
  type,
}: {
  _id: string;
  type: string;
}) {
  const dispatch: AppDispatch = useDispatch();

  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    await handleClickDelete({_id, type, dispatch})
  }

  return (
    <button
      className={`flex flex-row justify-start items-center pl-3 gap-2 text-white text-sm bg-dark-900 h-[30px] w-full ${"deleteNoteButton"}`}
      onClick={handleClick}
    >
      <TrashIcon className="w-4 text-primaryRed" />
      delete
    </button>
  );
}
