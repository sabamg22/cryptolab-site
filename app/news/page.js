import NewsClient from "./news-client";

export const metadata = {
  title: "The inclusion paradox: Why the representation of women in academia is not enough | Lab News",
  description: "If universities want to retain talented women, we need to rethink what we mean by productivity, career progression and academic excellence across different stages of a person's life...",
  openGraph: {
    title: "The inclusion paradox: Why the representation of women in academia is not enough",
    description: "If universities want to retain talented women, we need to rethink what we mean by productivity, career progression and academic excellence across different stages of a person's life...",
    url: "https://mg.co.za/thought-leader/2026-08-26-the-inclusion-paradox-why-the-representation-of-women-in-academia-is-not-enough/",
    siteName: "Lab News",
    images: [
      {
        url: "/images/featured-news.png",
        width: 1200,
        height: 630,
        alt: "The inclusion paradox: Why the representation of women in academia is not enough",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The inclusion paradox: Why the representation of women in academia is not enough",
    description: "If universities want to retain talented women, we need to rethink what we mean by productivity, career progression and academic excellence across different stages of a person's life...",
    images: ["/images/featured-news.png"],
  },
};

export default function Page() {
  return <NewsClient />;
}