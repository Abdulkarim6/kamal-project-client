import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const EditPhotoInfo = ({ refetch, editPhotoInfo ,setEditPhotoInfo}) => {
   
    const realPass = "kamal750@";
    const [pass, setPass] = useState('');

    const { register, handleSubmit, formState: { errors }, resetField, } = useForm({
        mode: "onChange",
        defaultValues: { title: "", Description: "" }
    });


    const handleEditPhotoInfo = data => {

        const addPhotoNewInfo = {
            id: editPhotoInfo?._id,
            Description: data.Description,
            title: data.title,
        }

        if (addPhotoNewInfo) {
            fetch('https://kamal-server.vercel.app/addPhotoNewInfo', {
                method: 'PATCH',
                body: JSON.stringify(addPhotoNewInfo),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(result => {

                    if (result.acknowledged) {
                        toast.success(`${editPhotoInfo.title} information update successfully`);
                        refetch();
                        setEditPhotoInfo(null);
                    }
                })

            resetField("title")
            resetField("Description")
        }
    };

    const handlePassTarget = event => {
        event.preventDefault();
        setPass(event.target.value);
    };

    let content;

    if (pass === realPass) {
        content =
            <section>

                <div className='grid gap-6 lg:grid-cols-2 my-5'>
                    {/* First part start */}
                    <div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Photo Name</span></label>
                            <input type="text" {...register("title", { required: 'Photo Name is Required' })} placeholder="Photo Name" className="input input-bordered input-primary w-full" />
                            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                        </div>
                    </div>
                    {/* First part End */}

                    {/* Second part start */}
                    <div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Photo Description</span></label>
                            <textarea {...register("Description", { required: 'Photo Description' })} className="textarea textarea-primary" placeholder="Photo Description"></textarea>
                            {errors.Description && <p className='text-red-500'>{errors.Description.message}</p>}
                        </div>
                    </div>
                </div>
                {/* Second part End */}
                <p className="py-4 text-lg font-medium text-red-600">{`Are you sure you want to edit photo info!`}</p>
                <input type="submit" className='btn btn-accent w-full' value='Sure' />

                <div className="modal-action">
                    <label htmlFor="editPhotoInfo_modal" className="btn">Cencel</label>
                </div>
            </section>
    }


    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="editPhotoInfo_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold alert alert-warning p-3">This system only for admin</h4>
                        <div className="modal-action mt-0">
                            <label htmlFor="editPhotoInfo_modal" className="btn">Close!</label>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(handleEditPhotoInfo)}>
                        <div className="w-full">
                            <label className="label"><span className="label-text">Your Password</span></label>
                            <input onChange={handlePassTarget} type="text" placeholder="password" className="input input-bordered input-primary w-full" />
                        </div>

                        {content}

                    </form>


                </div>
            </div>

        </div>
    );
};

export default EditPhotoInfo;