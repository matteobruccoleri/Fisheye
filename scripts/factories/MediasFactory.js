import Image from "../models/Image.js";
import Video from "../models/Video.js";

// Factory fonction qui crée un média image ou vidéo
export default class MediasFactory {
	constructor (data) {
		// Si le type correspond à image, alors retourne-moi un objet image
		if (data.image) {
			return new Image(data);
			// Sinon retourne-moi un objet video
		} else if (data.video) {
			return new Video(data);
			// Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
		} else {
			throw "Unknown type format";
		}
	}
}
