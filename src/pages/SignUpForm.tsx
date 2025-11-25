import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import userDetails from "../stores/userDetails";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm: React.FC = () => {
    const { signup, user } = userDetails();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<SignUpFormData>();

    const password = watch("password");

    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        try {
            if (user?.email === data.email) {
                alert("You are already logged in!");
                navigate("/");
                return;
            }

            await signup(data.email, data.password);

            alert("Registration Successful! You are now logged in.");
            reset();
            navigate("/");
        } catch (err: any) {
            if (err.code === 409) {
                alert("This email is already registered. Please log in.");
            } else {
                console.error("Appwrite Error:", err);
                alert(`Registration Failed: ${err.message}`);
            }
        }
    };

    return (
        <>
            <Link to="/" className="absolute top-4 left-4">
                <img
                    src="/assets/MESKYLogo.png"
                    alt="App Logo"
                    className="h-8 w-auto"
                />
            </Link>

            <div className="flex items-center justify-center min-h-screen bg-[#fee9e9]">
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">SIGN UP</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-black outline-none"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-black outline-none"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-black outline-none"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-black outline-none"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ff8181] hover:bg-[#ffb2b2] text-white font-semibold py-3 rounded-md transition duration-200 shadow-md text-lg"
                        >
                            SIGN UP
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        Already a user?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:text-blue-700 font-medium tracking-wide underline"
                        >
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
