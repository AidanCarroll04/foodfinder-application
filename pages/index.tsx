import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import LocationsList from "components/locations-list";
import dbConnect from "middleware/db-connect";
import { findAllLocations } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";

const Home: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const locations: LocationType[] = JSON.parse(props.data.locations);

  const title = "The Food Finder - Home";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The Food Finder - Home" />
      </Head>
      <h1>Welcome to the Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let locations: LocationType[] = [];
  try {
    await dbConnect();
    locations = await findAllLocations();
  } catch (err: any) {
    return { notFound: true };
  }

  return {
    props: {
      data: { locations: JSON.stringify(locations) },
    },
  };
};

export default Home;
