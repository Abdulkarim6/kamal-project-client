import { useState } from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ refetch, photo }) => {
    const realPass = "kamal750@";
    const [pass, setPass] = useState('');


    const handleDelete = photo => {

        fetch(`https://kamal-server.vercel.app/photo/${photo._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Photo deleted successfully`)
                    refetch()
                }
            })
    };

    const handlePassTarget = event => {
        event.preventDefault();
        setPass(event.target.value);
    };

    let content;

    if (pass === realPass) {
        content =
            <section>
                <h3 className="font-bold text-lg">Name : {photo?.title}</h3>
                <p className="py-4 text-lg font-medium text-red-600">{`If You delete ${photo?.title} it cannot be undone`}</p>
                <div className="modal-action">
                    <label onClick={() => handleDelete(photo)} htmlFor="deletePhoto_modal" className="btn btn-primary">Sure</label>
                    <label htmlFor="deletePhoto_modal" className="btn">Cencel</label>
                </div>
            </section>
    }

    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="deletePhoto_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold alert alert-warning p-3">This system only for admin</h4>
                        <div className="modal-action mt-0">
                            <label htmlFor="deletePhoto_modal" className="btn">Close!</label>
                        </div>
                    </div>

                    <form>
                        <div className="w-full">
                            <label className="label"><span className="label-text">Your Password</span></label>
                            <input onChange={handlePassTarget} type="text" placeholder="password" className="input input-bordered input-primary w-full" />
                        </div>
                    </form>

                    {content}

                </div>
            </div>

        </div>
    );
};

export default DeleteModal;