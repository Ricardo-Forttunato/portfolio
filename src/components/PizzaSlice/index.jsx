/* eslint-disable react/prop-types */
import styles from "./PizzaSlice.module.css";
export default function PizzaSlice(props) {
  return (
    <>
      <div 
        className={`styles.pizzaSlice_${props.name}`}
        >
        <h4
          className={
            props.state === true
              ? `styles.card_deactive`
              : `styles.text_${props.name}`
          }
        >
          {props.title}
        </h4>
      </div>
      <div
        className={
          props.state === true ? `styles.card_${props.name}` : `styles.card_deactive`
        }
      >
        <p className={styles.card_text}>
          <span className={styles.text__highlight}>
            {`${props.highlight}:`}
          </span>{" "}
          <br />{props.text}
        </p>
      </div>
    </>
  );
}
