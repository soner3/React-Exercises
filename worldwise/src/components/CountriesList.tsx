import { CityType } from "../App";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

interface CityListPropTypes {
  cities: CityType[];
  isLoading: boolean;
}

export default function CountriesList({
  cities,
  isLoading,
}: CityListPropTypes) {
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

  const countries = cities.reduce((arr: CityType[], city: CityType) => {
    if (
      !arr.some((el) => {
        return el.country === city.country;
      })
    ) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}
