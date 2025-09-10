const Header = ({ isEditable, setIsEditable, downloadPDF }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Resume Builder</h1>
      <div className="space-x-3">
        <button
          onClick={() => setIsEditable(!isEditable)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isEditable ? "Save" : "Edit"}
        </button>
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </header>
  );
};

export default Header;
