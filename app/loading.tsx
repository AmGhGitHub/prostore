import loader from "@/assets/loader.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src={loader} alt="Loading..." height={150} width={150} />;
    </div>
  );
};

export default Loading;
