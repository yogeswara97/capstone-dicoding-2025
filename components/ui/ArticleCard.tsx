import { Article } from "@/types/article";
import Image from "next/image";

type ArticleCardProps = {
  article: Article & { publishDateStr?: string };
  index: number; // pastikan ada index di props
};

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const displayDate =
    article.publishDateStr ||
    (article.publishDate instanceof Object &&
      "toDate" in article.publishDate &&
      typeof article.publishDate.toDate === "function"
      ? article.publishDate.toDate().toDateString()
      : article.publishDate?.toString()) ||
    "";

  // 🌀 pilih gambar selang-seling berdasarkan index
  const imageSrc =
    index % 2 === 0
      ? "/assets/pneunomia.png"
      : "/assets/pneunomia-2.png";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
        <p className="mt-2 text-xs text-gray-500">
          {article.author} • {displayDate} • {article.readTime}
        </p>
        <p className="mt-3 text-sm text-gray-600 flex-1">{article.shortDesc}</p>

        <a
          href={`/articles/${article.slug}`}
          className="mt-6 text-red-600 font-medium text-sm hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
