import { createClient } from "contentful"


export async function getStaticProps() {


  const client = createClient({ 
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
  })

const res = await client.getEntries({ content_type:'memory'})

return {
  props: {
    memories: res.items
  }
}

} 

export default function Home({memories}) {
  console.log(memories)
return (
    <div className="blog-list">
      Nerd Blogs
    </div>
  )
}


