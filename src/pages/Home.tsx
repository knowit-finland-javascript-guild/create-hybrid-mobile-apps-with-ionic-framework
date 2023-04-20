import RatingListItem from "../components/RatingListItem";
import { useState } from "react";
import { Rating, addRating, getRatings } from "../data/ratings";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import AddRatingForm, { FormData } from "../components/AddRatingForm";

const Home: React.FC = () => {
  const [ratings, setRatings] = useState(getRatings());

  const onSubmit = (data: FormData) => {
    const newRating = {
      title: data.title,
      score: data.score,
      review: data.review,
      id: ratings.length,
    };
    addRating(newRating);
    setRatings(getRatings());
  };
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ratings</IonTitle>
          <AddRatingForm onSubmit={onSubmit} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {ratings.map((m) => (
            <RatingListItem key={m.id} rating={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
