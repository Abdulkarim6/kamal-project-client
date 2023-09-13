/* eslint-disable react/no-unescaped-entities */
import { HiOutlineCalendar } from "react-icons/hi";
import { BiSolidFlag } from "react-icons/bi";
import { MdBloodtype, MdEmojiPeople , MdMail, MdPhone} from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import kamal from '../../assets/kamal.jpg'

const About = () => {
    return (
        <section id="about" className="lg:p-7">
            <h3 className='text-2xl lg:text-5xl text-center font-serif font-bold text-green-500 mb-3'>My Personal Information</h3>
            <div className="card lg:card-side w-full">
                <div className="lg:w-1/3 p-3">
                    <figure><img className="rounded-xl" src={kamal} alt="Movie" /></figure>
                </div>
                <div className="card-body text-base lg:text-2xl font-semibold text-slate-700 lg:w-2/3 flex items-center">
                    <p className='flex items-center my-2 lg:my-3'><MdEmojiPeople className='mr-2 text-rose-500' />Name : Kamal Hossain</p>
                    <p className='flex items-center my-2 lg:my-3'><MdEmojiPeople className='mr-2 text-rose-500' />Father's name : Md Abu Taher</p>
                    <p className='flex items-center my-2 lg:my-3'><HiOutlineCalendar className='mr-2 text-rose-500' />Date of birth : 25 December 2000</p>
                    <p className='flex items-center mb-2 lg:my-3'><BiSolidFlag className='mr-2 text-rose-500' />Nationality : Bangladeshi</p>
                    <p className='flex items-center mb-2 lg:my-3'><BsBookHalf className='mr-2 text-rose-500' />Religion : Islam</p>
                    <p className='flex items-center mb-2 lg:my-3'><MdBloodtype className='mr-2 text-rose-500' />Blood group : A+</p>
                    <p className='flex items-center mb-2 lg:my-3'><MdMail className='mr-2 text-rose-500' />Mail: mdkamalhossainfca@gmail.com</p>
                    <p className='flex items-center mb-2 lg:my-3'><MdPhone className='mr-2 text-rose-500 ' />Number :01831307750</p>
                </div>
            </div>
        </section>
    );
};

export default About;