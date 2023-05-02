"use client";
import Heading from "../components/Heading";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import { SafeListings, SafeUser } from "../types";
import ListingCard from "../components/Listings/ListingCard";

interface FavoriteInterfaceProps {
  listings: SafeListings[];
  currentUser: SafeUser | null;
}
const FovoriteClient: React.FC<FavoriteInterfaceProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      ></Heading>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid.cols-5 2xl:grid.cols-6 gap-8">
        {listings.map((listingItem) => {
          return (
            <ListingCard
              currentUser={currentUser}
              key={listingItem.id}
              data={listingItem}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default FovoriteClient;
