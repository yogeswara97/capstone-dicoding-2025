"use client";

import { useState, useEffect } from "react";
import ArticleCard from "../ui/ArticleCard";
import { Article } from "@/types/article";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Loading from "../ui/Loading";
import { timeAgo } from "@/lib/timeago";

export default function ArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCol = collection(db, "articles");
        const q = query(articlesCol, orderBy("publishDate", "desc"));
        const snapshot = await getDocs(q);

        const data: Article[] = snapshot.docs.map((doc) => {
          const articleData = doc.data() as Article;

          // convert publishDate Firestore Timestamp ke string "time ago"
          const publishDateStr = articleData.publishDate.toDate
            ? timeAgo(articleData.publishDate.toDate())
            : "unknown";

          return {
            ...articleData,
            id: doc.id,
            publishDateStr, // <-- untuk UI
          } as unknown as Article & { publishDateStr: string };
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

  if (loading) return <Loading text="Loading more..." fullScreen={false} />;
  if (articles.length === 0) return <p className="text-center py-10">No articles found.</p>;

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Latest Articles
      </h2>
      <p className="mt-3 text-gray-600 text-center max-w-xl mx-auto">
        Stay informed with the latest news, tips, and research on pneumonia prevention and care.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.slice(0, 6).map((article, i) => (
          <ArticleCard
            key={article.id}
            article={{ ...article, publishDate: article.publishDate }}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
