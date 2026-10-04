import {Link} from "react-router-dom";
import {thumbUrl} from "../../../utils/images.js";

const PhotoCard = ({ photo, priority }) => {
    return (
        <div>
            <Link to={`/photos/${photo.id}`} className="group block overflow-hidden rounded-xl">
                <img
                    src={thumbUrl(photo.id)}
                    alt={photo.title}
                    width={400}
                    height={300}
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "auto"}
                    className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 transition-transform duration-300 group-hover:scale-105"
                />
            </Link>
        </div>
    );
};

export default PhotoCard;