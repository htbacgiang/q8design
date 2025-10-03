// Script để tạo bài viết mẫu
import db from "../utils/db.js";
import Post from "../models/Post.ts";

const samplePosts = [
  {
    title: "Giới thiệu về Eco Bắc Giang",
    slug: "gioi-thieu-ve-eco-bac-giang",
    content: "<p>Eco Bắc Giang là dự án về nông nghiệp hữu cơ và công nghệ thông minh.</p>",
    category: "Giới thiệu",
    meta: "Tìm hiểu về dự án Eco Bắc Giang và sứ mệnh phát triển nông nghiệp bền vững.",
    tags: ["eco", "bắc giang", "nông nghiệp"],
    isDraft: false,
    thumbnail: {
      url: "https://images.unsplash.com/photo-1574923935936-d9d1707b5b7c?w=800&h=600&fit=crop",
      public_id: "eco_sample_1"
    }
  },
  {
    title: "Nông nghiệp thông minh với IoT",
    slug: "nong-nghiep-thong-minh-voi-iot",
    content: "<p>Ứng dụng công nghệ IoT trong nông nghiệp hiện đại.</p>",
    category: "Công nghệ",
    meta: "Khám phá cách công nghệ IoT cách mạng hóa ngành nông nghiệp.",
    tags: ["iot", "công nghệ", "nông nghiệp"],
    isDraft: false,
    thumbnail: {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      public_id: "iot_sample_1"
    }
  },
  {
    title: "Robot trong nông nghiệp",
    slug: "robot-trong-nong-nghiep",
    content: "<p>Những ứng dụng của robot trong sản xuất nông nghiệp.</p>",
    category: "Robot",
    meta: "Tìm hiểu về các loại robot được sử dụng trong nông nghiệp hiện đại.",
    tags: ["robot", "tự động hóa", "nông nghiệp"],
    isDraft: false,
    thumbnail: {
      url: "https://images.unsplash.com/photo-1581093458791-9d42e5d3abed?w=800&h=600&fit=crop",
      public_id: "robot_sample_1"
    }
  },
  {
    title: "Sản xuất hữu cơ bền vững",
    slug: "san-xuat-huu-co-ben-vung",
    content: "<p>Phương pháp sản xuất nông nghiệp hữu cơ bền vững.</p>",
    category: "Nông nghiệp hữu cơ",
    meta: "Hướng dẫn các phương pháp sản xuất nông nghiệp hữu cơ an toàn và bền vững.",
    tags: ["hữu cơ", "bền vững", "môi trường"],
    isDraft: false
  },
  {
    title: "Xu hướng nông nghiệp 2025",
    slug: "xu-huong-nong-nghiep-2025",
    content: "<p>Những xu hướng mới trong nông nghiệp năm 2025.</p>",
    category: "Xu hướng",
    meta: "Dự báo và phân tích các xu hướng nông nghiệp trong năm 2025.",
    tags: ["xu hướng", "2025", "tương lai"],
    isDraft: false
  }
];

async function createSamplePosts() {
  try {
    console.log("🔌 Connecting to database...");
    await db.connectDb();
    console.log("✅ Connected successfully");

    // Check current posts
    const currentCount = await Post.countDocuments({});
    console.log(`📊 Current posts in database: ${currentCount}`);

    // Don't create if we already have posts
    if (currentCount > 5) {
      console.log("✅ Database already has posts, skipping creation");
      return;
    }

    // Create sample posts
    console.log("📝 Creating sample posts...");
    const createdPosts = await Post.insertMany(samplePosts);
    
    console.log(`✅ Successfully created ${createdPosts.length} sample posts:`);
    createdPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} (${post.slug})`);
    });

    // Verify
    const total = await Post.countDocuments({});
    const published = await Post.countDocuments({ isDraft: false });
    
    console.log(`\n📊 Final Summary:`);
    console.log(`   Total posts: ${total}`);
    console.log(`   Published posts: ${published}`);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    process.exit(0);
  }
}

createSamplePosts();
