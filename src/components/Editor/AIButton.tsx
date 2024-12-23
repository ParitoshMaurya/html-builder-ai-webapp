import React from 'react';
import { Sparkles } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';

const AIButton: React.FC = () => {
  const { setShowUploader, showUploader } = useEditorStore();

  if (showUploader) return null;

  return (
    <button
      onClick={() => setShowUploader(true)}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <Sparkles className="w-5 h-5" />
      <span>AI Design</span>
    </button>
  );
};

export default AIButton;