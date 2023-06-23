import { memo } from "react";
function DemoUCallback({ props }) {
  return (
    <div>
      <h1>Hello anh em F8</h1>

      <button onClick={props}>Click Me !</button>
    </div>
  );
}
export default memo(DemoUCallback);
