const Loading = ({ fullScreen, hight, width }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullScreen && "h-screen"
      } ${hight && hight} ${width && width}`}
    >
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
