const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'text' },
      { name: 'techStack', type: 'array', of: [{ type: 'string' }] },
      { name: 'repoUrl', type: 'url' },
      { name: 'image', type: 'image' }
    ]
  }
  
  export default project