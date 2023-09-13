/* eslint-disable react/no-unescaped-entities */
import { BsFillArrowRightSquareFill } from "react-icons/bs";


const Experience = () => {
    return (
        <section id="Experience" className='my-14'>
            <h3 className='text-2xl lg:text-5xl text-center font-serif font-bold text-green-500 mb-2'>My Experience</h3>
            <div className="text-lg lg:text-xl font-semibold text-slate-700 ml-5">
                <p className="flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2" />
                    I worked for 2 years in "NASCO ENGINEERING" shop of AC/Fridge.
                </p>

                <p className="my-3 flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2" />
                    I have worked with "Abu Taher Construction" for about 1.years 6
                    months.
                </p>

                <p className="flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2" />
                    I worked in "Sunderban Courier Service" in computer office
                    application 2017.
                </p>

                <p className="mt-3 flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2" />
                    I have been doing electronic and sanitary work with "GM Electric and
                    Sanitary" in last 2021, 2022 and 2023 in Comilla.
                </p>
            </div>
        </section>
    );
};

export default Experience;