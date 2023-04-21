import RatingListItem from "../components/RatingListItem";
import { useState } from "react";
import { Rating, ratings, updateRatings } from "../data/ratings";
import {
  IonButton,
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
  const [allRatings, setRatings] = useState<Rating[]>(ratings); // If you don't want to use the sample data replace "ratings" with [].
  const onSubmit = (data: FormData) => {
    const newRating: Rating = {
      id: ratings.length,
      title: data.title,
      score: data.score,
      review: data.review,
    };
    updateRatings([...allRatings, newRating]);
    setRatings(ratings);
  };

  //Extra
  const sortByTitle = () => {
    const sorted = [...allRatings].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setRatings(sorted);
  };

  const sortByScore = () => {
    const sorted = [...allRatings].sort((a, b) => b.score - a.score);
    setRatings(sorted);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>ScreenScore</IonTitle>
          <AddRatingForm onSubmit={onSubmit} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {allRatings.map((r) => (
            <RatingListItem key={r.id} rating={r} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
