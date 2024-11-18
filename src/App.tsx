// src/App.tsx
import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import { FormSchema } from './types/FormSchema';
import JSONEditor from './components/JSONEditor';  

const App: React.FC = () => {
  const initialSchema: FormSchema = {
    formTitle: "Survey",
    formDescription: "Please fill out this survey ",
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
        validation: { message: "Name is required." },
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "you@example.com",
        required: true,
        validation: { message: "Email is required." },
      },
    ],
  };

  const [schema, setSchema] = useState<FormSchema>(initialSchema);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Dynamic Form Generator</h1>
          <p className="mt-2">Create forms with a JSON schema editor</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left side: JSON editor */}
          <div className="w-full lg:w-1/2 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">JSON Schema Editor</h2>
            <JSONEditor schema={schema} setSchema={setSchema} />
          </div>

          {/* Right side: Form preview */}
          <div className="w-full lg:w-1/2 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form Preview</h2>
            <DynamicForm schema={schema} />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dynamic Form Generator</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
