import formidable from "formidable";
import { ObjectId } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Post, { PostModelSchema } from "../models/Post";
// import { authOptions } from "../pages/api/auth/[...nextauth]";
import { CommentResponse, PostDetail, UserProfile } from "../utils/types";
import db from "../utils/db";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

interface FormidablePromise<T> {
  files: formidable.Files;
  body: T;
}

export const readFile = <T extends object>(
  req: NextApiRequest
): Promise<FormidablePromise<T>> => {
  const form = formidable();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);

      resolve({ files, body: fields as T });
    });
  });
};

export const readPostsFromDb = async (
  limit?: number,
  pageNo?: number,
  skip?: number,
  includeDrafts: boolean = false
) => {
    
  // Nếu không có limit, lấy tất cả bài viết
  if (limit && limit > 50)
    throw Error("Please use limit under 50 and a valid pageNo");
  
  const finalSkip = skip || (limit && pageNo ? limit * pageNo : 0);
  
  try {
    await db.connectDb();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
  
  // Tạo filter để loại trừ nháp nếu không includeDrafts
  const filter = includeDrafts ? {} : { isDraft: { $ne: true } };
  
  let query = Post.find(filter)
    .sort({ createdAt: "desc" })
    .select("-content")
    .skip(finalSkip);
    
  // Chỉ áp dụng limit nếu được chỉ định
  if (limit) {
    query = query.limit(limit);
  }

  const posts = await query;

  
  return posts;
};

export const formatPosts = (posts: PostModelSchema[]): PostDetail[] => {
  return posts.map((post) => ({
    id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    category: post.category,
    createdAt: post.createdAt.toString(),
    thumbnail: post.thumbnail?.url || "",
    meta: post.meta,
    tags: post.tags,
    isDraft: post.isDraft || false,
  }));
};

const getLikedByOwner = (likes: any[], user: UserProfile) =>
  likes.includes(user.id);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
