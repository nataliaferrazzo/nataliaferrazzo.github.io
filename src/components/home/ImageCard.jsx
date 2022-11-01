
import React from "react";
import { CardImg } from "react-bootstrap";

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../assets/img', true, /\.(png|jpe?g|svg)$/));

const ImageCard = ({ number }) => {
  const code = (number) ? `${number}` : '0';

  return (
		<CardImg src={images[`code${code}.png`]} alt={code} height={200} width={300} />
  );
}
export default ImageCard
