import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../components/utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "sadika@gmail.com",
      password: "sadik12",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      // Construct the userInfo object correctly
      const userInfo = {
        email: data.email, // Use "email" instead of "id"
        password: data.password,
      };

      // Call the login mutation
      const res = await login(userInfo).unwrap();

      // Verify the token and dispatch the user
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in successfully", { id: toastId });
    } catch (error) {
      toast.error("Failed to login", { id: toastId });
      console.error("Login error:", error);
    }
  };
  return (
    <div className="mt-8 flex min-h-screen">
      {/* Left Side - Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/TMnZSsQ3/DALL-E-2025-01-26-21-25-59-Create-a-modern-and-minimalistic-side-image-for-a-login-page-of-a-manga-t.webp')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">
            Explore the World of Manga
          </h2>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 ">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
            Welcome Back to MangaVerse
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
            Login to continue your adventure
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="mt-1 bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md transition duration-300"
            >
              Login
            </Button>

            {/* Signup Link */}
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-orange-600 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
