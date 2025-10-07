import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import db from '../../../utils/db';
import Post from '../../../models/Post.ts';
import Product from '../../../models/Product';
import Course from '../../../models/Course';

// Danh sách các trang tĩnh
const staticPages = [
  // Trang chủ - ưu tiên cao nhất
  { url: '/', changefreq: 'daily', priority: '1.0' },
  
  // Các trang chính của website
  { url: '/gioi-thieu', changefreq: 'monthly', priority: '0.8' },
  { url: '/lien-he', changefreq: 'monthly', priority: '0.7' },
  { url: '/bai-viet', changefreq: 'daily', priority: '0.9' },
  
  // Trang dịch vụ và dự án - quan trọng cho business
  { url: '/dich-vu', changefreq: 'weekly', priority: '0.9' },
  { url: '/du-an', changefreq: 'weekly', priority: '0.9' },
  
  // Trang tư vấn và liên hệ
  { url: '/tu-van', changefreq: 'weekly', priority: '0.8' },
  { url: '/dat-lich-tu-van', changefreq: 'weekly', priority: '0.7' },
  { url: '/tuyen-dung', changefreq: 'monthly', priority: '0.6' },
  
  // Trang đăng ký/đăng nhập
  { url: '/dang-ky', changefreq: 'monthly', priority: '0.6' },
  { url: '/dang-nhap', changefreq: 'monthly', priority: '0.6' },
  
  // Các trang chính sách và pháp lý
  { url: '/chinh-sach-bao-mat', changefreq: 'yearly', priority: '0.3' },
  { url: '/bao-mat', changefreq: 'yearly', priority: '0.3' },
  { url: '/dieu-khoan-su-dung', changefreq: 'yearly', priority: '0.3' },
  
  // Trang auth
  { url: '/auth/quen-mat-khau', changefreq: 'monthly', priority: '0.4' },
  { url: '/auth/dat-lai-mat-khau', changefreq: 'monthly', priority: '0.4' },
  
  // Trang cài đặt và quản lý
  { url: '/cai-dat', changefreq: 'monthly', priority: '0.5' },
  { url: '/unsubscribe', changefreq: 'yearly', priority: '0.2' },
  
  // Trang 404 và activate
  { url: '/activate', changefreq: 'yearly', priority: '0.1' },
  
  // Trang dashboard public (nếu có)
  { url: '/dashboard', changefreq: 'monthly', priority: '0.5' },
  
  // Trang sản phẩm chính
  { url: '/san-pham', changefreq: 'weekly', priority: '0.8' },
  
  // Trang khóa học chính
  { url: '/khoa-hoc', changefreq: 'weekly', priority: '0.8' },
];

// Danh sách các slug dịch vụ tĩnh (từ servicesData)
const servicesSlugs = [
  'thiet-ke-kien-truc-noi-that',
  'thi-cong-xay-dung',
  'cam-ket-chat-luong',
  'bao-hanh-bao-tri',
  'thiet-ke-web',
  'thiet-ke-logo',
  'marketing-online',
  'seo-website',
  'quang-cao-google',
  'quang-cao-facebook',
  'content-marketing',
  'social-media-marketing',
  'thiet-ke-graphic',
  'thiet-ke-banner',
  'thiet-ke-catalog',
  'thiet-ke-name-card',
  'thiet-ke-brochure',
  'thiet-ke-poster',
  'thiet-ke-menu',
  'thiet-ke-billboard'
];

// Hàm encode URL an toàn
const encodeUrl = (url) => {
  return url.replace(/&/g, '&amp;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;')
           .replace(/'/g, '&#39;');
};


// Hàm lấy dữ liệu bài viết
const getPostsForSitemap = async () => {
  try {
    await db.connectDb();
    // Lấy tất cả bài viết (cả draft và published)
    const posts = await Post.find({}, 'slug updatedAt createdAt isDraft').lean();
    console.log(`Found ${posts.length} total posts in database`);
    
    // Hiển thị tất cả bài viết (cả draft và published)
    // Nếu muốn chỉ hiển thị published, thay đổi dòng dưới thành:
    // const allPosts = posts.filter(post => !post.isDraft);
    const allPosts = posts; // Hiển thị tất cả bài viết
    console.log(`Found ${allPosts.length} posts for sitemap (including drafts)`);
    
    return allPosts || []; // Đảm bảo luôn trả về array
  } catch (error) {
    console.error('Lỗi khi lấy bài viết:', error);
    return [];
  }
};

// Hàm lấy dữ liệu sản phẩm
const getProductsForSitemap = async () => {
  try {
    await db.connectDb();
    // Thử nhiều điều kiện khác nhau
    const products = await Product.find({}, 'slug updatedAt createdAt status').lean();
    console.log(`Found ${products.length} total products in database`);
    
    // Lọc sản phẩm active
    const activeProducts = products.filter(product => 
      product.status === 'active' || 
      product.status === 'published' || 
      !product.status // Nếu không có status field
    );
    console.log(`Found ${activeProducts.length} active products for sitemap`);
    
    return activeProducts || [];
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error);
    return [];
  }
};

