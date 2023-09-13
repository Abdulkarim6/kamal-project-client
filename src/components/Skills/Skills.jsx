import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Skills = () => {
    return (
        <section id="skills" className='my-1'>
            <h3 className='text-2xl lg:text-5xl text-center font-serif font-bold text-green-500 mb-3'>My Skills</h3>
            <div className="text-lg lg:text-xl font-semibold text-slate-700 ml-5">
                <p className="flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2"></BsFillArrowRightSquareFill>
                    Got A+ in “General Electrician and Sanitary” from “Comilla AutoCAD
                    Training Centre”.</p>

                <p className="my-3 flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2"></BsFillArrowRightSquareFill>
                    Got A+ Grade in “Computer Office Application” course from “Bangladesh
                    Technical Education Board Dhaka”
                </p>

                <p className="flex lg:items-center">
                    <BsFillArrowRightSquareFill className="h-10 w-12 lg:h-8 lg:w-8 text-blue-500 mr-2"></BsFillArrowRightSquareFill>
                    Got A Grade in `Refrigeration and Air-Condition` Course, `Department of
                    Youth Development, Bangladesh`.</p>

            </div>
        </section>
    );
};

export default Skills;