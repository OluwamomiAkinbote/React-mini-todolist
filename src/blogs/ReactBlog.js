import React, { useState } from "react";
import "./ReactBlog.css";

function ReactBlog() {
  const postDatas = [
    {
      id: 1,
      category: "Politics",
      title:
        "Navigating the Shifting Sands: The Evolving Dynamics of Global Alliances",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "In a rapidly changing geopolitical landscape, nations are redefining their alliances and partnerships. This blog explores the nuanced shifts in global politics, analyzing how traditional alliances are adapting to new challenges. From economic realignments to security concerns, we delve into the complex web of international relations and the impact on global stability.",
    },
    {
      id: 2,
      category: "Sports",
      title: "Beyond the Scoreboard: The Human Stories Behind Sports Triumphs",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "Sports is more than just a game; it's a tapestry of human stories. This blog goes beyond the scores and statistics, uncovering the personal narratives of athletes who defy odds, overcome challenges, and inspire millions. From underdog victories to tales of resilience, we celebrate the human spirit that makes sports a powerful force for unity and inspiration.",
    },
    {
      id: 3,
      category: "Sports",
      title:
        "The Unseen Heroes: Exploring the Role of Coaches in Sporting Success",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "While athletes take the spotlight, coaches work tirelessly behind the scenes, shaping champions and fostering teamwork. This post sheds light on the often-overlooked world of coaching, exploring the strategies, mentorship, and dedication that contribute to sporting success. We highlight the impact of coaching on athletes and how these unsung heroes play a pivotal role in shaping the future of sports.",
    },
    {
      id: 4,
      category: "Politics",
      title:
        "The Rise of Digital Democracy: Technology's Influence on Political Landscapes",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "As technology continues to reshape our world, it's also leaving an indelible mark on politics. This post examines the role of digital platforms in shaping political narratives, influencing elections, and empowering citizens. From social media activism to the impact of artificial intelligence on policy-making, we explore the intersection of technology and democracy.",
    },
    {
      id: 5,
      category: "Entertainments",
      title:
        "Breaking Boundaries: Diversity and Inclusion in the Entertainment Industry",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "The entertainment industry is undergoing a transformation, breaking traditional norms and embracing diversity. This blog delves into the changing landscape of representation in film, television, and music. From inclusive storytelling to the amplification of underrepresented voices, we explore how the entertainment world is becoming a catalyst for positive social change.",
    },
    {
      id: 6,
      category: "Entertainments",
      title: "The Streaming Revolution: Reshaping How We Consume Entertainment",
      image: process.env.PUBLIC_URL + "/Images/rev2.jpg",
      content:
        "Streaming platforms have revolutionized the way we consume entertainment, altering the dynamics of the industry. This post explores the impact of streaming on content creation, distribution, and audience engagement. From the rise of original content to the changing role of traditional media, we examine how streaming services are reshaping the future of entertainment.",
    },
  ];
  const [selectedcategory, setSelectedCategory] = useState("Politics");
  const [expandedPosts, setExpandedPosts] = useState([]);
  const filterdPosts = postDatas.filter(
    (post) => post.category === selectedcategory
  );
  const isPostExpanded = (postId) => expandedPosts.includes(postId);
  const handleReadMore = (postId) => {
    setExpandedPosts((prevExpandedPosts) => {
      if (isPostExpanded(postId)) {
        // If post is already expanded, collapse it
        return prevExpandedPosts.filter((id) => id !== postId);
      } else {
        // If post is not expanded, expand it
        return [...prevExpandedPosts, postId];
      }
    });
  };
  return (
    <div className="blog-container">
      <h1>React Blog</h1>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("Politics")}>
          Politics
        </button>
        <button onClick={() => setSelectedCategory("Sports")}>Sports</button>
        <button onClick={() => setSelectedCategory("Entertainments")}>
          Entertainment
        </button>
      </div>
      {/* post container */}
      <div className="post-container">
        {filterdPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <div className="post-content">
              <div className="image-container">
                {post.image && <img src={post.image} alt={post.title} />}
              </div>
              <div className="content">
                <p>
                  {isPostExpanded(post.id)
                    ? post.content
                    : post.content.substring(0, 100)}

                  <button
                    className="read-more"
                    onClick={() => handleReadMore(post.id)}
                  >
                    {isPostExpanded(post.id) ? " Read Less" : " Read More"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactBlog;
