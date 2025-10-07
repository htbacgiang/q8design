import {
  GetServerSideProps,
  NextPage,
} from "next";
import parse from "html-react-parser";
import DefaultLayout from "../../components/layout/DefaultLayout";
import db from "../../utils/db";
import Post from "../../models/Post";
import Share from "../../components/common/Share";
import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../utils/helper";

type PostData = {
  id: string;
  title: string;
  content: string;
  meta: string;
  tags: string[];
  slug: string;
  thumbnail: string;
  createdAt: string;
  category: string;
  recentPosts: {
    id: string;
    title: string;
    slug: string;
    category: string;
    thumbnail?: string;
    createdAt: string;
  }[];
};

type MetaData = {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  author: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

type Props = {
  post?: PostData;
  meta?: MetaData;
};

const SinglePost: NextPage<Props> = ({ post, meta }) => {
  // Add null/undefined checks to prevent errors
  if (!post) {
    const errorMeta = {
      title: "Bài viết không tồn tại | Q8 Design",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Hãy xem các bài viết khác về thiết kế nội thất từ Q8 Design.",
      keywords: "bài viết không tồn tại, thiết kế nội thất, Q8 Design, kiến trúc, trang trí nhà",
      robots: "noindex, follow",
      author: "Q8 Design",
      canonical: "https://q8design.vn/bai-viet",
      og: {
        title: "Bài viết không tồn tại | Q8 Design",
        description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa",
        type: "website",
        image: "https://q8design.vn/logo-q8-01.png",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://q8design.vn/bai-viet",
      },
      twitter: {
        card: "summary_large_image",
        title: "Bài viết không tồn tại | Q8 Design",
        description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa",
        image: "https://q8design.vn/logo-q8-01.png",
      },
    };

    return (
      <DefaultLayout 
        title={errorMeta.title}
        desc={errorMeta.description}
        thumbnail={errorMeta.og.image}
        meta={errorMeta}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Bài viết không tồn tại</h1>
            <p className="text-gray-600 mt-2">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link href="/bai-viet" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              ← Quay lại danh sách bài viết
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  const { title, content, meta: postMeta, slug, thumbnail, category, createdAt, recentPosts } = post;
  const host = "https://q8design.vn";

  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Main Content - 75% width on md and up */}
          <div className="w-full md:w-3/4 pr-0 md:pr-8 mb-4 md:mb-0">
            <div className="md:pb-20 pb-6 container mx-auto ">
              {/* Breadcrumb */}
              <div className="flex font-bold gap-2 text-base text-gray-600">
                <Link href="/bai-viet" className="hover:text-blue-800 whitespace-nowrap">
                  Bài viết
                </Link>
                <span>›</span>
                <span className="flex font-bold gap-2 mb-4 text-base text-gray-600">
                  {trimText(title, 35)}
                </span>
              </div>

              {/* Tiêu đề bài viết */}
              <h1 className="md:text-3xl text-xl font-bold text-primary-dark dark:text-primary">
                {title}
              </h1>
              <div className="mt-2 mb-2">
                <Share url={`${host}/bai-viet/${slug}`} />
              </div>
              <div className="mt-2 uppercase text-blue-800 font-xl">
                <b>{category}</b>
              </div>
              <div className="blog prose prose-lg dark:prose-invert max-w-2xl md:max-w-4xl lg:max-w-5xl">
                {parse(content)}
              </div>
            </div>
          </div>

          {/* Recent Posts Section - 25% width on md and up */}
          <div className="w-full md:w-1/4 px-0.5 ">
            <div className="pt-5">
              <h2 className="text-3xl font-bold text-primary-dark dark:text-primary p-2 mb-4">
                Bài viết gần đây
              </h2>
              <div className="flex flex-col space-y-4">
                {recentPosts && recentPosts.length > 0 ? recentPosts.slice(0, 5).map((p) => (
                  <Link key={p.slug} href={`/bai-viet/${p.slug}`} legacyBehavior>
                    <a className="flex space-x-3 w-full">
                      {p.thumbnail && (
                        <Image
                          src={p.thumbnail}
                          alt={`Thumbnail for ${p.title}`}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded"
                        />
                      )}
                      <div className="flex flex-col flex-1">
                        <span className="text-base font-bold text-gray-800">
                          {p.title}
                        </span>
                        <div className="text-base flex items-center mt-1 gap-2">
                          <span className=" text-orange-700">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </span>
                          <span>
                            {new Date(p.createdAt).toLocaleDateString("vi-VN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).replace("tháng ", "Tháng ")}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                )) : (
                  <p className="text-gray-600">Không có bài viết gần đây.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SinglePost;

export const getServerSideProps: GetServerSideProps<
  { post: PostData; meta: MetaData },
  { slug: string }
> = async ({ params }) => {
  try {
    await db.connectDb();

    const post = await Post.findOne({ slug: params?.slug });
    if (!post) {
      console.log(`Post not found for slug: ${params?.slug}`);
      return { notFound: true };
    }

    const posts = await Post.find({
      _id: { $ne: post._id },
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("slug title thumbnail category createdAt");

    const recentPosts = posts.map((p) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      category: p.category || "Uncategorized",
      thumbnail: p.thumbnail?.url,
      createdAt: p.createdAt.toString(),
    }));

    const { _id, title, content, meta, slug, tags, thumbnail, category, createdAt } = post;

    const metaData = {
      title: `${title} | Q8 Design`,
      description: meta || `Đọc bài viết "${title}" về thiết kế nội thất từ chuyên gia Q8 Design. Kiến thức chuyên môn, xu hướng thiết kế mới nhất, giúp bạn tạo không gian sống hoàn hảo.`,
      keywords: `${title}, thiết kế nội thất, Q8 Design, kiến trúc, trang trí nhà, xu hướng thiết kế, ${category}`,
      robots: "index, follow",
      author: "Q8 Design",
      canonical: `https://q8design.vn/bai-viet/${slug}`,
      og: {
        title: `${title} | Q8 Design`,
        description: meta || `Đọc bài viết "${title}" về thiết kế nội thất từ chuyên gia Q8 Design`,
        type: "article",
        image: thumbnail?.url || "https://q8design.vn/logo-q8-01.png",
        imageWidth: "1200",
        imageHeight: "630",
        url: `https://q8design.vn/bai-viet/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Q8 Design`,
        description: meta || `Đọc bài viết "${title}" về thiết kế nội thất từ chuyên gia Q8 Design`,
        image: thumbnail?.url || "https://q8design.vn/logo-q8-01.png",
      },
    };

    const postData: PostData = {
      id: _id.toString(),
      title,
      content,
      meta,
      slug,
      tags,
      category,
      thumbnail: thumbnail?.url || "",
      createdAt: createdAt.toString(),
      recentPosts,
    };

    return {
      props: {
        post: postData,
        meta: metaData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true };
  }
};