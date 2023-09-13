import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditPhotoInfo from './EditPhotoInfo';

const ShowPhotoDetails = () => {
    let content;

    const smNum = 6;
    const [manyData, setManyData] = useState(true);

    const [photo, setPhoto] = useState(null);
    const [editPhotoInfo, setEditPhotoInfo] = useState(null);

    const { data: showMayData = [], refetch } = useQuery({
        queryKey: ['photos'],
        queryFn: async () => {
            const res = await fetch('https://kamal-server.vercel.app/photos');
            const data = await res.json();
            return data;
        }
    });

    const showLessData = showMayData?.slice(0, 6);

    const handleShowManyDataAction = () => {
        setManyData(current => !current)
    }

    const handleShowLessDataAction = () => {
        setManyData(current => !current)
    }

    if (showMayData?.length > smNum && manyData) {
        content = < button onClick={handleShowManyDataAction} className="btn btn-primary my-10 capitalize justify-self-center">See More</button>
    }

    return (
        <section id='Posts' className='grid justify-items-stretch'>
            <h3 className='text-2xl lg:text-5xl text-center font-serif font-bold text-green-500'>Posts</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
                {
                    manyData ?

                        showLessData?.map((photo, i) =>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
                                <figure><img className='p-3' src={photo?.image} alt="photo" /></figure>
                                <div className="card-body text-slate-700">
                                    <h2 className="card-title text-xl font-bold">Name: {photo?.title}</h2>
                                    <p className='text-lg font-medium'>Description : {photo?.Description}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-lg font-medium'>D : {photo?.date}</p>

                                        {/* The button to open modal */}
                                        <label onClick={() => setPhoto(photo)} htmlFor="deletePhoto_modal" className="btn btn-primary capitalize">Delete</label>
                                        <label onClick={() => setEditPhotoInfo(photo)} htmlFor="editPhotoInfo_modal" className="btn btn-primary ml-2 capitalize">Edit</label>

                                    </div>
                                </div>
                            </div>
                        )

                        :

                        showMayData?.map((photo, i) =>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
                                <figure><img className='p-3' src={photo?.image} alt="photo" /></figure>
                                <div className="card-body text-slate-700">
                                    <h2 className="card-title text-xl font-bold">Name: {photo?.title}</h2>
                                    <p className='text-lg font-medium'>Description : {photo?.Description}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-lg font-medium'>D : {photo?.date}</p>

                                        {/* The button to open modal */}
                                        <label onClick={() => setPhoto(photo)} htmlFor="deletePhoto_modal" className="btn btn-primary capitalize">Delete</label>
                                        <label onClick={() => setEditPhotoInfo(photo)} htmlFor="editPhotoInfo_modal" className="btn btn-primary ml-2 capitalize">Edit</label>

                                    </div>
                                </div>
                            </div>
                        )
                }
                {
                    photo &&

                    <DeleteModal
                        photo={photo}
                        refetch={refetch}
                    ></DeleteModal>
                }
                {
                    editPhotoInfo &&

                    <EditPhotoInfo
                        editPhotoInfo={editPhotoInfo}
                        refetch={refetch}
                        setEditPhotoInfo={setEditPhotoInfo}
                    ></EditPhotoInfo>
                }
            </div>
            {
                content
            }
            {
                !manyData &&
                < button onClick={handleShowLessDataAction} className="btn btn-primary my-10 capitalize justify-self-center">See less</button>
            }
        </section >
    );
};

export default ShowPhotoDetails;