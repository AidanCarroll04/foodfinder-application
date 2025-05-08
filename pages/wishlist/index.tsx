import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import dbConnect from "middleware/db-connect";
import { findOnWishlist } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";
import WishList from "components/wishlist";

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const locations: LocationType[] = JSON.parse(props.data.locations);
  const title = "The Food Finder - Wish List";

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </head>
      <h1>My Wish List</h1>
      <WishList locations={locations} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const locations = await findOnWishlist("1234"); // Replace with real user ID if needed

  return {
    props: {
      data: {
        locations: JSON.stringify(locations),
      },
    },
  };
};

export default Page;
