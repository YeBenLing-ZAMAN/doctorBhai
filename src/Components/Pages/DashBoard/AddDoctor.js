import React from 'react';
import { useForm } from "react-hook-form";


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);
    }
    return (
        <div>
            <h2 className='text-2xl'>add a new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.name.message}
                                </span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Enter Vaild Email Address'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>

                            <input
                                type="Specialty"
                                placeholder="Specialty At..."
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("Specialty", {
                                    required: {
                                        value: true,
                                        message: 'Specialty is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.Specialty?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.Specialty.message}
                                </span>}
                                {errors.Specialty?.type === 'minLength' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.Specialty.message}
                                </span>}

                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
                    </form>
        </div>
    );
};

export default AddDoctor;