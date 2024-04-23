import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="self-center max-w-full aspect-[1.92] w-[100px]"
    />
  );
};

const LoginButton: React.FC = () => {
  return (
    <button className="justify-center px-4 py-3 mt-2 text-sm font-bold leading-4 text-white bg-indigo-500 rounded-md max-md:px-8">
      Login with BINUSIAN Account
    </button>
  );
};

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col mt-12 max-md:mt-10">
      <p className="self-center text-base leading-6 text-black">
        Employee/Teacher/Lecturer
      </p>
      <LoginButton />
    </div>
  );
};

const LoginCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-4 py-12 mt-72 max-w-full bg-white rounded-md w-[400px] max-md:mt-10">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/efb02bea3345c872486d184b34ba45550ef6a5f5889096dca4122aea2aa706f4?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
        alt="Company logo"
      />
      <LoginForm />
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 h-screen max-md:px-5">
      <LoginCard />
    </main>
  );
};

export default LoginPage;
