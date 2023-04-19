import React, { useState } from "react";
import {
  IonButton,
  IonInput,
  IonActionSheet,
  IonItem,
  IonLabel,
  IonTextarea,
  IonList,
  IonPopover,
  IonContent,
  IonText,
} from "@ionic/react";
import { Rating, addRating, getRatings } from "../data/ratings";
import { useForm } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  component: JSX.Element;
};

const AddRatingForm: React.FC = () => {
  const [newRating, setNewRating] = useState<Rating>({
    title: "",
    score: 0,
    headline: "",
    review: "",
    id: getRatings().length,
  });

  const { register, handleSubmit, formState } = useForm<Rating>();

  const onSubmit = (data: Rating) => {
    console.log(data);
    setNewRating(data);
  };
  return (
    <>
      <IonButton id="open-form">Add new rating</IonButton>
      <IonPopover trigger="open-form" triggerAction="click">
        <IonContent class="ion-padding">
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                type="text"
                value={newRating.title}
                onIonChange={(e) =>
                  setNewRating({ ...newRating, title: e.detail.value!.toString() })
                }
                {...register("title", { required: true })}
              />
            </IonItem>
            {formState.errors.title && (
              <IonText color="danger">Please enter a title.</IonText>
            )}
            <IonItem>
              <IonLabel position="floating">Score</IonLabel>
              <IonInput
                type="number"
                value={newRating.score}
                onIonChange={(e) =>
                  setNewRating({ ...newRating, score: +e.detail.value! })
                }
                {...register("score", { required: true })}
              />
            </IonItem>
            {formState.errors.score && (
              <IonText color="danger">Please enter a score.</IonText>
            )}
            <IonItem>
              <IonLabel position="floating">Headline</IonLabel>
              <IonInput
                type="text"
                value={newRating.headline}
                onIonChange={(e) =>
                  setNewRating({ ...newRating, headline: e.detail.value!.toString()  })
                }
                {...register("headline", { required: true })}
              />
            </IonItem>
            {formState.errors.headline && (
              <IonText color="danger">Please enter a headline.</IonText>
            )}
            <IonItem>
              <IonLabel position="floating">Review</IonLabel>
              <IonTextarea
                value={newRating.review}
                onIonChange={(e) =>
                  setNewRating({ ...newRating, review: e.detail.value! })
                }
                {...register("review", { required: true })}
              />
            </IonItem>
            {formState.errors.review && (
              <IonText color="danger">Please enter a review.</IonText>
            )}

            <IonButton
              expand="block"
              type="submit"
              className="ion-margin-top"
              disabled={!formState.isValid}
            >
              Save
            </IonButton>
          </form>
        </IonContent>
      </IonPopover>
    </>
  );
};

export default AddRatingForm;
