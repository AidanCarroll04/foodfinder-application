import Head from "next/head";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import LocationDetail from "components/locations-details";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";

const LocationPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const location: LocationType = JSON.parse(props.data.location);
  const title = `The Food Finder - Details for ${location.name}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <h1>{location.name}</h1>
      <LocationDetail location={location} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const locationId = context.query.location_id;
  let locations: LocationType[] = [];

  try {
    await dbConnect();
    locations = await findLocationsById([locationId as string]);
    if (!locations.length) {
      throw new Error(`Location ${locationId} not found`);
    }
  } catch (err: any) {
    return { notFound: true };
  }

  return {
    props: {
      data: { location: JSON.stringify(locations.pop()) },
    },
  };
};

export default LocationPage;
