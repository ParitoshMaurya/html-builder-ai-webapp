import React from 'react';
import GrapeJSEditor from './components/Editor/GrapeJSEditor';
import ImageUploader from './components/ImageUpload/ImageUploader';
import AIButton from './components/Editor/AIButton';
import { useEditorStore } from './store/editorStore';

function App() {
  const { isAnalyzing } = useEditorStore();

  return (
    <div className="relative">
      <GrapeJSEditor />
      <AIButton />
      <ImageUploader />
      {isAnalyzing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-center text-gray-700">Analyzing design...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;