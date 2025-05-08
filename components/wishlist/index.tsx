import { JSX } from "react";

import { LocationType } from "mongoose/locations/schema";
import styles from "./index.module.css";
import LocationsListItem from "components/locations-list-item";

interface PropsInterface {
  locations: LocationType[];
}

const WishList = ({ locations }: PropsInterface): JSX.Element => {
  return (
    <ul className={styles.root}>
      {locations.map((location) => (
        <LocationsListItem
          key={location.location_id}
          location={location}
        />
      ))}
    </ul>
  );
};

export default WishList;
