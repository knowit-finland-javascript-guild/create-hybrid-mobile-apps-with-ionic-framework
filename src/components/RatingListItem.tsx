import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { Rating } from "../data/ratings";
import "./RatingListItem.css";

interface RatingListItemProps {
  rating: Rating;
}

const RatingListItem: React.FC<RatingListItemProps> = ({ rating }) => {
  return (
    <IonItem lines="full">
      <IonLabel>
        <h2>
          {rating.title}
          <span className="score">
            <IonNote>{rating.score}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default RatingListItem;
