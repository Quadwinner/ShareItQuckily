import React from "react";

const LinksList = ({ links }) => {
    return (
        <div className="p-6 bg-gray-800 rounded-lg shadow-md mt-6">
            <h2 className="text-xl text-white font-bold mb-4">Generated Links</h2>
            {links.length === 0 ? (
                <p className="text-gray-400">No links generated yet.</p>
            ) : (
                links.map((link, index) => (
                    <div key={index} className="mb-2">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            {link}
                        </a>
                    </div>
                ))
            )}
        </div>
    );
};

export default LinksList;
