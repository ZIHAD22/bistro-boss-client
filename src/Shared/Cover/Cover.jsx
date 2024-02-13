const Cover = ({ img, title, des }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero"></div>
      <div className="hero-content text-center text-neutral-content w-1/2 bg-opacity-60 bg-gray-700 rounded-lg">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
