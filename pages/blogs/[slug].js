import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })


 export const getStaticPaths = async () => {
        const res = await client.getEntries({
            content_type: 'memory'
        })
const paths = res.items.map(item => {
    return {
        params: {slug: item.fields.slug}
    }
})
        return {
            paths,
            fallback: false
        }


  }

export async function getStaticProps({ params }) {
    const {items} = await client.getEntries({
        content_type: 'memory',
        'fields.slug': params.slug
    })
    return {
        props: { memory: items[0]},
        revalidate: 1
    }
}


export default function BlogDetails({memory}) {
    const {title, youTubeEmbedUrl, details } = memory.fields
    return (
        <div>
          <div className='banner'>
              <h2>{ title }</h2>
         <div className='iframe'>
              <iframe
          width="560"
          height="315"
          src={youTubeEmbedUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
        <div className='description'>
        <div>{documentToReactComponents(details)}</div>
        </div>
          </div>
         

         <style jsx>{`
            h2 {
                text-transform: uppercase;
                
              }
              .banner h2 {
                width:100%;
                text-align: center;
                margin: 0;
                background: #fff;
                display: inline-block;
                padding: 20px;
                position: relative;
                top: -60px;
                left: -10px;
                transform: rotateZ(-.5deg);
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
              }

              .iframe {
                  display: flex;
                  justify-content:center;
              }


         `}</style>
        </div>
    )
}