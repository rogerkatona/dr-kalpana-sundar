import Link from "next/link";
import useModal from "../lib/useModal";
import Modal from "./modal";


export default function BookACall_01() {
    const {isShowing, toggle} = useModal();
    return (
            <>
                <section className="flex flex-col lg:py-12 lg:px-0 p-12 lg:mx-auto lg:max-w-7xl">
                    <div className="font-bebasNeue text-3xl text-gray.700 pb-4">
                        Did you know?
                    </div>
                    <div className="py-4">
                        <div className="text-xl text-gray.700 font-medium">
                            By 2025, there will be a shortage of 90,000 physicians.
                        </div>
                        <div className="text-xs text-gray.500 italic">
                            Source: Clinical Burnout and the impact of Digital Behavioral Health Solutions
                        </div>
                    </div>
                    <div className="">
                        <div className="text-gray.700">
                            The cost of turnover in the medical field and decreased productivity from burnout is estimated at $4.6 B annually. Burnout can be a larger problem for female physicians and medical professionals due to &quot;hidden&quot; stressors of gender discrimination in the workplace and family expectations in the home.
                        </div>
                        <div className="text-gray.700 pt-4">
                            Hospitals and event planners can use their diversity inclusion budget to help their female physicians, mid-level practitioners and nurses reclaim joy in their career which translates to better patient care, less turnover, and a reduction in medical errors.
                        </div>
                    </div>
                    <div className="pt-8">
                        <Link href=''>
                            <button
                                onClick={toggle}
                                className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                                Book A Call
                            </button>
                        </Link>

                    </div>
                </section>
                <section>
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                    />
                </section>
        </>
    )
}






