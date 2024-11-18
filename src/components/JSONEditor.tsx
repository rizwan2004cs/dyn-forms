// src/components/JSONEditor.tsx
import React, { useState } from 'react';

interface JSONEditorProps {
  schema: any;
  setSchema: (schema: any) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, setSchema }) => {
  const [error, setError] = useState<string | null>(null);

  const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsed = JSON.parse(e.target.value);
      setSchema(parsed);
      setError(null);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-96 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={JSON.stringify(schema, null, 2)}
        onChange={handleJSONChange}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
