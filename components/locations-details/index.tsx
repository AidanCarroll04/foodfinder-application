import { JSX } from "react";

import { LocationType } from "mongoose/locations/schema";
import styles from "./index.module.css";

interface PropsInterface {
  location: LocationType;
}

const LocationDetail = ({ location }: PropsInterface): JSX.Element => {
  return (
    <div className={styles.root}>
      <ul>
        <li><b>Address: </b>{location.address}</li>
        <li><b>Zipcode: </b>{location.zipcode}</li>
        <li><b>Borough: </b>{location.borough}</li>
        <li><b>Cuisine: </b>{location.cuisine}</li>
        <li><b>Grade: </b>{location.grade}</li>
      </ul>
    </div>
  );
};

export default LocationDetail;
