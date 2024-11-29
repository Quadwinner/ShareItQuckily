import { useState } from "react";
import UploadForm from "./components/UploadForm";
import LinksList from "./components/LinksList";

const App = () => {
  const [links, setLinks] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">File/Folder Sharing</h1>
        <UploadForm setLinks={setLinks} />
        <LinksList links={links} />
      </div>
    </div>
  );
};

export default App;
