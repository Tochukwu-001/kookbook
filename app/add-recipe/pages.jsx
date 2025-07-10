import React from "react";
import{ Field, Form,Formik} from 'formik';
import {SlPaperPlane} from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const page = ()=>{
    const initialValue ={
        title:"",
        recipe:"",
        desc:"",
    };
    const validationsSchema = Yup.object({
       title:Yup.string().required("This is a required field"), 
       recipe:Yup.string().required("This is a required field"),
       desc:Yuo.string().required(" please provide a description")
                        .min(10, "Minium of 10 characters"),
    })

    const handleSubmit =(value)=>{
            console.log(value);
            
    };
    return(
        <main className="min-h-dvh bg-gray-200">
             <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
                Share your Native recipe Ideas With a Larger community            </h1>
          </div>
        </div>
      </section>
            Recipes
            <Formik initialValues={initialValue} validationSchema={validationsSchema}>
                <Form onSubmit={handleSubmit} className="border max-w-2xl mx-auto my-10 space-y-5">
                    <div>
                    <label className="text-xs">Recipe Title </label>
                    <Field name="title" className="w-full outline-none p-2 bg-white "placeholder="Enter recipe" />
                    <ErrorMessage name="title" component={"p"} className="text-red-600" />
                    <div>
                        <label> Description</label>
                        <Field name="desc" as="textarea"className="w-full outline-none p-2 bg-white"/>
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 bg-blue-600
                    w-full py-2 text-white text-lg hover:bg-blue-700 transition-all duration-300">
                        Post Recipe
                        <SlPaperPlane/>
                    </button>
                    </div>
                </Form>
            </Formik>
        </main>
    )
}
export default page;