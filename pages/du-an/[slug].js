import Head from "next/head";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProjectDetailPage from "../../components/q8design/ProjectDetailPage";
import { useRouter } from "next/router";

export default function ProjectDetail({ meta, project }) {
  const router = useRouter();
  const { slug } = router.query;

  // Use project data from props (fetched from API)
  const projectData = project;
  
  // JSON-LD Schema.org cho chi tiết dự án
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectData?.title || `Dự án ${slug}`,
    "description": projectData?.description || `Chi tiết dự án thiết kế ${slug} của Q8 Design`,
    "url": `https://q8design.vn/du-an/${slug}`,
    "image": projectData?.gallery || [projectData?.mainImage || projectData?.image],
    "creator": {
      "@type": "Organization",
      "name": "Q8 Design",
      "url": "https://q8design.vn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://q8design.vn/logo-q8.png",
        "width": "200",
        "height": "60"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Q8 Design",
      "url": "https://q8design.vn"
    },
    "dateCreated": projectData?.year || "2024",
    "datePublished": projectData?.year || "2024",
    "genre": "Architectural Design",
    "keywords": projectData?.tags?.join(', ') || "thiết kế kiến trúc, thiết kế nội thất, Q8 Design",
    "inLanguage": "vi-VN",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://q8design.vn/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dự án",
          "item": "https://q8design.vn/du-an"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": projectData?.title || `Dự án ${slug}`,
          "item": `https://q8design.vn/du-an/${slug}`
        }
      ]
    },
    "workExample": {
      "@type": "VisualArtwork",
      "name": projectData?.title || `Dự án ${slug}`,
      "artMedium": "Architecture and Interior Design",
      "creator": {
        "@type": "Organization",
        "name": "Q8 Design"
      },
      "image": projectData?.mainImage || projectData?.image,
      "description": projectData?.description || `Chi tiết dự án thiết kế ${slug} của Q8 Design`
    },
    "about": {
      "@type": "Thing",
      "name": "Thiết kế kiến trúc và nội thất",
      "description": "Dịch vụ thiết kế kiến trúc, nội thất, thi công trọn gói và cải tạo không gian"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Q8 Design",
      "url": "https://q8design.vn"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": `https://q8design.vn/du-an/${slug}`
    }
  };

  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
      <Head>
        {/* JSON-LD Schema.org cho chi tiết dự án */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <h1 className="visually-hidden">
        {project?.title || `Dự án ${slug} - Q8 Design`}
      </h1>
      
      <ProjectDetailPage project={project} />
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  
  try {
    // Fetch project from API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/projects/${slug}`);
    
    if (!response.ok) {
      return {
        notFound: true,
      };
    }
    
    const data = await response.json();
    const project = data.data?.project;
    const relatedProjects = data.data?.relatedProjects || [];
    
    if (!project) {
      return {
        notFound: true,
      };
    }

  const meta = {
    title: `${project.title} - Q8 Design`,
    description: project.description || `Chi tiết dự án ${project.title} của Q8 Design - Khám phá quy trình thiết kế, ý tưởng sáng tạo và kết quả hoàn thiện đẳng cấp.`,
    keywords: `${project.title}, ${project.tags?.join(', ')}, thiết kế kiến trúc, thiết kế nội thất, Q8 Design`,
    robots: "index, follow",
    author: "Q8 Design",
    canonical: `https://q8design.vn/du-an/${slug}`,
    og: {
      title: `${project.title} - Q8 Design`,
      description: project.description || `Chi tiết dự án ${project.title} của Q8 Design`,
      type: "article",
      image: `https://q8design.vn${project.mainImage || project.image}`,
      imageWidth: "1200",
      imageHeight: "630",
      url: `https://q8design.vn/du-an/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Q8 Design`,
      description: project.description || `Chi tiết dự án ${project.title} của Q8 Design`,
      image: `https://q8design.vn${project.mainImage || project.image}`,
    },
  };

  return {
    props: {
      meta,
      project: {
        ...project,
        relatedProjects
      },
    },
  };

  } catch (error) {
    console.error('Error fetching project:', error);
    return {
      notFound: true,
    };
  }
}
