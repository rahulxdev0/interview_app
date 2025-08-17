import { useState } from "react";

function Dashboard() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goFullScreen = async () => {
    if (document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      await document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      await document.documentElement.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {!isFullscreen ? (
        <button
          onClick={goFullScreen}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
        >
          Enter Fullscreen
        </button>
      ) : (
        <h1 className="text-3xl">Dashboard in Fullscreen 🎉</h1>
      )}
    </div>
  );
}

export default Dashboard;
