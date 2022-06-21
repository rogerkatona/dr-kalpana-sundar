import React from 'react';
import ReactDOM from 'react-dom';
import  { Form } from "./form";
import Link from "next/link";


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <>
        <div className="relative" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="w-full h-full z-20 bg-bg-contactModal bg-cover fixed top-0 left-0 flex flex-row">

                <section className="fixed right-0">
                    <div className="modal-close cursor-pointer z-20 p-4">
                        <button type="button" className="text-white.100" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">
                                <svg className="fill-current text-white.700" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto flex flex-col justify-center w-2/3 ">
                    <div className="lg:p-12 p-6">
                        <div className="font-bebasNeue text-7xl text-white.100  flex flex-row justify-center pb-12">
                            Book a call
                        </div>
                        <div className="text-gray.200 py-6 text-xl flex flex-row justify-center pb-12 ">
                            <div className="" >
                                Provide your information and I will reach out to quickly to schedule an exploratory call (30 minutes) to discuss how I can help. I&apos;ll provide web conferencing details provided upon confirmation.
                            </div>
                        </div>
                        <Form/>
                    </div>
                </section>

            </div>
        </div>
    </>, document.body
) : null;

export default Modal;
