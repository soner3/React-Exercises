import { CityType } from "../App";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

interface CityListPropTypes {
  cities: CityType[];
  isLoading: boolean;
}

export default function CityList({ cities, isLoading }: CityListPropTypes) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message
        message={"Add yor first City by clicking on a city on the map"}
      />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  );
}
