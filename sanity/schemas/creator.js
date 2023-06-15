export default {
  name: 'creator',
  type: 'document',
  title: 'Creator',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'bio',
        type: 'string',
        title: 'Bio',
      },
    {
        name: 'slug',
        type: 'string',
        title: 'Slug',
        options:{
            source:'name',
            maxLength:96,
        }
      },
      {
        name:'image',
        title:'Image',
        type:'image',
        options:{
            hotspot:true,
        },
      }
  ],
}