// Hàm lấy dữ liệu khóa học
const getCoursesForSitemap = async () => {
  try {
    await db.connectDb();
    // Thử nhiều điều kiện khác nhau
    const courses = await Course.find({}, 'slug updatedAt createdAt isActive status').lean();
    console.log(`Found ${courses.length} total courses in database`);
    
    // Lọc khóa học active
    const activeCourses = courses.filter(course => 
      course.isActive === true || 
      course.status === 'active' || 
      course.status === 'published' ||
      !course.isActive && !course.status // Nếu không có field active
    );
    console.log(`Found ${activeCourses.length} active courses for sitemap`);
    
    return activeCourses || [];
  } catch (error) {
    console.error('Lỗi khi lấy khóa học:', error);
    return [];
  }
};

// Hàm lấy các slug dự án từ data tĩnh
const getProjectSlugsForSitemap = () => {
  try {
    // Danh sách slug dự án cố định dựa trên data thực tế
    const projectSlugs = [
      "biet-thu-flc-sam-son",
      "anh-minh-the-k-park", 
      "nha-pho-anh-chung-thanh-tri",
      "chi-van-tay-ho",
      "thang-long-number-1",
      "nha-pho-anh-dat-ung-hoa",
      "anh-do-gia-lam",
      "chi-ha-cc-newskyline-van-quan",
      "chi-linh-vin-smart-city",
      "thiet-ke-nha-pho-anh-loi-linh-dam",
      "thiet-ke-nha-pho-chi-bich",
      "nha-pho-3-tang-hien-dai",
      "biet-thu-sang-trong",
      "can-ho-chung-cu-cao-cap",
      "nha-hang-khach-san",
      "van-phong-cong-ty",
      "showroom-trien-lam",
      "nha-xuong-san-xuat",
      "biet-thu-venice",
      "nha-pho-4-tang-sang-trong",
      "can-ho-penthouse",
      "nha-hang-sushi",
      "khach-san-5-sao",
      "van-phong-startup",
      "showroom-o-to",
      "nha-xuong-cong-nghiep",
      "biet-thu-phap",
      "nha-pho-co-dien",
      "can-ho-studio",
      "nha-hang-bbq"
    ];
    
    return projectSlugs.map(slug => ({
      slug,
      lastmod: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Lỗi khi lấy slug dự án:', error);
    return [];
  }
};

// Handler chính cho API sitemap - Auto-generate và save file
const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('🔄 Auto-generating Q8 Design sitemap on request...');
    
    // Lấy tất cả dữ liệu song song để tối ưu hiệu suất
    const [posts, products, courses, projects] = await Promise.all([
      getPostsForSitemap(),
      getProductsForSitemap(),
      getCoursesForSitemap(),
      Promise.resolve(getProjectSlugsForSitemap()) // Không cần await vì là sync function
    ]);

    // Tạo sitemap content
    const baseUrl = 'https://q8design.vn';
    const currentDate = new Date().toISOString();

    // Tạo XML sitemap
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

    // Thêm static routes
    staticPages.forEach(route => {
      const lastmod = currentDate;
      sitemapXml += `
<url><loc>${baseUrl}${route.url}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    });

    // Thêm service routes
    servicesSlugs.forEach(slug => {
      const lastmod = currentDate;
      sitemapXml += `
<url><loc>${baseUrl}/dich-vu/${slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;
    });

    // Thêm project routes
    projects.forEach(project => {
      const lastmod = project.lastmod || currentDate;
      sitemapXml += `
<url><loc>${baseUrl}/du-an/${project.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`;
    });

    // Thêm post routes
    posts.forEach(post => {
      const lastmod = post.updatedAt ? new Date(post.updatedAt).toISOString() : currentDate;
      sitemapXml += `
<url><loc>${baseUrl}/bai-viet/${post.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`;
    });

    // Thêm product routes
    products.forEach(product => {
      const lastmod = product.updatedAt ? new Date(product.updatedAt).toISOString() : currentDate;
      sitemapXml += `
<url><loc>${baseUrl}/san-pham/${product.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
    });

    // Thêm course routes
    courses.forEach(course => {
      const lastmod = course.updatedAt ? new Date(course.updatedAt).toISOString() : currentDate;
      sitemapXml += `
<url><loc>${baseUrl}/khoa-hoc/${course.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    });

    sitemapXml += `
</urlset>`;

    // Ghi file sitemap vào public folder
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXml);

    // Cập nhật robots.txt
    const robotsContent = `# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}/

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`;

    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);

    // Set headers cho XML response
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache 1 hour
    
    console.log('✅ Q8 Design sitemap auto-generated successfully!');
    console.log(`📊 Stats: ${staticPages.length} static + ${servicesSlugs.length} services + ${projects.length} projects + ${posts.length} posts + ${products.length} products + ${courses.length} courses = ${staticPages.length + servicesSlugs.length + projects.length + posts.length + products.length + courses.length} total routes`);

    // Trả về sitemap XML
    res.status(200).send(sitemapXml);

  } catch (error) {
    console.error('❌ Error auto-generating Q8 sitemap:', error);
    
    // Fallback: trả về sitemap hiện tại nếu có
    try {
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        const existingSitemap = fs.readFileSync(sitemapPath, 'utf8');
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(existingSitemap);
        return;
      }
    } catch (fallbackError) {
      console.error('Fallback failed:', fallbackError);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error generating Q8 Design sitemap',
      error: error.message
    });
  }
};

export default handler;