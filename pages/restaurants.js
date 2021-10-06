import { connectToDatabase } from "../util/mongodb";
export default function Restaurants({ restaurants }) {
  return (
    <div>
      <h1>List of Restaurants</h1>
      <p>
        <small>based on cuisine</small>
      </p>
      <ul>
        {restaurants.map((restaurant) => (
          <li>
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.cuisine}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const restaurants = await db
    .collection("restaurants")
    .find({})
    .sort({ cuisine: -1 })
    .limit(50)
    .toArray();
  return {
    props: {
      restaurants: JSON.parse(JSON.stringify(restaurants)),
    },
  };
}

