import { create } from 'zustand';
import type { EditorState } from '../types/editor';

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
  isAnalyzing: false,
  setIsAnalyzing: (value) => set({ isAnalyzing: value }),
  showUploader: false,
  setShowUploader: (value) => set({ showUploader: value }),
}));