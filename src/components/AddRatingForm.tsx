import React, { useState } from "react";
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonPopover,
  IonContent,
  IonText,
  IonButtons,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import "./AddRatingForm.css";

export type FormData = {
  title: string;
  score: number;
  review: string;
};

interface AddRatingFormProps {
  onSubmit: (data: FormData) => void;
}

const AddRatingForm: React.FC<AddRatingFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonButtons slot="end">
      <IonButton onClick={() => setIsOpen(true)}>Add new rating</IonButton>

      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add a new rating</IonTitle>
            <IonButtons slot="start">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput
                type="text"
                {...register("title", { required: true })}
              />
            </IonItem>
            {formState.errors.title && (
              <IonText color="danger">Please enter a title.</IonText>
            )}
            <IonItem>
              <IonLabel position="stacked">Score</IonLabel>
              <IonInput
                type="number"
                min={0}
                max={5}
                step="0.1"
                {...register("score", { required: true })}
              />
            </IonItem>
            {formState.errors.score && (
              <IonText color="danger">Please enter a score.</IonText>
            )}
            <IonItem>
              <textarea
                placeholder="Write a review"
                {...register("review", { required: true })}
                className="custom-textarea"
              />
            </IonItem>
            <IonButton type="reset" fill="outline">
              Clear
            </IonButton>
            <IonButton type="submit" disabled={!formState.isValid}>
              Save
            </IonButton>
          </form>
        </IonContent>
      </IonModal>
    </IonButtons>
  );
};

export default AddRatingForm;
