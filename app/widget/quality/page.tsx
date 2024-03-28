import CourseCard from '@/components/Card/Card';
import * as React from 'react';

interface MenuItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  hasArrow?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  isActive = false,
  hasArrow = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-center py-2 pr-2.5 pl-3 mt-1 w-full text-sm font-bold leading-5 rounded-md ${
        isActive ? 'bg-pink-200 text-fuchsia-800' : 'bg-white text-neutral-400'
      }`}
    >
      <div className="flex gap-2.5 justify-between w-full">
        <div className="flex gap-3">
          <img src={icon} alt="" className="shrink-0 w-6 aspect-square" />
          <div>{text}</div>
        </div>
        {hasArrow && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20c85cafe9792d648594246988177c555e289aeaadf411032efe10e0cb4e6a00?apiKey=97692b0d53e648149f11861270a3eda7&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        )}
      </div>
    </div>
  );
};

const menuItems: MenuItemProps[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c325e8795e9cdec385c1333c2d19916f3bb288bac06c6bb68df284eaeceb0a13?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'Home',
    isActive: true,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b5f91c03760cde830ef344e7e3e4bb7e0a8d3962bf274a2e1152a2c90f87669?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'My Courses',
    hasArrow: true,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2391b70613757badafb12b2462a5eb5421476a25f981b340784a722f2c908129?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'About BCL&D',
    hasArrow: true,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9087b3e1b97283653e0edf0020b5b3dc0548a046adf0a3ba24c773dba63526db?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'Back Office BCL&D',
    hasArrow: true,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6875e36e00976eb2d798ca1939e9b90426eb7f248824eca808f3ea88c71d7ec7?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'BCL&D Calendar',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ccd22ec7634163cbe996f5e4bf90b2a5be12433b5c065bb3c180f061e42b14a?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'My Profile',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7228db5c7996fe02090756771cb5313f15a94ebef767c6c554624a1dedd7b3fd?apiKey=97692b0d53e648149f11861270a3eda7&',
    text: 'Support',
  },
];

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col grow justify-center w-full bg-white border-r border-solid shadow-lg border-stone-300">
      <div className="flex flex-col pb-20">
        <header className="flex flex-col pt-8 mb-[1426px] max-md:mb-10">
          <div className="flex gap-3 pr-5 pl-6 max-md:pl-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6d3371ff25ca8a37d3ab647eea1353c1e82e311388d9dcbbc1d3f2e7d5dbd1?apiKey=97692b0d53e648149f11861270a3eda7&"
              alt=""
              className="shrink-0 my-auto w-6 aspect-square"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6e16acbedc776403f36f27753a5dd90534757c4397b1a47b22371aac22ce06?apiKey=97692b0d53e648149f11861270a3eda7&"
              alt=""
              className="shrink-0 max-w-full aspect-[3.57] w-[143px]"
            />
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex flex-col justify-center px-4 font-bold text-white leading-[150%]">
              <div className="flex flex-col justify-center items-start px-3 py-2 bg-fuchsia-800 rounded-md max-md:pr-5">
                <h1 className="text-lg">Olivia Rhye</h1>
                <div className="flex flex-col justify-center mt-4 text-xs">
                  <div className="text-sm font-bold">
                    Head of Software Solution
                  </div>
                  <div>Faculty Member</div>
                  <div>School of Information</div>
                </div>
                <div className="justify-center mt-4 text-sm">2.500 Point</div>
              </div>
            </div>
            <nav className="flex flex-col p-4 mt-1">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
              <div className="flex flex-col justify-center mt-1">
                <div className="shrink-0 h-px bg-zinc-400" />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default MyComponent;
