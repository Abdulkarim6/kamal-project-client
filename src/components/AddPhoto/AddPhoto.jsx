import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddPhoto = () => {

    const refresh = () => window.location.reload(true);

    const realPass = "kamal750@"
    const [pass, setPass] = useState('');
    const { register, handleSubmit, formState: { errors }, resetField, } = useForm({
        mode: "onChange",
        defaultValues: { title: "", Description: "", image: "" }
    });

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleAddPhoto = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("file", image);
        formData.append("Folder", "photoUpload");
        formData.append("upload_preset", "rlvai9wx")

        const url = `https://api.cloudinary.com/v1_1/dddhukxnc/image/upload`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {

                const addPhoto = {
                    date,
                    image: imageData?.url,
                    Description: data.Description,
                    title: data.title,
                }

                fetch('https://kamal-server.vercel.app/photo', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(addPhoto)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.acknowledged) {
                            toast.success(`photo added successfully`);
                            refresh();
                        }
                    });
                    
                resetField("title")
                resetField("image")
                resetField("Description")
            });
    }

    const handlePassTarget = event => {
        event.preventDefault();
        setPass(event.target.value);
    }

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

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", { required: 'file is Required' })} className="file-input file-input-bordered file-input-primary w-full " placeholder="Your Photo" />
                            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
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
                <input type="submit" className='btn btn-accent w-full' value='Add Photo' />
            </section>
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="addPhoto_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold alert alert-warning">This system only for admin</h4>
                        <div className="modal-action mt-0">
                            <label htmlFor="addPhoto_modal" className="btn">Close!</label>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(handleAddPhoto)}>

                        <div className="w-full">
                            <label className="label"><span className="label-text">Your Password</span></label>
                            <input onChange={handlePassTarget} type="text" placeholder="password" className="input input-bordered input-primary w-full" />
                            {/* {errors.password && <p className='text-red-500'>{errors.password.message}</p>} */}
                        </div>

                        {content}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPhoto;