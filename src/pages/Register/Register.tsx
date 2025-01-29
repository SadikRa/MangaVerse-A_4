import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Enhanced Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('https://i.ibb.co.com/0prFk4vQ/DALL-E-2025-01-29-21-54-09-A-modern-and-minimalistic-welcome-page-side-image-for-a-website-named-Man.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Welcome to MangaVerse</h2>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 text-center">Create an Account</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
            Join MangaVerse and start your journey!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === watch("password") || "Passwords do not match",
                })}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              Sign Up
            </Button>

            {/* Login Link */}
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;