import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock, FaTag } from "react-icons/fa";
import { trimText } from "../../utils/helper";

import DefaultLayout from "../../components/layout/DefaultLayout";
import MainCategories from "../../components/common/MainCategories";

import { PostDetail } from "../../utils/types";

type MetaData = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

const meta: MetaData = {
  title: "Blog & Cảm hứng thiết kế - Q8 Design | Kiến trúc & Nội thất",
  description: "Khám phá những câu chuyện, kinh nghiệm và xu hướng mới nhất trong lĩnh vực kiến trúc và nội thất. Nơi chia sẻ kiến thức để kiến tạo không gian sống mơ ước.",
  keywords: "thiết kế nội thất, blog thiết kế, xu hướng nội thất, kiến trúc, Q8 Design, cảm hứng thiết kế, không gian sống",
  author: "Q8 Design",
  robots: "index, follow",
  canonical: "https://www.q8design.vn/bai-viet",
  og: {
    title: "Q8 Design Blog - Cảm hứng & Xu hướng Thiết kế Nội thất",
    description: "Cùng Q8 Design khám phá những câu chuyện, kinh nghiệm và xu hướng mới nhất trong lĩnh vực kiến trúc và nội thất.",
    type: "website",
    image: "https://www.q8design.vn/images/og-blog.jpg",
    imageWidth: "1200",
    imageHeight: "630",
    url: "https://www.q8design.vn/bai-viet",
    siteName: "Q8 Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q8 Design Blog - Cảm hứng & Xu hướng Thiết kế Nội thất",
    description: "Cùng Q8 Design khám phá những câu chuyện, kinh nghiệm và xu hướng mới nhất trong lĩnh vực kiến trúc và nội thất.",
    image: "https://www.q8design.vn/images/twitter-blog.jpg",
  },
};

