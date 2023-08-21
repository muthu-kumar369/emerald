"use client"
import React, { useState } from 'react'
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
const contactFormSchema = Yup.object().shape({
    firstName: Yup.string().required("It's required !"),
    email: Yup.string().required("It's required !"),
    subject: Yup.string().required("It's required !"),
    message: Yup.string().required("It's required !")
})
const Contact = ({ data }) => {


    return (
        <section className="contact mx-5 md:mx-10 lg:mx-40 lg:py-20">
            {data?.contactDetails && <div className='contact-details grid lg:grid-cols-3'>
                {data?.contactDetails.map((item, index) => {
                    return (
                        <div className="contact-detail mt-10 lg:mt-1">
                            {item?.boldText == "Email: " ? <Link href={`mailto:${item?.text}`}>
                                <p className="icon text-white text-4xl">{item?.icon}</p>
                                <p className="text"><span className="bold-text">{item?.boldText}</span>{item?.text}</p>
                            </Link> :
                                <>
                                    <p className="icon text-white text-4xl">{item?.icon}</p>
                                    <p className="text"><span className="bold-text">{item?.boldText}</span>{item?.text}</p>
                                </>
                            }

                        </div>
                    )
                })}
            </div>}
            <div className="grid lg:grid-cols-2 mt-14">
                <div className="form p-14 mt-10 lg:mt-1" >
                    <p className="heading">{data?.formHeading}</p>
                    {data?.formDetails &&
                        <Formik
                            initialValues={{
                                firstName: "",
                                email: "",
                                subject: "",
                                message: ""
                            }}
                            validationSchema={contactFormSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                resetForm();
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form >
                                    {data?.formDetails.map((item, index) => {
                                        //    setValue("formik.values"+`${item?.name}`);
                                        return (
                                            <>
                                                {item?.half && <div key={index}>
                                                    {item?.inputDetails && <div className='grid lg:grid-cols-2 gap-5'>
                                                        {item?.inputDetails.map((input, i) => {
                                                            return (
                                                                <div className='half-input mt-5' key={i}>
                                                                    <label className='label' htmlFor={`${input?.name}`}>{input?.label}</label>
                                                                    <Field className='input' name={`${input?.name}`} placeholder={`${input?.placeholder}`} />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>}
                                                </div>}
                                                {item?.full && <div className='full-input mt-5' key={index}>
                                                    <label className='label' htmlFor={`${item?.name}`}>{item?.label}</label>
                                                    <Field className='input' name={`${item?.name}`} placeholder={`${item?.placeholder}`} />
                                                </div>
                                                }
                                                {item?.button && <div className='mt-3'>
                                                    <button className='button p-2 px-4' type="submit">{item?.text}</button>
                                                </div>}
                                            </>
                                        )
                                    })}
                                </Form>
                            )}
                        </Formik>

                    }
                </div>
                {data?.backgroundImage && <div className='background-image mx-auto my-10 lg:my-1'
                    style={{
                        backgroundImage: `url(${data?.backgroundImage?.src})`,
                        height: `${data?.backgroundImage?.height}px`
                    }}
                >
                </div>}
            </div>
        </section>
    )
}

export default Contact;