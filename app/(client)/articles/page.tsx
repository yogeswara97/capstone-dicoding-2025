"use client";

import { useState, useEffect } from "react";
import ArticleCard from "@/components/ui/ArticleCard";
import { Article } from "@/types/article";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import Loading from "@/components/ui/Loading";
import { timeAgo } from "@/lib/timeago";

export default function ArticlePage() {
  const [articles, setArticles] = useState<(Article & { publishDateStr?: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "articles"), orderBy("publishDate", "desc"));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => {
          const d = doc.data() as Article;

          let publishDateStr = "";
          let publishDateObj: Date | null = null;

          // Cek apakah publishDate ada
          if (d.publishDate) {
            if ("toDate" in d.publishDate && typeof d.publishDate.toDate === "function") {
              publishDateObj = d.publishDate.toDate();
            } else if (d.publishDate.seconds) {
              // fallback kalau d.publishDate plain object {seconds, nanoseconds}
              publishDateObj = new Date(d.publishDate.seconds * 1000);
            }

            if (publishDateObj) publishDateStr = timeAgo(publishDateObj);
          }

          return { ...d, id: parseInt(doc.id), publishDateStr };
        });

        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <Loading text="Loading articles..." />;
  if (articles.length === 0) return <p className="text-center py-20">No articles found.</p>;

  return (
    <div className="px-6 md:px-12 py-30 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 text-center">All Articles</h1>
      <p className="mt-3 text-gray-600 text-center max-w-xl mx-auto">
        Browse all the latest articles about pneumonia prevention, symptoms, and recovery tips.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.slice(0, 12).map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i}/>
        ))}
      </div>
    </div>
  );
}