const Blogs: NextPage = () => {
  const [posts, setPosts] = useState<PostDetail[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const recentPostsPerPage = 9; // Recent posts pagination
  const featuredPostsCount = 4; // Always show first 4 as featured

  const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  // Fetch ALL posts from API
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch published posts only (exclude drafts)
      const response = await axios.get(`/api/posts`);
      
      if (response.data && response.data.posts) {
        const allPosts = response.data.posts;
        // Additional filter to ensure no drafts are displayed
        const publishedPosts = allPosts.filter((post: PostDetail) => !post.isDraft);
        
        setPosts(publishedPosts);
        setFilteredPosts(publishedPosts);
        
        // Calculate total pages for recent posts (excluding featured 4)
        const totalRecentPosts = Math.max(0, publishedPosts.length - featuredPostsCount);
        const calculatedTotalPages = Math.ceil(totalRecentPosts / recentPostsPerPage);
        setTotalPages(Math.max(1, calculatedTotalPages));
        
        setTotalPosts(publishedPosts.length);
      } else {
        setPosts([]);
        setFilteredPosts([]);
        setTotalPages(1);
        setTotalPosts(0);
      }
    } catch (err: any) {
      console.error("Error fetching posts:", err);
      setError("Không thể tải bài viết. Vui lòng thử lại sau.");
      setPosts([]);
      setFilteredPosts([]);
      setTotalPages(1);
      setTotalPosts(0);
    } finally {
      setLoading(false);
    }
  };

  // Initial load - only fetch once
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle category filtering
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
    if (category) {
      setFilteredPosts(posts.filter((post) => post.category === category));
    } else {
      setFilteredPosts(posts);
    }
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured posts: always first 4 posts from ALL posts (never change, not filtered)
  const featuredPosts = posts.slice(0, featuredPostsCount);
  
  // Recent posts: paginated from filtered posts, starting from post 5
  const filteredRecentPosts = selectedCategory ? 
    filteredPosts : // If category selected, use filtered posts
    filteredPosts.slice(featuredPostsCount); // If no category, skip first 4 posts
  
  const recentStartIndex = (currentPage - 1) * recentPostsPerPage;
  const recentEndIndex = recentStartIndex + recentPostsPerPage;
  const recentPosts = filteredRecentPosts.slice(recentStartIndex, recentEndIndex);
  
  // Recalculate total pages based on filtered recent posts
  const totalRecentPosts = filteredRecentPosts.length;
  const calculatedTotalPages = Math.ceil(totalRecentPosts / recentPostsPerPage);
  const actualTotalPages = Math.max(1, calculatedTotalPages);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content={meta.robots} />
        <link rel="canonical" href={meta.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
        <meta property="og:type" content={meta.og.type} />
        <meta property="og:image" content={meta.og.image} />
        <meta property="og:image:width" content={meta.og.imageWidth} />
        <meta property="og:image:height" content={meta.og.imageHeight} />
        <meta property="og:url" content={meta.og.url} />
        <meta property="og:site_name" content={meta.og.siteName} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:image" content={meta.twitter.image} />
      </Head>

      <DefaultLayout>
        <div className="pb-12 mt-6 max-w-8xl mx-10">
          <div className="flex flex-col gap-4 justify-center w-full">
            {/* Breadcrumb */}
            <div className="flex gap-2 px-4 lg:px-12 uppercase">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Trang chủ
              </Link>
              <span>•</span>
              <Link href="/bai-viet" className="text-orange-600 uppercase">
                Bài viết & Chia Sẻ
              </Link>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                <span className="ml-3 text-gray-600">Đang tải bài viết...</span>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mx-4 lg:mx-12 p-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl">
                <p className="mb-3">{error}</p>
                <button 
                  onClick={() => fetchPosts()}
                  className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
                >
                  Thử lại
                </button>
              </div>
            )}

            {/* Content */}
            {!loading && !error && (
              <>
            {/* Featured Posts */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between px-4 lg:px-12">
              {/* Main Featured */}
              {featuredPosts[0]?.thumbnail && (
                <div className="w-full lg:w-8/12 flex flex-col gap-2">
                  <Link href={`/bai-viet/${featuredPosts[0].slug}`}>
                    <div className="aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden group">
                      <Image
                        src={featuredPosts[0].thumbnail}
                        layout="fill"
                        className="object-cover group-hover:scale-105 transition-all ease duration-300"
                        alt={featuredPosts[0].title}
                      />
                    </div>
                  </Link>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/bai-viet/${featuredPosts[0].slug}`}
                      className="text-orange-600 lg:text-lg uppercase font-bold hover:text-orange-700 transition-colors"
                    >
                      {featuredPosts[0].title}
                    </Link>
                  </div>
                  <p className="text-base font-medium line-clamp-2 text-gray-600">
                    {trimText(featuredPosts[0].meta, 160)}
                  </p>
                  <div className="text-sm text-gray-500">
                    {formatDate(featuredPosts[0].createdAt)}
                  </div>
                </div>
              )}

              {/* Secondary Featured */}
              <div className="w-full lg:w-6/12 flex flex-col gap-4">
                {featuredPosts.slice(1, 4).map((post, idx) => (
                  post.thumbnail && (
                    <div key={post.id} className="flex justify-between gap-4 h-auto lg:h-1/3">
                      <Link href={`/bai-viet/${post.slug}`} className="w-1/3 aspect-video relative cursor-pointer rounded shadow-sm shadow-secondary-dark overflow-hidden group">
                        <Image
                          src={post.thumbnail}
                          layout="fill"
                          className="object-cover group-hover:scale-105 transition-all ease duration-300"
                          alt={post.title}
                        />
                      </Link>
                      <div className="w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm lg:text-base mb-1">
                          <Link href={`/bai-viet/${post.slug}`} className="text-orange-600 uppercase font-bold hover:text-orange-700 transition-colors">
                            {post.title}
                          </Link>
                        </div>
                        <p className="text-sm font-medium line-clamp-2 text-gray-600">
                          {trimText(post.meta, 100)}
                        </p>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

          

                {/* Category Filter */}
                <MainCategories onCategorySelect={handleCategorySelect} />

                {/* Recent Posts Grid */}
                {recentPosts.length > 0 && (
                  <div className="px-4 lg:px-12 mb-12">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Bài viết gần đây</h2>
                      <p className="text-gray-600">
                        {recentPosts.length} bài viết
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {recentPosts.map((post) => (
                        <article 
                          key={post.id} 
                          className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                          {/* Post Image */}
                          <div className="relative h-48 overflow-hidden">
                            {post.thumbnail ? (
                              <Image
                                src={post.thumbnail}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                                <span className="text-orange-400 text-3xl">📝</span>
                              </div>
                            )}
                            
                            {/* Category Badge */}
                            {post.category && (
                              <div className="absolute top-4 left-4">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {post.category}
                                </span>
                              </div>
                            )}

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Post Content */}
                          <div className="p-6">
                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.slice(0, 2).map((tag, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                    <FaTag className="mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                              <Link href={`/bai-viet/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 text-sm">
                              {trimText(post.meta, 100)}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center">
                                <FaCalendarAlt className="mr-1" />
                                <span>{formatDate(post.createdAt)}</span>
                              </div>
                              <div className="flex items-center">
                                <FaClock className="mr-1" />
                                <span>5 phút đọc</span>
                              </div>
                            </div>

                            {/* Read More */}
                            <Link 
                              href={`/bai-viet/${post.slug}`}
                              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors group/link"
                            >
                              Đọc thêm
                              <FaArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Posts Message */}
                {!loading && filteredPosts.length === 0 && (
                  <div className="text-center py-16 px-4">
                    <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-400 text-4xl">📝</span>
            </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedCategory ? 'Không có bài viết nào trong danh mục này' : 'Chưa có bài viết nào'}
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      {selectedCategory ? 'Hãy thử chọn danh mục khác hoặc quay lại sau để xem nội dung mới.' : 'Chúng tôi đang chuẩn bị những nội dung thú vị. Hãy quay lại sau nhé!'}
                    </p>
                    {selectedCategory && (
                      <button
                        onClick={() => handleCategorySelect(null)}
                        className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300"
                      >
                        Xem tất cả bài viết
                        <FaArrowRight className="ml-2" />
                      </button>
                    )}
          </div>
                )}

                {/* Enhanced Pagination */}
                <div className="flex flex-col items-center gap-6 mt-12 px-4 lg:px-12">

                  {/* Pagination Controls - Show if we have recent posts */}
                  {actualTotalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors font-medium flex items-center gap-2"
                      >
                        <FaArrowRight className="rotate-180 text-sm" />
                        Trước
                      </button>
                      
                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {(() => {
                          const pages = [];
                          const maxVisiblePages = 5;
                          let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                          let endPage = Math.min(actualTotalPages, startPage + maxVisiblePages - 1);
                          
                          // Adjust start if we're near the end
                          if (endPage - startPage + 1 < maxVisiblePages) {
                            startPage = Math.max(1, endPage - maxVisiblePages + 1);
                          }
                          
                          // Always show page 1
                          if (startPage > 1) {
                            pages.push(
                              <button
                                key={1}
                                onClick={() => handlePageChange(1)}
                                className="w-10 h-10 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                              >
                                1
                              </button>
                            );
                            
                            if (startPage > 2) {
                              pages.push(
                                <span key="start-ellipsis" className="px-2 text-gray-400">...</span>
                              );
                            }
                          }
                          
                          // Show pages in range
                          for (let i = startPage; i <= endPage; i++) {
                            pages.push(
                              <button
                                key={i}
                                onClick={() => handlePageChange(i)}
                                className={`w-10 h-10 rounded-full font-medium transition-colors flex items-center justify-center ${
                                  i === currentPage
                                    ? "bg-orange-500 text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                                }`}
                              >
                                {i}
                              </button>
                            );
                          }
                          
                          // Always show last page
                          if (endPage < actualTotalPages) {
                            if (endPage < actualTotalPages - 1) {
                              pages.push(
                                <span key="end-ellipsis" className="px-2 text-gray-400">...</span>
                              );
                            }
                            
                            pages.push(
                              <button
                                key={actualTotalPages}
                                onClick={() => handlePageChange(actualTotalPages)}
                                className="w-10 h-10 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                              >
                                {actualTotalPages}
                              </button>
                            );
                          }
                          
                          return pages;
                        })()}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === actualTotalPages}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors font-medium flex items-center gap-2"
                      >
                        Sau
                        <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  )}
                </div>
                
              </>
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Blogs;
