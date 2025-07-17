"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SlPaperPlane } from "react-icons/sl";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.cofig";
import { TbLoader3, TbRuler2Off } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const AddRecipeComponent = ({ session }) => {
  const UserId = session?.User?.Id;
  const author = session?.User?.name;
  const userImg = session?.user?.image;

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal]= useState(false)

  console.log(author, userImg);

  const initialValue = {
    title: "",
    recipe: "",
    desc: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("This is a required field"),
    recipe: Yup.string().required("This is a required field"),
    desc: Yup.string()
      .required("please provide a description")
      .min(10, "Minimum of 10 character"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      // object to be sent to the db(DATABASE)
      const recipieDetails = {
        image: session?.user?.image,
        author: session?.user?.name,
        timestamp: new Date().toLocaleDateString(),
        ...values,
      };
      const docRef = await addDoc(collection(db, "recipies"), recipieDetails);
      setShowModal(TbRuler2Off)
    } catch (error) {
      console.error(error);
      alert("somethng went wrong");
    } finally {
      setLoading(false);
    }

    resetForm();
    console.log("sucessful");
  };

  return (
    <main className="min-h-dvh bg-gray-200 ">
      <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center p-3">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
              Share Your Native Recipie Ideas With a Larger Community
            </h1>
          </div>
        </div>
      </section>
      <section className="md:p-5 p-3">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className=" max-w-3xl mx-auto py-10 space-y-5">
            <div>
              <label className="text-xs">Recipe title</label>
              <Field
                name="title"
                className="w-full outline-none p-2 bg-white"
                placeholder="Enter Recipe Title...."
              />
              <ErrorMessage
                name="title"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>
            <div>
              <label className="text-xs">Share Your Recipe</label>
              <Field
                name="recipe"
                className="w-full outline-none p-2 bg-white"
                placeholder="Share Your recipes..."
              />
              <ErrorMessage
                name="recipe"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>

            <div>
              <label as="text area" className="text-xs">
                Description
              </label>
              <Field
                name="desc"
                className="w-full outline-none p-2 bg-white"
                placeholder="Please provide a description..."
              />
              <ErrorMessage
                name="desc"
                component={"p"}
                className="text-xs  text-red-600"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`flex items-center justify-center gap-2
          bg-blue-600 w-full py-2 text-white text-lg hover:bg-blue-700 transition-all
          duration-300 ${loading? "bg-gray-500 hover:bg-gray-500 cusor-not-allowed":""}`}
            >
              {loading ? (
                <TbLoader3 className="text-3xl" />
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Post Recipes
                  <SlPaperPlane />
                </span>
              )}
            </button>
          </Form>
        </Formik>
      </section>

      <div className={`h-auto w-full bg-black/80 absolute inset-0 ${showModal ? "flex" : "hidden"}  hidden items-center justify-center`}>
              <div className="w-[30rem] h-[15rem] bg-white relative flex items-center justify-center">
                <span className="absolute right-2 top-2">
                  < IoIosClose className="text-4xl text-red-600"/>
                </span>
                <div className="flex flex-cols gap-5 items-center justify-center">
                  <FaCheckCircle className="text-center text-9xl text-green-600"/>
                  <p className="text-lg">Your Recipe has been sucessfully uploaded</p>
                </div>
              </div>
      </div>
    </main>
  );
};

export default AddRecipeComponent;
