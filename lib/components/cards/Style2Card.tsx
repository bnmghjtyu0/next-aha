interface Props {
  title?: string;
  content?: string;
}
const Style2Card = ({ title, content }: Props) => {
  return (
    <div className="card bg-transparent  mb-36">
      <div
        className="bg-white-opacity-6 round-2 position-relative"
        style={{ paddingBottom: "100%" }}
      >
        <div
          className="headline-2 fw-bold position-absolute border border-width-4 border-white round-3 px-14 py-7 text-truncate"
          style={{ left: 10, bottom: 14, maxWidth: "calc(100% - 20px)" }}
        >
          {title}
        </div>
      </div>
      <div className="card-body px-0 py-18">
        <h5 className="fs-lg fw-md card-title fs-md mb-10 text-truncate">
          {title}
        </h5>
        <p className="fs-sm fw-md text-gray-3 mb-0">{content}</p>
      </div>
    </div>
  );
};

export default Style2Card;
