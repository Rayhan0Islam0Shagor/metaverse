import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const FirstPage = () => {
  const { logout } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-8">
        <div className="bg-gray-100 text-gray-900 py-5 px-4 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome to METAVERSE!</h1>
        </div>

        <button
          onClick={logout}
          className="bg-red-600 rounded-lg p-5 hover:bg-red-700 font-bold text-white"
        >
          logout
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="/bg-enter.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default FirstPage;
