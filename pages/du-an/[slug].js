import Head from "next/head";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProjectDetailPage from "../../components/q8design/ProjectDetailPage";

export default function ProjectDetail({ meta, project, jsonLd }) {
  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <h1 className="visually-hidden">{project?.title}</h1>
      <ProjectDetailPage project={project} />
    </DefaultLayout>
  );
}

// Helper functions
const connectDB = async (mongoose) => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

const createMeta = (project, baseUrl, slug) => ({
  title: `${project.title} - Q8 Design`,
  description: project.description || `Chi tiết dự án ${project.title} của Q8 Design`,
  keywords: `${project.title}, ${project.tags?.join(', ') || ''}, thiết kế kiến trúc, Q8 Design`,
  robots: "index, follow",
  author: "Q8 Design",
  canonical: `${baseUrl}/du-an/${slug}`,
  og: {
    title: `${project.title} - Q8 Design`,
    description: project.description || `Chi tiết dự án ${project.title}`,
    type: "article",
    image: project.mainImage || project.image ? `${baseUrl}${project.mainImage || project.image}` : `${baseUrl}/logo-q8.png`,
    imageWidth: "1200",
    imageHeight: "630",
    url: `${baseUrl}/du-an/${slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${project.title} - Q8 Design`,
    description: project.description || `Chi tiết dự án ${project.title}`,
    image: project.mainImage || project.image ? `${baseUrl}${project.mainImage || project.image}` : `${baseUrl}/logo-q8.png`,
  },
});

const createJsonLd = (project, baseUrl, slug) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description || `Chi tiết dự án ${project.title}`,
  "url": `${baseUrl}/du-an/${slug}`,
  "image": project.mainImage || project.image || `${baseUrl}/logo-q8.png`,
  "creator": {
    "@type": "Organization",
    "name": "Q8 Design",
    "url": baseUrl,
  },
  "datePublished": project.year || "2024",
  "keywords": project.tags?.join(', ') || "thiết kế kiến trúc, Q8 Design",
  "inLanguage": "vi-VN",
});

const serializeProject = (project, relatedProjects) => ({
  ...project,
  _id: project._id.toString(),
  createdAt: project.createdAt?.toISOString() || null,
  updatedAt: project.updatedAt?.toISOString() || null,
  relatedProjects: relatedProjects.map(r => ({
    ...r,
    _id: r._id.toString(),
    createdAt: r.createdAt?.toISOString() || null,
    updatedAt: r.updatedAt?.toISOString() || null,
  }))
});

export async function getServerSideProps({ params, req }) {
  const { slug } = params;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${req.headers.host}`;
  
  try {
    const mongoose = require('mongoose');
    const Project = require('../../models/Project');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not defined');
    }
    
    await connectDB(mongoose);
    
    const project = await Project.findOne({ 
      slug, 
      status: 'active' 
    }).select('-__v').lean();
    
    if (!project || !project.title) {
      return { notFound: true };
    }
    
    const relatedProjects = await Project.find({
      category: project.category,
      _id: { $ne: project._id },
      status: 'active'
    })
    .select('title slug image location area')
    .limit(3)
    .sort({ createdAt: -1 })
    .lean()
    .catch(() => []);

    return {
      props: {
        meta: createMeta(project, baseUrl, slug),
        project: serializeProject(project, relatedProjects),
        jsonLd: createJsonLd(project, baseUrl, slug),
      },
    };
  } catch (error) {
    console.error('Error fetching project:', error.message);
    return { notFound: true };
  }
}
