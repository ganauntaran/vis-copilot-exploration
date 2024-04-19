import * as React from "react";

interface RoleOption {
  label: string;
  value: string;
}

interface UserData {
  nip: string;
  udomain: string;
  name: string;
  email: string;
  branch: string;
  role: RoleOption;
}

const userData: UserData = {
  nip: "1998121112391024",
  udomain: "John_Doe",
  name: "John Doe",
  email: "john@mail.com",
  branch: "Jakarta Pusat",
  role: {
    label: "Supervisor Cabang",
    value: "supervisor",
  },
};

const Logo = () => (
  <div className="flex justify-center items-center my-auto">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
      alt="Company Logo"
      className="aspect-[1.85] w-[68px]"
    />
  </div>
);

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 pt-2.5 pb-3 text-base font-semibold text-center text-white rounded-3xl bg-white bg-opacity-10">
    {children}
  </div>
);

const UserInfo = () => (
  <div className="flex gap-5 justify-between rounded-3xl">
    <div className="flex flex-col my-auto">
      <div className="text-sm font-semibold text-white">Esther Howard</div>
      <div className="text-xs text-white text-opacity-50">Admin Pusat</div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac572355657ddc4027f6990d0a024b0a109a71e4f22633536df0dda685baa6?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
      alt="User Avatar"
      className="shrink-0 w-10 aspect-square"
    />
  </div>
);

const Header = () => (
  <header className="flex flex-col justify-center px-16 w-full bg-yellow-800 shadow-sm max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 justify-between">
        <Logo />
        <NavItem>Pengaturan Akun</NavItem>
        <div className="px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white text-opacity-80">
          Audit Log
        </div>
      </div>
      <UserInfo />
    </div>
  </header>
);

const FormField = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) => (
  <div className="flex flex-col mt-4 max-md:max-w-full">
    <label className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
      {label}
    </label>
    <div className="justify-center items-start px-3 py-2.5 mt-1 text-gray-900 bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
      {value}
    </div>
  </div>
);

const RoleField = ({ role }: { role: RoleOption }) => (
  <div className="flex flex-col mt-4 max-md:max-w-full">
    <label className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
      Role
    </label>
    <div className="flex gap-5 justify-between px-3 py-2.5 mt-1 text-gray-900 bg-white rounded-md border border-gray-300 border-solid max-md:flex-wrap max-md:max-w-full">
      <div>{role.label}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5bc356f589a8524c2f9133941beabc5c0c688d7a1091923041235d3e019e97?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
        alt="Dropdown Arrow"
        className="shrink-0 w-5 aspect-square"
      />
    </div>
  </div>
);

const Button = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) => {
  const baseClasses =
    "justify-center px-6 py-2.5 font-medium rounded-[100px] max-md:px-5";
  const variantClasses =
    variant === "primary"
      ? "font-semibold tracking-normal bg-amber-300"
      : "bg-gray-200";

  return <div className={`${baseClasses} ${variantClasses}`}>{children}</div>;
};

const EditAccountForm = () => (
  <div className="flex justify-center items-center px-16 py-10 w-full text-sm leading-5 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col max-w-full w-[594px]">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <FormField label="NIP" value={userData.nip} />
          <div className="flex gap-0 mt-1 text-gray-900 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
              {userData.nip}
            </div>
            <div className="justify-center py-2.5 pr-4 pl-4 font-medium bg-amber-300 rounded-none border border-gray-300 border-solid">
              Check NIP
            </div>
          </div>
        </div>
        <FormField label="Udomain" value={userData.udomain} />
        <FormField label="Nama" value={userData.name} />
        <FormField label="Email" value={userData.email} />
        <FormField label="Cabang" value={userData.branch} />
        <RoleField role={userData.role} />
      </div>
      <div className="flex flex-col justify-center items-end px-16 mt-12 text-center text-gray-900 whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex flex-col justify-center pb-20 bg-gray-100">
      <div className="flex flex-col w-full max-md:max-w-full">
        <Header />
        <h1 className="justify-center items-start py-4 pr-16 pl-28 w-full text-2xl font-semibold leading-6 text-gray-900 bg-white shadow-sm max-md:pr-5 max-md:pl-8 max-md:max-w-full">
          Edit Account
        </h1>
        <EditAccountForm />
      </div>
    </div>
  );
}

export default MyComponent;
