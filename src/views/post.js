import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/primary-button";
import posts from "../data/posts";
import BasicPageLayout, { BlogPageLayout } from "../layouts/basic-page";
import DB from "../data/db";
import ReactDom from "react-dom";
import moment from "moment";

const Post = (props) => {
  const [post, setPost] = useState(null);
  const { name } = props.match.params;
  const [body, setBody] = useState("");

  useEffect(() => {
    DB.getPostBySlug(name).then((data) => {
      console.log("post", data);
      setPost(data);
      let markdown = data.body;
      let html = markdownToHtml(markdown);
      setBody(html);
    });
  }, []);

  // convert markdown to html
  function markdownToHtml(markdown) {
    // bold to html bold
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    // italic to html italic
    markdown = markdown.replace(/\*(.*?)\*/g, "<i>$1</i>");
    // code to html code
    markdown = markdown.replace(/`(.*?)`/g, "<code>$1</code>");
    // link to html link
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    // image to html image
    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img src="$2" alt="$1" />'
    );
    // new line to html br
    markdown = markdown.replace(/\n/g, "<br />");
    // h1 to html h1
    markdown = markdown.replace(/^# (.*?)/gm, "<h1>$1</h1>");
    // h2 to html h2
    markdown = markdown.replace(/^## (.*?)/gm, "<h2>$1</h2>");
    // h3 to html h3
    markdown = markdown.replace(/^### (.*?)/gm, "<h3>$1</h3>");
    // h4 to html h4
    markdown = markdown.replace(/^#### (.*?)/gm, "<h4>$1</h4>");
    // h5 to html h5
    markdown = markdown.replace(/^##### (.*?)/gm, "<h5>$1</h5>");
    // h6 to html h6
    markdown = markdown.replace(/^###### (.*?)/gm, "<h6>$1</h6>");
    // ul to html ul
    markdown = markdown.replace(/^\* (.*?)/gm, "<ul><li>$1</li></ul>");
    // ol to html ol
    markdown = markdown.replace(/^1. (.*?)/gm, "<ol><li>$1</li></ol>");
    // blockquote to html blockquote
    markdown = markdown.replace(/^> (.*?)/gm, "<blockquote>$1</blockquote>");
    // return html

    return markdown;
  }

  return (
    <BlogPageLayout>
      <div
        style={{ zIndex: 100, width: "100%", maxWidth: 1050, minHeight: 600 }}
      >
        {post && (
          <div style={{ padding: 40 }}>
            <div
              style={{
                backgroundImage: "url(" + post.image.url + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: 400,
                borderRadius: 10,
              }}
            ></div>
            {post.category && (
              <div style={{ fontSize: 42, fontWeight: 400, marginTop: 60 }}>
                {post.category}
              </div>
            )}
            <div style={{ fontSize: 42, fontWeight: 700, marginTop: -18 }}>
              {post.title}
            </div>
            <div style={{ fontSize: 14, color: "#8C30F5" }}>
              {moment(post.date ? post.date : post.createdAt).format("LL")}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "grey",
                marginBottom: 40,
                borderBottom: "1px solid #ccc",
              }}
            >
              {post.subtitle}
            </div>

            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
        )}
      </div>
    </BlogPageLayout>
  );
};

export default Post;
