import type { Editor } from 'grapesjs';

export interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (value: boolean) => void;
  showUploader: boolean;
  setShowUploader: (value: boolean) => void;
}

export interface DesignAnalysis {
  layout: LayoutInfo;
  components: ComponentInfo[];
}

export interface LayoutInfo {
  type: string;
  columns?: number;
  rows?: number;
}

export interface ComponentInfo {
  type: string;
  html: string;
  style?: Record<string, string>;
  position?: {
    x: number;
    y: number;
  };
}