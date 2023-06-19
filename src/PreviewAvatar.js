import { useEffect, useState } from "react";

function PreviewAvatar() {
  const [avt, setAvt] = useState();

  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL(avt.preview);
    };
  }, [avt]);
  const handleAvt = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvt(file);
  };
  return (
    <div>
      <input type="file" onChange={handleAvt}></input>
      {avt && <img src={avt.preview} alt="" width="50%" />}
    </div>
  );
}
export default PreviewAvatar;
