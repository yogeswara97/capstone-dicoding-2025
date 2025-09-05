import { Timestamp } from "firebase/firestore";

export type Article = {
  id: number;
  title: string;
  shortDesc: string;
  desc: string;
  image: string;
  slug: string;
  author: string;
  publishDate: Timestamp;
  readTime: string;
  tags: string[];
  featured: boolean;
};
