"use client";

import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EditNoteForm from "./EditNoteForm";
import ChooseCategory from "../ChooseCategory";

export default function EditNote({
  noteId,
  title,
  description,
}: {
  noteId: string;
  title: string;
  description: string;
}) {
  const [category, setCategory] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const viewPortSize = useViewPortSize();
  const router = useRouter();

  return (
    <section
      className={`flex flex-col w-full mt-9 md:ml-12 md:mr-20 ${"editNote"}`}
    >
      <button
        className={`max-md:ml-4 ${"editNoteBackButton"}`}
        onClick={() =>
          viewPortSize.width < 768
            ? router.push("/note")
            : dispatch(setClickPost("inactive"))
        }
      >
        <ArrowLeftIcon className="w-6 text-white" />
      </button>
      <EditNoteForm
        dispatch={dispatch}
        router={router}
        noteId={noteId}
        title={title}
        description={description}
        category={category}
        setCategory={setCategory}
      />
      <ChooseCategory category={category} setCategory={setCategory} />
    </section>
  );
}
