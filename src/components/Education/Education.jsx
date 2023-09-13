
const Education = () => {
    return (
        <section id="Educations">
            <h3 className='text-2xl lg:text-5xl lg:text-5xl text-center font-serif font-bold text-green-500'>Education Qualification</h3>
           
            <div className="overflow-x-auto p-2 lg:p-10 text-slate-700">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl font-bold">
                        <tr>
                            <th>Exam</th>
                            <th>Years</th>
                            <th>Group</th>
                            <th>Result</th>
                            <th>Board</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-semibold">
                        {/* row 1 */}
                        <tr className="hover">
                            <td>SSC</td>
                            <td>2018</td>
                            <td>Science</td>
                            <td>3.05</td>
                            <td>Comilla</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <td>HSC</td>
                            <td>2020</td>
                            <td>Computer</td>
                            <td>4.46</td>
                            <td>Dhaka</td>
                        </tr>
                    </tbody>
                </table>
           
           </div>
        </section>
    );
};

export default Education;

