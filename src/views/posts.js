import React, { useEffect } from "react";
import PrimaryButton from "../components/primary-button";
import BasicPageLayout, { BlogPageLayout } from "../layouts/basic-page";
import DB from "../data/db";
import moment from "moment";
import _ from "lodash";

const PostsPage = (props) => {
  const [search, setSearch] = React.useState("");
  const [posts, setPosts] = React.useState(null);

  useEffect(() => {
    console.log("posts", posts);
    DB.getPosts().then((data) => {
      console.log("data", data);
      setPosts(data);
    });
  }, []);

  //post
  function PostCard(props) {
    return (
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `/post/${props.post.slug}`;
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid black",
            marginLeft: "auto",
            marginRight: "auto",
            overflow: "hidden",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
            marginBottom: 40,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#f0f0f0",
              backgroundImage: `url(${props.post.image?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div
          style={{
            paddingLeft: 40,
            flex: 1,
          }}
        >
          {props.post.category && (
            <div
              style={{
                fontWeight: 700,
                fontSize: 26,
                marginBottom: -14,
                color: "#8C30F5",
              }}
            >
              {props.post.category}
            </div>
          )}
          <div
            style={{
              fontWeight: 400,
              fontSize: 34,
              paddingLeft: 18,
            }}
          >
            {props.post.title}
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 12,
              color: "#000",
            }}
          >
            {moment(
              props.post.date ? props.post.date : props.post.createdAt
            ).format("MMMM YYYY")}
          </div>
          <div
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {props.post.subtitle}
          </div>
        </div>
      </div>
    );
  }

  function PostList() {
    return (
      <div>
        {posts &&
          _.orderBy(posts, "date", "desc")
            .filter((x) => {
              return x.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((x) => {
              return <PostCard post={x} />;
            })}
      </div>
    );
  }

  return (
    <BlogPageLayout>
      <div
        style={{
          zIndex: 100,
          width: "100%",
          maxWidth: 1050,
          minHeight: 800,
          flex: 1,
        }}
      >
        <div
          style={{ flex: 1, minWidth: 300, paddingTop: 60, paddingLeft: 40 }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: 44,
              fontFamily: "Inter",
              fontWeight: 800,
              lineHeight: 1,
              paddingBottom: 14,
              textAlign: "center",
              borderBottom: "3px dashed #ccc",
              marginBottom: 10,
            }}
          >
            <div>
              VALID|<span style={{ color: "#8C30F5" }}>BLOG</span>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ccc",
                marginBottom: 60,
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <PostList />
          </div>
        </div>
      </div>
    </BlogPageLayout>
  );
};

export default PostsPage;
