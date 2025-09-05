"use client";

import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { ArrowLeftIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mutate } from "swr";
import ChooseCategory from "./ChooseCategory";

interface CreatePostFormProps {
  dispatch: AppDispatch;
  router: AppRouterInstance;
  viewPortSize: {
    width: number;
    height: number;
  };
  category: string;
}

const CreatePostForm = ({
  dispatch,
  router,
  viewPortSize,
  category
}: CreatePostFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setClickPost("inactive"));

    try {
      const response = await fetch("/api/notes", {
        body: JSON.stringify({ title, description, type: category }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        mutate("/api/notes");
        router.push("/home");
        return response;
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className={`flex flex-col items-start mt-4 ${"formPost"}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type your title"
        className={`placeholder-light-800 text-white text-5xl max-sm:text-3xl font-normal outline-0 w-full max-md:ml-4 ${"formPostTitle"}`}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={`w-full h-[1px] bg-dark-600 my-3 ${"divider"}`}></span>
      <input
        type="text"
        placeholder="Type your note"
        className={`placeholder-light-800 text-white font-normal outline-0 w-full max-md:ml-4 ${"formPostNote"}`}
        onChange={(e) => setDescription(e.target.value)}
      />
      {viewPortSize.width < 768 ? (
        <button
          type="submit"
          className={`fixed md:right-10 md:bottom-9 right-4 bottom-6 w-14 h-14 rounded-full bg-primaryBlue flex justify-center items-center ${"formPostSubmitButton"}`}
        >
          <ArrowUpTrayIcon className="text-white w-6" />
        </button>
      ) : (
        <button
          type="submit"
          className={`fixed md:right-10 md:bottom-9 right-4 bottom-6 w-14 h-14 rounded-full bg-primaryBlue flex justify-center items-center ${"formPostSubmitButton"}`}
        >
          <ArrowUpTrayIcon className="text-white w-6" />
        </button>
      )}
    </form>
  );
};

export default function CreatePost() {
  const dispatch: AppDispatch = useDispatch();
  // const clickState = useSelector((state: RootState) => state.clickPost.click);
  const router = useRouter();
  const viewPortSize = useViewPortSize();
  const [category, setCategory] = useState<string>("");

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
        viewPortSize={viewPortSize}
        category={category}
      />
      <ChooseCategory category={category} setCategory={setCategory}/>
    </section>
  );
}
