import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import FovoriteClient from "./FavoriteClient";
import { SafeListings } from "../types";
import getFavoriteListings from "../actions/getFavouriteListings";

const Favourites = async () => {
  const currentUser = await getCurrentUser();
  const favoriteListings: SafeListings[] = await getFavoriteListings();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
  if (favoriteListings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Favorites"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FovoriteClient listings={favoriteListings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Favourites;
