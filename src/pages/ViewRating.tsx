import { useState } from "react";
import { Rating, getRating } from "../data/ratings";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useParams } from "react-router";
import "./ViewRating.css";

function ViewRating() {
  const [rating, setRating] = useState<Rating>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getRating(parseInt(params.id, 10));
    setRating(msg);
  });

  return (
    <IonPage id="view-rating-page">
      <IonHeader translucent>
        <IonToolbar>
          {/* Add here IonBackButton */}
          <IonTitle>ScreenScore</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        {rating ? (
          <div>
            <h1>{rating.title}</h1>
            <span className="score">
              <IonNote>{rating.score} / 5</IonNote>
            </span>
            <p>{rating.review}</p>
          </div>
        ) : (
          <div>Rating not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewRating;
