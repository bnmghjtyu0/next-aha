interface Props {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  content: string;
}
const Style1Card = ({ image, title, content }: Props) => {
  return (
    <div className="card bg-black1 border-0 mb-12">
      <div
        className="bg-white-opacity-6 round-2 position-relative"
        style={{
          paddingBottom: "50%",
          backgroundImage: `url('${image.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="card-body px-0 py-18">
        <h5 className="fs-lg fw-md card-title fs-md mb-10">{title}</h5>
        <p className="fs-sm fw-md text-gray-3 mb-0">{content}</p>
      </div>
    </div>
  );
};

export default Style1Card;
