const blogPost = {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'slug', type: 'slug', options: { source: 'title' } },
      { name: 'publishedAt', type: 'datetime' },
      { name: 'body', type: 'array', of: [{ type: 'block' }] },
    ],
  }
  
  export default blogPost
  