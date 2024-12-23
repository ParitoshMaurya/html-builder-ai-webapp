import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { analyzeDesign } from '../../services/aiService';

const ImageUploader: React.FC = () => {
  const { editor, setIsAnalyzing, showUploader, setShowUploader } = useEditorStore();

  const handleImageUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;

    try {
      setIsAnalyzing(true);
      const analysis = await analyzeDesign(file);
      const components = analysis.components;
      
      // Add components to the editor
      components.forEach(component => {
        editor.addComponents(component.html);
      });
    } catch (error) {
      console.error('Error analyzing design:', error);
    } finally {
      setIsAnalyzing(false);
      setShowUploader(false);
    }
  }, [editor, setIsAnalyzing, setShowUploader]);

  if (!showUploader) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-white rounded-xl shadow-2xl p-8 w-[400px]">
        <button 
          onClick={() => setShowUploader(false)}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <div className="mb-4">
            <Upload size={40} className="mx-auto text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload Your Design</h3>
          <p className="text-gray-600 mb-6">Upload your design and let AI convert it into editable components</p>
          <label className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
            <Upload size={20} />
            <span>Choose File</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;