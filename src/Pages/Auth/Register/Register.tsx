// src/pages/Register.tsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    photo: FileList;
};

const Register: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("email", data.email);
            formData.append("password", data.password);
            if (data.photo && data.photo[0]) {
                formData.append("photo", data.photo[0]);
            }
            console.log(data);

            const response = await axios.post("http://localhost:3000/users", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Registration successful!");
            reset();
            navigate("/login");
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.message || "Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#2c2a3e] px-4 items-center justify-center">
            <Link to="/" className="my-6 py-6">
                <img src="https://i.ibb.co/23kWpy0M/Chat-GPT-Image-Sep-2-2025-12-41-09-AM.png" alt="Logo" className="w-36" />
            </Link>

            <div className="max-w-5xl mx-auto w-full bg-[#1e1c2b] rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
                {/* Left Side */}
                <div className="bg-gradient-to-br from-purple-700 to-blue-600 p-8 flex flex-col justify-between">
                    <Link to="/" className="bg-black/30 text-white text-sm px-4 py-2 rounded-md mb-4">
                        Back to website
                    </Link>
                    <div className="text-white">
                        <h2 className="text-3xl font-bold">AMU E-Commerce</h2>
                        <p className="mt-6 text-xl font-light">
                            Join our platform, <br /> start shopping smarter!
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-10 flex flex-col justify-center bg-[#242132] text-white">
                    <h2 className="text-2xl font-bold mb-2">Create an account</h2>
                    <p className="text-sm text-gray-400 mb-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-400 hover:underline">
                            Log in
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex gap-3">
                            <input
                                {...register("firstName", { required: "First name is required" })}
                                placeholder="First name"
                                className="w-1/2 px-4 py-3 rounded-lg bg-[#1e1c2b] border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                            <input
                                {...register("lastName", { required: "Last name is required" })}
                                placeholder="Last name"
                                className="w-1/2 px-4 py-3 rounded-lg bg-[#1e1c2b] border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>

                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 rounded-lg bg-[#1e1c2b] border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Minimum 8 characters" },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password must include uppercase, number, and special character",
                                    },
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-lg bg-[#1e1c2b] border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-3 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <input
                            {...register("photo")}
                            type="file"
                            accept="image/*"
                            className="w-full text-gray-300"
                        />

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms" className="text-sm text-gray-400">
                                I agree to the{" "}
                                <Link to="/terms" className="text-purple-400 hover:underline">
                                    Terms & Conditions
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors"
                        >
                            {loading ? "Registering..." : "Create account"}
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="mt-6">
                        <p className="text-gray-400 text-sm text-center mb-4">Or continue with</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                                Google
                            </button>
                            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                                Apple
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
