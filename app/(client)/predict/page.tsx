"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticlePage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<{ prediction: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
      setResult(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please upload an image first!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult({
        prediction: data.prediction,
        confidence: data.confidence,
      });
    } catch (err) {
      alert("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-6 md:px-12 py-16 mt-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 border border-gray-200 rounded-3xl bg-white/70 backdrop-blur-xl p-10">

        {/* === LEFT PANEL === */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            🩺 Pneumonia Detection
          </h1>
          <p className="text-gray-600 mb-8">
            Upload a chest X-ray image and let AI analyze it.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2 mb-6"
          />

          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4"
            >
              <img
                src={preview}
                alt="Uploaded preview"
                className="rounded-xl border border-gray-300 max-h-80 w-full object-contain"
              />
            </motion.div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-xl mt-6 hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Analyzing..." : "🔍 Detect Pneumonia"}
          </button>

          <AnimatePresence>
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center mt-6 space-y-2"
              >
                <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-gray-500 text-sm"
                >
                  Analyzing image...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* === RIGHT PANEL (RESULT) === */}
        <div className="flex flex-col justify-center items-center text-center border-l border-gray-200 pl-8">
          <AnimatePresence>
            {result && !loading ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full p-10 rounded-2xl ${
                  result.prediction === "Pneumonia"
                    ? "bg-red-100/50 text-red-700 border border-red-200"
                    : "bg-green-100/50 text-green-700 border border-green-200"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-3">
                  {result.prediction === "Pneumonia"
                    ? "🩸 Pneumonia Detected"
                    : "✅ Normal"}
                </h2>
                <p className="text-gray-800 text-lg">
                  Confidence:{" "}
                  <strong>{(result.confidence * 100).toFixed(1)}%</strong>
                </p>
              </motion.div>
            ) : (
              <p className="text-gray-400 text-sm">
                Result will appear here after analysis 🧠
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
