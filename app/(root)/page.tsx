import React from "react";
import Exclusive from "../components/sections/exclusive";
/* import Editor from "../components/editor";
 */
export default function Page() {
  /*  const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "This is a tutorial of Editor js",
          level: 1,
        },
      },
    ],
  };
  const [data, setData] = useState(INITIAL_DATA); */

  return (
    <>
      <Exclusive />

      {/*   <div className="editor">
        <Editor
          data={data}
          onChange={setData}
          editorblock="editorjs-container"
        />
        <button
          className="savebtn"
          onClick={() => {
            alert(JSON.stringify(data));
          }}
        >
          Save
        </button>
      </div> */}
    </>
  );
}
