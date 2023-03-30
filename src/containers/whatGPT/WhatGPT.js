import Feature from "../../components/Feature/Feature";
import "./WhatGPT.css";

const FEATURES = [
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartment b.",
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartment b.",
  },
];

const WhatGPT = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="wgpt">
      <div className="gpt__whatgpt-feature">
        <Feature
          title="What is GPT"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__whatgpt-container">
        {FEATURES.map((item, idx) => (
          <Feature key={idx} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT;
