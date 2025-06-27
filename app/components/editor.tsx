/* "use client";

import React, { memo, useEffect, useRef } from "react";
import { getEditorJsTools } from "./tools";

const Editor = ({ data, onChange, editorblock }: any) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let editor: any;

    import("@editorjs/editorjs").then(async ({ default: EditorJS }) => {
      const tools = await getEditorJsTools();

      if (!ref.current) {
        editor = new EditorJS({
          holder: editorblock,
          tools,
          data,
          async onChange(api) {
            const savedData = await api.saver.save();
            onChange(savedData);
          },
        });

        ref.current = editor;
      }
    });

    return () => {
      if (ref.current?.destroy) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, [data, onChange, editorblock]);

  return <div id={editorblock} />;
};

export default memo(Editor);
 */
