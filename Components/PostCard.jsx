import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({index, collection, post}) {
  return (
    <div key={index} className="sm:w-[25vw] min-h-[500px] rounded overflow-hidden shadow-lg bg-primary-contrast text-primary ">
      <Link href={`/${collection}/${post.slug}`}>
        <Image className="w-full" width={1024} height={1024} src={`${post.frontMatter.image}`} alt="post image" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{post.frontMatter.title}</div>
          {/* <!-- Authors --> */}
          <div className="">
            <span className="pr-1 font-semibold">Author(s):</span>
            {post.frontMatter.authors.map((author, index) => (
              <span key={index} className="pr-1"> 
                {author}{index < post.frontMatter.authors.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          {/* <!-- Dates --> */}
          <div className="w-full justify-between mb-2">
            <div className="sm:flex"><div className="font-semibold pr-1">Updated:</div><div className="flex-1">{post.frontMatter.modified}</div></div>
          </div>
          {/* <!-- Summary --> */}
          <p className="text-gray-700 text-base">
            {post.frontMatter.summary}
          </p>
        </div>
        <div className="px-6">
          {/* // create tags */}
          {post.frontMatter.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
          ))}
        </div>
      </Link>
      <div className="min-w-sm flex justify-center p-2">
        <Link href={`/${collection}/${post.slug}`}>
          <button className="bg-secondary hover:bg-secondary-700 text-white font-bodyText font-bold py-2 px-4 rounded">
            Read More
          </button>
        </Link>
      </div>
    </div> 
  )
}
