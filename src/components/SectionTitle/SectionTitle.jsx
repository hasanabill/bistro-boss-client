const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-500 mb-2 italic font-semibold">
        ---{subHeading}---
      </p>

      <h3 className="text-4xl uppercase border-y-2 py-3 font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
