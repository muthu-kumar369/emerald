"use client"
import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const inputSchema = yup.object().shape({
  feedback: yup.string().required("It is required")
})
const SubscribeSection = ({ data }) => {
  return (
    <section className="subscribe-section mx-5 md:mx-10 lg:mx-40 py-20">
      <div className="image " style={{ backgroundImage: `url(${data?.bgImage?.src})`, height: `${data?.bgImage?.height}px` }}>
        <div className="overlay"></div>
        <div className="content">
          <p className="heading">{data?.heading}</p>
          <p className="text py-2">{data?.text}</p>
        </div>
        {data?.singleInputField && <div className="single-input-form">
          <Formik
            initialValues={{
              feedback: ""
            }}
            validationSchema={inputSchema}
            onSubmit={(values,{resetForm}) => {
              console.log(values);
              resetForm();
              setSubmitting(fasle)
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className='single-input flex'>
                  <Field className='input-box px-2' name="feedback"  placeholder={`${data?.singleInputField?.placeHolder}`} />
                  <button className='button px-5' type='submit' disabled={isSubmitting}>Send</button>
                </div>
                <p className="error mt-2 text-center">{errors?.feedback}</p>
              </Form>
            )}
          </Formik>
        </div>}
      </div>
    </section>
  )
}

export default SubscribeSection;