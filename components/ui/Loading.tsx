
interface LoadingProps {
  text?: string;
  fullScreen?: boolean; // default true
}

export default function Loading({ text = "Loading...", fullScreen = true }: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "h-screen" : "py-10"
      }`}
    >
      {/* Spinner */}
      <div className={`w-12 h-12 border-4 border-red-500 border-t-transparent border-solid rounded-full animate-spin`}></div>
      <p className="mt-4 text-gray-500 text-sm">{text}</p>
    </div>
  );
}
