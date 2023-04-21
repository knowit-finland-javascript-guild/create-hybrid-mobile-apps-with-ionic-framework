import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
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
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      score: 0.0,
      review: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const submitForm = (data: FormData) => {
    onSubmit(data);
    reset();
    setIsOpen(false);
  };

  return (
    <IonButtons slot="end">
      <IonButton onClick={() => setIsOpen(true)}>Add new rating</IonButton>
      {/* Add Modal here */}
    </IonButtons>
  );
};

export default AddRatingForm;
