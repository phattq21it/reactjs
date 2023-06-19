import { useEffect, useState } from "react";
const lessons = [
  { id: 1, name: "ReactJS là gì? Tại sao nên học ReactJS" },
  { id: 2, name: "SPA/MPA là gì?" },
  { id: 3, name: "Arrow function" },
];
function FakeApp() {
  const [lessonId, setLesson] = useState(1);
  const handleEvent = (e) => {
    console.log(e.detail);
  };
  useEffect(() => {
    window.addEventListener(`lesson-${lessonId}`, handleEvent);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleEvent);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lessonn) => (
          <li
            key={lessonn.id}
            style={{
              color: lessonId === lessonn.id ? "red" : "#333",
            }}
            onClick={() => setLesson(lessonn.id)}
          >
            {lessonn.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FakeApp;
