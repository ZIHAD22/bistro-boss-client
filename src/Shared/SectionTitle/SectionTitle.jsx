const SectionTitle = ({ subHeading, mainHeading, margen }) => {
  return (
    <div
      className={`w-4/12 text-center mx-auto ${
        margen ? margen : "mb-10 mt-20"
      }`}
    >
      <p
        className="text-[#D99904] text-xl italic mb-2"
        style={{ textShadow: "1px 2px 2px black" }}
      >
        ---{subHeading}---
      </p>
      <h1 className="text-4xl border-y-4 py-4">{mainHeading}</h1>
    </div>
  );
};

export default SectionTitle;
