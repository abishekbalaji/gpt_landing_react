import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import "./Blog.css";

const ARTICLES = [
  {
    imageUrl: blog01,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog02,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog03,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog04,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog05,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            imageUrl={ARTICLES[0].imageUrl}
            date={ARTICLES[0].date}
            title={ARTICLES[0].title}
          />
        </div>
        <div className="gpt__blog-container_groupB">
          {ARTICLES.slice(1).map(({ imageUrl, date, title }, idx) => (
            <Article key={idx} imageUrl={imageUrl} date={date} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
