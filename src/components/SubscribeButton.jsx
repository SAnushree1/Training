import React,{useState} from "react";
import {useForm} from 'react-hook-form'

const SubscribeButton = () => {
    const {register, handleSubmit, formState:{errors},reset} = useForm();
    const [email,setEmail] = useState('');
    const [isModalOpen,setIsModalOpen] = useState(false);

    const onSubmit = (data) => {
        setEmail(data.email);
        setIsModalOpen(true);
    }

    const onError = () => {
        setIsModalOpen(true);
    }

    const close = () => {
        setIsModalOpen(false);
        setEmail("");
        reset();
    }
    
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit,onError)} className='flex flex-col gap-1 sm:flex-row'>
            <input 
                {...register('email',{
                    required:"Email is required",
                    pattern:{
                        value:/\S+@\S+\.\S/,
                        message:'Invalid email format'
                    }
                })}
                placeholder="Enter your email address"
                className='bg-white text-gray-600 p-1 px-3 rounded-sm max-w-xs'
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
                <button type="submit" className='bg-amber-300 p-2 rounded text-black max-w-xs sm:w-auto'>Subscribe</button>
        </form>
        {isModalOpen && (
            <div className='fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center '>
                <div className='bg-white text-black flex rounded p-5 '>
                    <p className='mb-4 text-center text-sm sm:text-base '>
                        {errors.email ? errors.email.message : `Successfully subscribed to ${email}`}
                    </p>
                    <button onClick={close} className='px-4 py-2 bg-black text-white rounded hover:bg-gray-600 m-1'>Close</button>
                </div>
            </div>
        )}
    </>
  );
}

export default SubscribeButton