import * as React from "react";

interface RoleDropdownProps {
  role: string;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({ role }) => {
  return (
    <div className="flex flex-col mt-4 max-md:max-w-full">
      <div className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
        Role
      </div>
      <div className="flex gap-5 justify-between px-3 py-2.5 mt-1 text-gray-900 bg-white rounded-md border border-gray-300 border-solid max-md:flex-wrap max-md:max-w-full">
        <div>{role}</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5bc356f589a8524c2f9133941beabc5c0c688d7a1091923041235d3e019e97?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
          alt="Dropdown icon"
          className="shrink-0 w-5 aspect-square"
        />
      </div>
    </div>
  );
};

interface InfoFieldProps {
  label: string;
  value: string;
}

const InfoField: React.FC<InfoFieldProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
      <div className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
        {label}
      </div>
      <div className="justify-center items-start px-3 py-2.5 mt-1 text-gray-900 bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
        {value}
      </div>
    </div>
  );
};

interface UserInfoProps {
  name: string;
  role: string;
  avatar: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, role, avatar }) => {
  return (
    <div className="flex gap-5 justify-between rounded-3xl">
      <div className="flex flex-col my-auto">
        <div className="text-sm font-semibold text-white">{name}</div>
        <div className="text-xs text-white text-opacity-50">{role}</div>
      </div>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="shrink-0 w-10 aspect-square"
      />
    </div>
  );
};

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive = false }) => {
  const activeClass = isActive ? "bg-white bg-opacity-10" : "";

  return (
    <div
      className={`px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white ${
        isActive ? "font-semibold" : "text-opacity-80"
      } ${activeClass}`}
    >
      {label}
    </div>
  );
};

const EditAccount: React.FC = () => {
  const navItems = [
    { label: "Pengaturan Akun", isActive: true },
    { label: "Audit Log", isActive: false },
  ];

  const infoFields = [
    { label: "Udomain", value: "John_Doe" },
    { label: "Nama", value: "John Doe" },
    { label: "Email", value: "john@mail.com" },
    { label: "Cabang", value: "Jakarta Pusat" },
  ];

  return (
    <div className="flex flex-col justify-center pb-20 bg-gray-100">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col justify-center px-16 w-full bg-yellow-800 shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <nav className="flex gap-5 justify-between">
              <div className="flex justify-center items-center my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                  alt="Logo"
                  className="aspect-[1.85] w-[68px]"
                />
              </div>
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  isActive={item.isActive}
                />
              ))}
            </nav>
            <UserInfo
              name="Esther Howard"
              role="Admin Pusat"
              avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac572355657ddc4027f6990d0a024b0a109a71e4f22633536df0dda685baa6?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
            />
          </div>
        </header>
        <main>
          <h1 className="justify-center items-start py-4 pr-16 pl-28 w-full text-2xl font-semibold leading-6 text-gray-900 bg-white shadow-sm max-md:pr-5 max-md:pl-8 max-md:max-w-full">
            Edit Account
          </h1>
          <section className="flex justify-center items-center px-16 py-10 w-full text-sm leading-5 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[594px]">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <label
                    htmlFor="nip"
                    className="font-semibold tracking-normal text-gray-500 max-md:max-w-full"
                  >
                    NIP
                  </label>
                  <div className="flex gap-0 mt-1 text-gray-900 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
                      1998121112391024
                    </div>
                    <button className="justify-center py-2.5 pr-4 pl-4 font-medium bg-amber-300 rounded-none border border-gray-300 border-solid">
                      Check NIP
                    </button>
                  </div>
                </div>
                {infoFields.map((field) => (
                  <InfoField
                    key={field.label}
                    label={field.label}
                    value={field.value}
                  />
                ))}
                <RoleDropdown role="Supervisor Cabang" />
              </div>
              <div className="flex flex-col justify-center items-end px-16 mt-12 text-center text-gray-900 whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2">
                  <button className="justify-center px-6 py-2.5 font-medium bg-gray-200 rounded-[100px] max-md:px-5">
                    Cancel
                  </button>
                  <button className="justify-center px-8 py-2.5 font-semibold tracking-normal bg-amber-300 rounded-[100px] max-md:px-5">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EditAccount;
