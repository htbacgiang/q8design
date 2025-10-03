// Quick script to create test posts without needing .env.local
const mongoose = require('mongoose');

// Hardcode a simple connection for testing
const MONGODB_URI = "mongodb://localhost:27017/q8design_test"; // Local MongoDB for testing

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, trim: true, unique: true },
  content: { type: String, required: true, trim: true },
  category: { type: String },
  meta: { type: String, required: true, trim: true },
  tags: { type: [String] },
  thumbnail: {
    url: String,
    public_id: String,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDraft: { type: Boolean, default: false }, // Default to published
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

const testPosts = [
  {
    title: "Bài viết test số 1 - Nông nghiệp hữu cơ",
    slug: "bai-viet-test-so-1-nong-nghiep-huu-co",
    content: "<p>Đây là nội dung bài viết test về nông nghiệp hữu cơ. Nông nghiệp hữu cơ là phương pháp sản xuất không sử dụng hóa chất độc hại.</p>",
    category: "Nông nghiệp",
    meta: "Bài viết test về nông nghiệp hữu cơ và các phương pháp sản xuất bền vững an toàn cho môi trường.",
    tags: ["nông nghiệp", "hữu cơ", "test"],
    isDraft: false
  },
  {
    title: "Bài viết test số 2 - Công nghệ IoT",
    slug: "bai-viet-test-so-2-cong-nghe-iot",
    content: "<p>Đây là nội dung bài viết test về công nghệ IoT trong nông nghiệp. IoT giúp tự động hóa quy trình sản xuất.</p>",
    category: "Công nghệ",
    meta: "Bài viết test về ứng dụng công nghệ IoT trong nông nghiệp thông minh và tự động hóa.",
    tags: ["iot", "công nghệ", "test"],
    isDraft: false
  },
  {
    title: "Bài viết test số 3 - Robot nông nghiệp",
    slug: "bai-viet-test-so-3-robot-nong-nghiep",
    content: "<p>Đây là nội dung bài viết test về robot nông nghiệp. Robot giúp tăng hiệu quả sản xuất và giảm chi phí lao động.</p>",
    category: "Robot",
    meta: "Bài viết test về robot nông nghiệp và ứng dụng trong sản xuất nông nghiệp hiện đại.",
    tags: ["robot", "nông nghiệp", "test"],
    isDraft: false
  }
];

async function createQuickTestPosts() {
  try {
    console.log("🔌 Connecting to local MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected successfully");

    // Clear existing posts
    await Post.deleteMany({});
    console.log("🧹 Cleared existing posts");

    // Create test posts
    const createdPosts = await Post.insertMany(testPosts);
    console.log(`✅ Created ${createdPosts.length} test posts:`);
    
    createdPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   isDraft: ${post.isDraft}`);
      console.log(`   Category: ${post.category}`);
    });

    // Verify
    const total = await Post.countDocuments({});
    const published = await Post.countDocuments({ isDraft: false });
    
    console.log(`\n📊 Summary:`);
    console.log(`   Total posts: ${total}`);
    console.log(`   Published posts: ${published}`);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected");
  }
}

createQuickTestPosts();
