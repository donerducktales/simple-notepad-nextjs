"use client";

import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CreatePostForm from "./CreatePostForm";
import ChooseCategory from "../ChooseCategory";

export default function CreatePost() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const viewPortSize = useViewPortSize();
  const [category, setCategory] = useState<string>("")

  return (
    <section
      className={`flex flex-col w-full mt-9 md:ml-12 md:mr-20 ${"createPost"}`}
    >
      <button
        className={`max-md:ml-4 ${"createPostBackButton"}`}
        onClick={() =>
          viewPortSize.width < 768
            ? router.push("/home")
            : dispatch(setClickPost("inactive"))
        }
      >
        <ArrowLeftIcon className="w-6 text-white" />
      </button>
      <CreatePostForm
        dispatch={dispatch}
        router={router}
        category={category}
      />
      <ChooseCategory category={category} setCategory={setCategory} />
    </section>
  );
}
