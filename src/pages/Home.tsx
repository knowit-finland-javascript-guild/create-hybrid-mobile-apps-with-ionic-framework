import RatingListItem from "../components/RatingListItem";
import { useState } from "react";
import { Rating, getRatings } from "../data/ratings";
import {
  IonActionSheet,
  IonButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";
import AddRatingForm from "../components/AddRatingForm";

const Home: React.FC = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getRatings();
    setRatings(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ratings</IonTitle>
          <AddRatingForm />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ratings</IonTitle>
          </IonToolbar>
        </IonHeader>

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
