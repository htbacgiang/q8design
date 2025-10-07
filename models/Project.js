const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['villa', 'apartment', 'townhouse', 'commercial', 'office', 'resort', 'restaurant', 'cafe', 'showroom'],
    default: 'villa'
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  area: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    trim: true
  },
  style: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    trim: true
  },
  completion: {
    type: String,
    enum: ['Hoàn thành', 'Đang thi công', 'Đang thiết kế', 'Tạm dừng'],
    default: 'Đang thiết kế'
  },
  image: {
    type: String,
    required: true
  },
  mainImage: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  description: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  has3D: {
    type: Boolean,
    default: false
  },
  model3D: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  overview: {
    type: String,
    trim: true
  },
  features: [{
    icon: {
      type: String,
      trim: true
    },
    title: {
      type: String,
      trim: true
    },
    desc: {
      type: String,
      trim: true
    }
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'draft'],
    default: 'active'
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  seoTitle: {
    type: String,
    trim: true
  },
  seoDescription: {
    type: String,
    trim: true
  },
  seoKeywords: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

// Indexes for better performance
projectSchema.index({ category: 1, featured: 1 });
projectSchema.index({ slug: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ createdAt: -1 });

// Virtual for URL
projectSchema.virtual('url').get(function() {
  return `/du-an/${this.slug}`;
});

// Method to increment views
projectSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Method to increment likes
projectSchema.methods.incrementLikes = function() {
  this.likes += 1;
  return this.save();
};

// Static method to get featured projects
projectSchema.statics.getFeatured = function(limit = 3) {
  return this.find({ featured: true, status: 'active' })
    .sort({ createdAt: -1 })
    .limit(limit);
};

// Static method to get projects by category
projectSchema.statics.getByCategory = function(category, limit = 10) {
  const query = { status: 'active' };
  if (category && category !== 'all') {
    query.category = category;
  }
  return this.find(query)
    .sort({ createdAt: -1 })
    .limit(limit);
};

// Static method to search projects
projectSchema.statics.search = function(searchTerm) {
  const regex = new RegExp(searchTerm, 'i');
  return this.find({
    status: 'active',
    $or: [
      { title: regex },
      { location: regex },
      { description: regex },
      { tags: { $in: [regex] } }
    ]
  }).sort({ createdAt: -1 });
};

// Export model, creating it if it doesn't exist
module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema);
