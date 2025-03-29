import React from "react";
import "./Recipes.css";

function Recipes() {
  const recipes = [
    {
      id: 1,
      title: "Nasi Goreng Spesial",
      description:
        "Hidangan klasik Indonesia dengan sentuhan rempah yang kaya dan bumbu rahasia.",
      imgSrc: "/public/assets/img_recipse/nasi_goreng_special.jpeg",
    },
    {
      id: 2,
      title: "Rendang Daging Sapi",
      description:
        "Masakan legendaris dari Padang dengan daging sapi empuk dimasak dengan bumbu kompleks selama berjam-jam.",
      imgSrc: "/public/assets/img_recipse/Rendang.jpeg",
    },
    {
      id: 3,
      title: "Sate Ayam Madura",
      description:
        "Sate klasik dengan bumbu kacang khas Madura, disajikan dengan irisan bawang dan sambal.",
      imgSrc: "/public/assets/img_recipse/Sate Madura.jpeg",
    },
    {
      id: 4,
      title: "Gado-Gado Betawi",
      description:
        "Salad sayur Indonesia legendaris dengan saus kacang khas, paduan segar dan gurih.",
      imgSrc: "/public/assets/img_recipse/RESIPI GADO - GADO.jpeg",
    },
  ];

  return (
    <div className="container-recipse">
      <div className="text">
        <h1 className="judul">Popular Recipes You Can't Miss</h1>
        <p>
          From comfort food classics to exotic flavors, our featured recipes are
          sure to impress.
        </p>
      </div>

      <div className="cards-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card-recipse-populer">
            <div className="card-content">
              <div className="img">
                <img src={recipe.imgSrc} alt={recipe.title} />
              </div>
              <h1 className="judul">{recipe.title}</h1>
              <p>{recipe.description}</p>
              <div className="card-footer">
                <button>See Full Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
