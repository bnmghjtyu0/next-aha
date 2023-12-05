import Image from "next/image";

interface Props {
  status: "following" | "follow";
}

const Style1ListItem = ({ status }: Props) => {
  return (
    <div className="d-flex align-items-center w-100">
      <Image
        src="/images/follows/person1.png"
        alt="person1"
        width={40}
        height={40}
      />
      <div className="ml-15 mr-auto">
        <span className="fs-lg fw-light d-block">Fullname</span>
        <span className="fs-md fw-light text-gray-4 d-block">@username</span>
      </div>

      {status === "follow" && (
        <button
          style={{ width: "60px", height: "29px" }}
          className="fs-sm fw-md btn btn-outline-white border-width-1 round-1 d-flex align-items-center justify-content-center"
        >
          Follow
        </button>
      )}

      {status === "following" && (
        <button
          style={{ width: "76px", height: "28px" }}
          className="fs-sm fw-md btn btn-outline-white border-width-1 round-1 active d-flex align-items-center justify-content-center"
        >
          Following
        </button>
      )}
    </div>
  );
};

export default Style1ListItem;
