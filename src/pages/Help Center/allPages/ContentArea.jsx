
import img from '../../../../public/Help-Center-Images/notfound.webp';

const ContentArea = ({ activeSection, sections }) => {
  // Check if sections is valid and is an array
  if (!Array.isArray(sections) || sections.length === 0) {
    return (
      <div className="w-full lg:w-3/4 text-white p-0 rounded bg-[#232626] m-0">
        <div className="flex flex-col items-center py-12 bg-[#232626] rounded h-full">
          <img
            src={img}
            alt="No data"
            className="mb-4 w-60 h-60"
          />
          <p className="text-white text-lg">No sections available</p>
        </div>
      </div>
    );
  }

  // Find the active section's content
  const section = sections.find((sec) => sec.id === activeSection);

  return (
    <div
      className="w-full lg:w-3/4 text-white p-0 rounded bg-[#232626] m-0"
      style={{ height: '400px', width: '100%' }} // Fixed height and responsive width
    >
      {section ? (
        <div>
          {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2> */}
          <p className="text-gray-600">{section.content}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center py-12 bg-[#232626] rounded h-full">
          <img
            src={img}
            alt="No data"
            className="mb-4 w-60 h-60"
          />
          <p className="text-white text-lg">No content available for the selected section.</p>
        </div>
      )}
    </div>
  );
};

export default ContentArea;
