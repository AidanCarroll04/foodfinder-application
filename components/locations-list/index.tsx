import { JSX } from "react";

import LocationsListItem from "../locations-list-item";
import styles from "./index.module.css";
import { LocationType } from "mongoose/locations/schema";

interface PropsInterface {
  locations: LocationType[];
}

const LocationsList = ({ locations }: PropsInterface): JSX.Element => {
  return (
    <ul className={styles.root}>
      {locations.map((location) => (
        <LocationsListItem
          location={location}
          key={location.location_id}
        />
      ))}
    </ul>
  );
};

export default LocationsList;
