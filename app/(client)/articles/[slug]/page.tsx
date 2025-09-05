"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";
import { Article } from "@/types/article";
import Loading from "@/components/ui/Loading";
import { timeAgo } from "@/lib/timeago";

export default function ArticlePage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [article, setArticle] = useState<Article & { publishDateStr?: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchArticle = async () => {
            setLoading(true);
            try {
                // Query Firestore where slug == slug
                const q = query(collection(db, "articles"), where("slug", "==", slug));
                const snapshot = await getDocs(q);

                if (snapshot.empty) {
                    setArticle(null);
                    return;
                }

                const data = snapshot.docs[0].data() as Article;

                let publishDateStr = "";
                if (data.publishDate instanceof Timestamp) {
                    publishDateStr = timeAgo(data.publishDate.toDate());
                }

                setArticle({ ...data, publishDateStr });
            } catch (err) {
                console.error("Error fetching article:", err);
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    if (loading) return <Loading text="Loading articles..." />;
    if (!article) return <p className="text-center py-10">Article not found.</p>;

    return (
        <div className="px-6 md:px-12 py-30 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>

            <p className="mt-2 text-sm text-gray-500">
                {article.author} • {article.publishDateStr} • {article.readTime}
            </p>

            {article.image && (
                <div className="relative w-full h-96 mt-6 rounded-2xl overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl"
                    />
                </div>
            )}

            {article.desc && (
                <div
                    className="mt-6 prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.desc }}
                />
            )}
        </div>
    );
}
