import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userDetails from "../stores/userDetails";

interface LoginFormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { login, user } = userDetails();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            if (user?.email === data.email) {
                alert("You are already logged in!");
                navigate("/");
                return;
            }

            await login(data.email, data.password);

            alert("Login successful! Welcome back.");
            navigate("/");
        } catch (err: any) {
            console.error("Appwrite Login Error:", err);
            alert(`Login Failed: ${err.message}`);
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
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm ">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {...register("email", { required: "Email is required" })}
                                className={`w-full p-2 border rounded-md outline-none focus:border-black ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
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
                                {...register("password", { required: "Password is required" })}
                                className={`w-full p-2 border rounded-md outline-none focus:border-black ${errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ff8181] hover:bg-[#ffb2b2] text-white font-semibold py-3 rounded-md transition duration-200 shadow-md text-lg"
                        >
                            LOGIN
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        New User?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-500 hover:text-blue-700 font-medium tracking-wide underline"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
