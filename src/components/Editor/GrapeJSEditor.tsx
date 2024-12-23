import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import { useEditorStore } from '../../store/editorStore';

const GrapeJSEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { setEditor } = useEditorStore();

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      storageManager: false,
      plugins: [gjsPresetWebpage, gjsBlocksBasic],
      pluginsOpts: {
        gjsPresetWebpage: {},
        gjsBlocksBasic: {},
      },
      canvas: {
        styles: [],
        scripts: [
          "https://cdn.tailwindcss.com"
        ]
      },
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Tablet',
            width: '768px',
            widthMedia: '768px',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '320px',
          },
        ],
      },
    });

    // Configure Tailwind for the editor
    editor.on('load', () => {
      const frameEl = editor.Canvas.getFrameEl();
      if (frameEl) {
        const scriptEl = document.createElement('script');
        scriptEl.innerHTML = `
          tailwind.config = {
            theme: {
              extend: {},
            },
          }
        `;
        frameEl.contentDocument?.head.appendChild(scriptEl);
      }
    });

    setEditor(editor);

    return () => {
      editor.destroy();
      setEditor(null);
    };
  }, [setEditor]);

  return <div ref={editorRef} />;
};

export default GrapeJSEditor;