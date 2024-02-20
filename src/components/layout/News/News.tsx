import "./News.scss";
const News = () => {
  //TODO get news from DB
  return (
    <section className="news-section">
      <span className="section-title">News</span>
      <p className="news-paragraph">ValueCash Announces ICO to Reform E-Commerce With Its PoT Protocol</p>
      <span className="news-date">16:23, 12 dec 2018</span>
    </section>
  );
};

export default News;
