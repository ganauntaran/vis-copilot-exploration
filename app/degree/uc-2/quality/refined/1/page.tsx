import * as React from "react";

interface RoleDropdownProps {
  role: string;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({ role }) => {
  return (
    <div className="flex flex-col mt-4 max-md:max-w-full">
      <label
        htmlFor="role"
        className="font-semibold tracking-normal text-gray-500 max-md:max-w-full"
      >
        Role
      </label>
      <div className="relative">
        <select
          id="role"
          name="role"
          className="appearance-none flex gap-5 justify-between px-3 py-2.5 mt-1 text-gray-900 bg-white rounded-md border border-gray-300 border-solid max-md:flex-wrap max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <option value={role}>{role}</option>
          {/* Add more role options here */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

interface ReadonlyFieldProps {
  label: string;
  value: string;
}

const ReadonlyField: React.FC<ReadonlyFieldProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
      <label
        htmlFor={label.toLowerCase()}
        className="font-semibold tracking-normal text-gray-500 max-md:max-w-full"
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type="text"
        value={value}
        readOnly
        className="justify-center items-start px-3 py-2.5 mt-1 text-gray-900 bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full focus:outline-none"
      />
    </div>
  );
};

interface NipFieldProps {
  nip: string;
  onCheckNip: () => void;
}

const NipField: React.FC<NipFieldProps> = ({ nip, onCheckNip }) => {
  return (
    <div className="flex flex-col max-md:max-w-full">
      <label
        htmlFor="nip"
        className="font-semibold tracking-normal text-gray-500 max-md:max-w-full"
      >
        NIP
      </label>
      <div className="flex gap-0 mt-1 text-gray-900 max-md:flex-wrap max-md:max-w-full">
        <input
          id="nip"
          type="text"
          value={nip}
          readOnly
          className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-gray-200 rounded-l-md border border-r-0 border-gray-300 border-solid max-md:pr-5 max-md:max-w-full focus:outline-none"
        />
        <button
          type="button"
          className="justify-center py-2.5 pr-4 pl-4 font-medium bg-amber-300 rounded-r-md border border-gray-300 border-solid hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
          onClick={onCheckNip}
        >
          Check NIP
        </button>
      </div>
    </div>
  );
};

interface AccountSettingsProps {
  accountData: {
    nip: string;
    udomain: string;
    name: string;
    email: string;
    branch: string;
    role: string;
  };
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ accountData }) => {
  const { nip, udomain, name, email, branch, role } = accountData;

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving account settings");
  };

  const handleCancel = () => {
    // Implement cancel logic here
    console.log("Canceling account settings");
  };

  const handleCheckNip = () => {
    // Implement NIP checking logic here
    console.log("Checking NIP:", nip);
  };

  return (
    <div className="flex flex-col justify-center pb-20 bg-gray-100">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col justify-center px-16 w-full bg-yellow-800 shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <nav className="flex gap-5 justify-between">
              <div className="flex justify-center items-center my-auto">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="aspect-[1.85] w-[68px]"
                />
              </div>
              <div className="px-4 pt-2.5 pb-3 text-base font-semibold text-center text-white rounded-3xl bg-white bg-opacity-10">
                Pengaturan Akun
              </div>
              <div className="px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white text-opacity-80">
                Audit Log
              </div>
            </nav>
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
                src="/user-avatar.png"
                alt="User avatar"
                className="shrink-0 w-10 aspect-square"
              />
            </div>
          </div>
        </header>
        <div className="justify-center items-start py-4 pr-16 pl-28 w-full text-2xl font-semibold leading-6 text-gray-900 bg-white shadow-sm max-md:pr-5 max-md:pl-8 max-md:max-w-full">
          Edit Account
        </div>
        <main className="flex justify-center items-center px-16 py-10 w-full text-sm leading-5 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[594px]">
            <NipField nip={nip} onCheckNip={handleCheckNip} />
            <ReadonlyField label="Udomain" value={udomain} />
            <ReadonlyField label="Nama" value={name} />
            <ReadonlyField label="Email" value={email} />
            <ReadonlyField label="Cabang" value={branch} />
            <RoleDropdown role={role} />
            <div className="flex flex-col justify-center items-end px-16 mt-12 text-center text-gray-900 whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="justify-center px-6 py-2.5 font-medium bg-gray-200 rounded-[100px] max-md:px-5 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="justify-center px-8 py-2.5 font-semibold tracking-normal bg-amber-300 rounded-[100px] max-md:px-5 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const accountData = {
  nip: "1998121112391024",
  udomain: "John_Doe",
  name: "John Doe",
  email: "john@mail.com",
  branch: "Jakarta Pusat",
  role: "Supervisor Cabang",
};

export default function App() {
  return <AccountSettings accountData={accountData} />;
}
