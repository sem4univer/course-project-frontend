import { useState } from "react";

import { Input } from "../templates/Input";
import { Textarea } from "../templates/Textarea";
import { Button } from "../templates/Button";
import { Rating } from "../Rating";

import styles from "./Review.module.scss";

interface FormValues {
  name: string;
  email: string;
  review: string;
  saveInfo: boolean;
}

const initialFormValues: FormValues = {
  name: "",
  email: "",
  review: "",
  saveInfo: false,
};

export const ReviewForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <div className={styles.reviewForm}>
      <h3>Add a review</h3>
      <p className={styles.required}>
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <Textarea
            placeholder="Your Review*"
            id="review"
            name="review"
            value={formValues.review}
            onChange={handleChange}
          />
          <Input
            id="name"
            name="name"
            value={formValues.name}
            placeholder="Enter your name*"
            onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            value={formValues.email}
            placeholder="Enter your Email*"
            onChange={handleChange}
          />
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={formValues.saveInfo}
            onChange={handleChange}
          />
          <label htmlFor="saveInfo">
            Save my name, email, and website in this browser for the next time I
            comment
          </label>
        </div>
        <p className={styles.rating}>Your Rating*</p>
        <Rating rating={1} />
        <Button type="submit" className={styles.submit} color="black">
          Submit
        </Button>
      </form>
    </div>
  );
};
