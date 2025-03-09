import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="side-left">
        <h2>
          Cook Like a Pro with Our{" "}
          <span style={{ color: "#dea52b" }}>Easy</span>
          and <span style={{ color: "#dea52b" }}>Testy</span> Recipes
        </h2>
        <p>
          Form quick and aesy meals to gourmet delights, we have something for
          every taste and occasion
        </p>
        <button>Explore as Recipse</button>
      </div>
      <div className="side-right">
        <img src="../../public/assets/koki.png" alt="koki.png" />
      </div>
    </div>
  );
}

export default Home;
