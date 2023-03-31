import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../Buttons/CustomButton";
import CustomCheckbox from "../Forms/CustomCheckbox";
import CustomInputField from "../Forms/CustomInputField";
import { SiGoogle } from "react-icons/si";
import { MdFacebook } from "react-icons/md";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { signIn, useSession } from "next-auth/react";
import useToast from "hooks/useToast";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();
  const showToast = useToast();
  console.log("session", session);

  const {
    control,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      // callbackUrl: "/"
    });

    if (response?.status === 200 && response.ok) {
      console.log("success login", response);
    } else {
      console.log("login failed", response?.error);
    }
  };

  return (
    <div className="w-full px-5 py-2">
      {/* <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="">
          <div className="">
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email is required",
                },
              }}
              render={({ field }) => (
                <div className="relative">
                  <CustomInputField
                    {...field}
                    label={
                      <>
                        <span className="text-red-600 pr-1">*</span>
                        <span>Email </span>
                      </>
                    }
                    type="email"
                    className="w-full border border-black rounded p-2"
                    error={errors.email?.message as string}
                  />
                </div>
              )}
            />
          </div>
          <div className="mt-3">
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field }) => (
                <div className="relative">
                  <CustomInputField
                    {...field}
                    label={
                      <>
                        <span className="text-red-600 pr-1">*</span>
                        <span>Password </span>
                      </>
                    }
                    type={!showPassword ? "password" : "text"}
                    className="w-full border border-black rounded p-2"
                    error={errors.password?.message as string}
                  />
                  <span onClick={handleTogglePassword}>
                    {showPassword ? (
                      <FiEyeOff
                        className="absolute top-9 right-4 cursor-pointer"
                        color="black"
                      />
                    ) : (
                      <FiEye
                        className="absolute top-9 right-4 cursor-pointer"
                        color="black"
                      />
                    )}
                  </span>
                </div>
              )}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="">
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <div className="mt-3">
                    <CustomCheckbox
                      {...field}
                      id="rememberMe"
                      label={
                        <span className="text-[12px] sm:text-base">
                          Remember me
                        </span>
                      }
                      type="checkbox"
                    />
                  </div>
                )}
              />
            </div>
            <div className="pt-3">
              <span className="text-red-600 text-[12px] sm:text-base">
                Forgot password?
              </span>
            </div>
          </div>

          <div className="w-full mt-6 space-y-3">
            <CustomButton
              text="Login"
              type="submit"
              className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
            />
          </div>
        </div>
      </form> */}
      <Link href="/api/auth/login">
        <CustomButton
          text={
            <span className="flex justify-center items-center gap-2">
              {" "}
              Login
            </span>
          }
          type="button"
          className="border border-black w-full py-2 rounded hover:bg-gray-200"
        />
      </Link>
      {/* <CustomButton
        text={
          <span className="flex justify-center items-center gap-2">
            {" "}
            <SiGoogle /> Login with Google
          </span>
        }
        type="button"
        className="border border-black w-full py-2 rounded hover:bg-gray-200"
      />
      <CustomButton
        text={
          <span className="flex justify-center items-center gap-2">
            {" "}
            <MdFacebook size={25} /> Login with Facebook
          </span>
        }
        type="submit"
        className="border border-black w-full py-2 rounded hover:bg-gray-200"
      /> */}
    </div>
  );
};

export default LoginForm;
