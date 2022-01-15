import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ logOutOnPress, username }) {
  const { user, logout } = useMoralis();
  return (
    <div>
      <Image
        className="rounded-full bg-black cursor-pointer hover:opacity-75"
        src={`https://avatars.dicebear.com/api/adventurer/${
          username || user.get("username")
        }.svg`}
        layout="fill"
        onClick={() => logOutOnPress && logout()}
      />
    </div>
  );
}

export default Avatar;
