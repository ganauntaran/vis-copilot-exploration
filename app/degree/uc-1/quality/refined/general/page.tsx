import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`justify-center px-8 py-2.5 text-sm tracking-normal leading-5 text-center bg-amber-300 rounded-[100px] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
};

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className }) => {
  return (
    <div
      className={`px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white ${className}`}
    >
      {children}
    </div>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col justify-center px-16 w-full bg-yellow-800 shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="flex justify-center items-center my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                  alt="Logo"
                  className="aspect-[1.85] w-[68px]"
                />
              </div>
              <NavItem className="font-semibold text-opacity-100 bg-opacity-10 bg-white">
                Pengaturan Akun
              </NavItem>
              <NavItem className="text-opacity-80">Audit Log</NavItem>
            </div>
            <div className="flex gap-5 justify-between rounded-3xl">
              <div className="flex flex-col my-auto">
                <div className="text-sm font-semibold text-white">
                  Esther Howard
                </div>
                <div className="text-xs text-white text-opacity-50">
                  Admin Pusat
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c74fd41b018cf61deab45fd459f3f44650a6d47b85fbb9e8001ff6584d4e812b?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                alt="User Avatar"
                className="shrink-0 w-10 aspect-square"
              />
            </div>
          </div>
        </header>
        <nav className="flex justify-center items-center px-16 py-4 w-full font-semibold text-gray-900 bg-white shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
            <h1 className="my-auto text-2xl leading-6">Pengaturan Akun</h1>
            <Button>Create Account</Button>
          </div>
        </nav>
        <main className="flex justify-center items-center px-16 py-20 w-full text-gray-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mt-44 mb-32 max-w-full w-[400px] max-md:my-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34c11d5fcda6cfa1ae179c870af94b4c0c9ae13f9dfee95f872e257bf59526fe?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
              alt="No accounts available illustration"
              className="max-w-full aspect-[0.85] w-[136px]"
            />
            <h2 className="mt-6 text-2xl font-bold leading-7">
              Daftar admin tidak tersedia
            </h2>
            <p className="self-stretch mt-6 text-base text-center text-gray-500">
              Saat ini tidak ada akun yang tersedia di sistem. Anda dapat
              menambahkan akun baru dengan mengklik tombol &quot;Create New
              Account&quot;.
            </p>
            <Button className="mt-6 font-semibold">Create Account</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyComponent;
