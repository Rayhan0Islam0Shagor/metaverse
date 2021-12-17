import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-8">
        <Image
          src="/meta-interactive.png"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce text-black"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="/metaverse.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
