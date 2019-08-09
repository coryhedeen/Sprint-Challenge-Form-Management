import React from 'react';

//cours, ingredients, name, technique

const GoodFood = (props) => {
  return (
    <div className="data">
      <h1>{props.card.name}</h1>
      <h2>{props.card.ingredients}</h2>
      <h3>{props.card.course}</h3>
      <h4>{props.card.technique}</h4>
    </div>
  )
}

export default GoodFood;
