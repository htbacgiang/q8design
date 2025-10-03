const mongoose = require('mongoose');

// Import models
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
  isDraft: { type: Boolean, default: true },
}, { timestamps: true });

const Post = mongoose.models?.Post || mongoose.model("Post", PostSchema);

// Sample posts data
const samplePosts = [
  {
    title: "Nông nghiệp hữu cơ - Tương lai của sản xuất bền vững",
    slug: "nong-nghiep-huu-co-tuong-lai-san-xuat-ben-vung",
    content: `
      <h2>Nông nghiệp hữu cơ là gì?</h2>
      <p>Nông nghiệp hữu cơ là phương pháp sản xuất nông nghiệp không sử dụng các hóa chất tổng hợp như phân bón hóa học, thuốc trừ sâu và chất kích thích tăng trưởng.</p>
      
      <h2>Lợi ích của nông nghiệp hữu cơ</h2>
      <ul>
        <li>Bảo vệ môi trường</li>
        <li>Sản phẩm an toàn cho sức khỏe</li>
        <li>Duy trì độ phì nhiêu của đất</li>
        <li>Tạo thu nhập bền vững cho nông dân</li>
      </ul>
    `,
    category: "Nông nghiệp hữu cơ",
    meta: "Khám phá nông nghiệp hữu cơ - phương pháp sản xuất bền vững, an toàn cho môi trường và sức khỏe con người.",
    tags: ["nông nghiệp hữu cơ", "sản xuất bền vững", "môi trường"],
    thumbnail: {
      url: "https://images.unsplash.com/photo-1574923935936-d9d1707b5b7c?w=800&h=600&fit=crop",
      public_id: "organic_farming_1"
    },
    isDraft: false
  },
  {
    title: "Công nghệ IoT trong nông nghiệp thông minh",
    slug: "cong-nghe-iot-trong-nong-nghiep-thong-minh",
    content: `
      <h2>IoT trong nông nghiệp</h2>
      <p>Internet of Things (IoT) đang cách mạng hóa ngành nông nghiệp với các thiết bị thông minh giúp theo dõi và quản lý trang trại hiệu quả.</p>
      
      <h2>Ứng dụng của IoT</h2>
      <ul>
        <li>Cảm biến độ ẩm đất</li>
        <li>Hệ thống tưới tiêu tự động</li>
        <li>Theo dõi thời tiết</li>
        <li>Quản lý chăn nuôi</li>
      </ul>
    `,
    category: "Công nghệ",
    meta: "Tìm hiểu về công nghệ IoT và ứng dụng trong nông nghiệp thông minh để tối ưu hóa sản xuất.",
    tags: ["IoT", "nông nghiệp thông minh", "công nghệ"],
    thumbnail: {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      public_id: "iot_farming_1"
    },
    isDraft: false
  },
  {
    title: "Robot nông nghiệp - Tự động hóa trong sản xuất",
    slug: "robot-nong-nghiep-tu-dong-hoa-san-xuat",
    content: `
      <h2>Robot trong nông nghiệp</h2>
      <p>Robot nông nghiệp đang trở thành xu hướng mới giúp tự động hóa các công việc từ gieo trồng đến thu hoạch.</p>
      
      <h2>Các loại robot phổ biến</h2>
      <ul>
        <li>Robot thu hoạch</li>
        <li>Robot phun thuốc</li>
        <li>Robot làm đất</li>
        <li>Robot theo dõi cây trồng</li>
      </ul>
    `,
    category: "Robot",
    meta: "Khám phá các loại robot nông nghiệp và cách chúng cách mạng hóa quy trình sản xuất nông nghiệp.",
    tags: ["robot", "tự động hóa", "nông nghiệp"],
    thumbnail: {
      url: "https://images.unsplash.com/photo-1581093458791-9d42e5d3abed?w=800&h=600&fit=crop",
      public_id: "robot_farming_1"
    },
    isDraft: false
  }
];

async function createTestPosts() {
  try {
    // Check if MONGODB_URI exists
    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI not found in environment variables");
      console.log("Please create a .env.local file with your MongoDB connection string");
      return;
    }

    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing test posts
    console.log("🧹 Clearing existing posts...");
    await Post.deleteMany({});

    // Create new test posts
    console.log("📝 Creating test posts...");
    const createdPosts = await Post.insertMany(samplePosts);
    
    console.log(`✅ Successfully created ${createdPosts.length} test posts:`);
    createdPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} (${post.slug})`);
    });

    // Verify posts were created
    const totalPosts = await Post.countDocuments({});
    const publishedPosts = await Post.countDocuments({ isDraft: false });
    
    console.log(`\n📊 Database Summary:`);
    console.log(`   Total posts: ${totalPosts}`);
    console.log(`   Published posts: ${publishedPosts}`);

  } catch (error) {
    console.error("❌ Error creating test posts:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run the script
createTestPosts();
