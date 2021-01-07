import React from 'react';
import './Card.css';
import background from './media/background.jpg';
import sprite from './media/sprite.png';

function Card(props) {
  const style = {
    backgroundImage: `linear-gradient(rgba(50,51,130,0.35), rgba(50,51,130,0.65)), url(${background})`
  };

  const imageStyle = {
    background: `url(${props.content.image.url}) ${props.content.image.style}`,
    backgroundSize: `${props.content.image.size}`
  };

  const date = new Date();

  return (
    <article style={style} alt="satin blue background">
      <h3>{props.content.title}</h3>
      <img style={imageStyle} src={sprite} alt={props.content.image.alt} />
      <div>
        <section className="quote">
          <q><em>{props.content.quote}</em></q>
        </section>
        <aside>
          <ul>
            <li><span className="list-names"><strong>Name: </strong></span><span className="list-items">{props.content.name}</span></li>
            <li><span className="list-names"><strong>Instrument: </strong></span><span className="list-items">{props.content.instrument}</span></li>
            <li><span className="list-names"><strong>Born: </strong></span><span className="list-items">{props.content.birthdate}</span></li>
            <li><span className="list-names"><strong>Died: </strong></span><span className="list-items">{props.content.deathdate}</span></li>
          </ul>
        </aside>
        <main>
          <div className="info">{props.content.blurb.text}</div>
        </main>
      </div>
      <footer>
        <span className="source">Image Source<div className="imageInfo sourceInfo">{props.content.image.attr}</div></span>
        <span>© 2018 - {date.getFullYear()} J. Greenwood</span>
        <span className="source">Text Source<div className="textInfo sourceInfo">{props.content.blurb.attr}</div></span>
      </footer>
    </article>
  );
}

export default Card;
