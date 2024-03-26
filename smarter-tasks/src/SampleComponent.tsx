import  { useState } from "react";

function SampleComponent() {
  const [title,settitle] = useState("");
  console.log(title,"CurrentState");
  console.log(settitle,"SetState");
  return (
    <>
    <div>
     Hello
     </div>
    </>
  );
  // ...
}
export default SampleComponent;