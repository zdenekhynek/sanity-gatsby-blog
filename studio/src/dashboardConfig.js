export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f65dd1b1e75b838b4748ab0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kno7n3ri',
                  apiId: '163de43c-7573-46e2-b75b-6ef34db3047c'
                },
                {
                  buildHookId: '5f65dd1ca59995624eb99e87',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ihfx432b',
                  apiId: '6c53b53b-3133-4a5e-8a2e-e3a998b09d9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zdenekhynek/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ihfx432b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
