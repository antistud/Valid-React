import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/primary-button'
import posts from '../data/posts'
import BasicPageLayout, { BlogPageLayout } from '../layouts/basic-page'
import DB from '../data/db'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import moment from 'moment'

const Post = (props) => {

  const [post, setPost] = useState(null);
  const { name } = props.match.params


  useEffect(() => {
    DB.getPostBySlug(name).then((data) => {
      console.log("post", data)
      setPost(data)
    })
  }, [])

  return (
    <BlogPageLayout >
      <div
        style={{ zIndex: 100, width: "100%", maxWidth: 1050, minHeight: 600, }}
      >
        {post && (
          <div style={{ padding: 40 }}>
            <div style={{
              backgroundImage: 'url(' + post.image.url + ')',
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: 500,
              borderRadius: 10
            }}>
            </div>
            <div
              style={{ fontSize: 52, fontWeight: 700, marginTop: 20, }}
            >
              {post.title}
            </div>
            <div style={{ fontSize: 14, color: "#8C30F5" }}>
              {moment(post.publishedAt).format("LL")}
            </div>
            <div style={{ fontSize: 14, color: "grey", marginBottom: 40, borderBottom: "1px solid #ccc" }}>
              {post.subtitle}
            </div>

            <div>
              <ReactMarkdown children={post.body} />
            </div>
          </div>
        )}



      </div>

    </BlogPageLayout>
  )
}

export default Post
