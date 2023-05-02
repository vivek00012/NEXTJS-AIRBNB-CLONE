import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import FovoriteClient from "./FavoriteClient";
import { SafeListings } from "../types";
import getListing from "../actions/getListings";
import getFavoriteListings from "../actions/getFavouriteListings";

const Favourites = async () => {
  const currentUser = await getCurrentUser();
  //   const listings: SafeListings[] = await getListing();// using client filtering
  const favoriteListings: SafeListings[] = await getFavoriteListings();
  //   if (!currentUser) {
  //     return (
  //       <ClientOnly>
  //         <EmptyState title="Unauthorized" subtitle="Please login" />
  //       </ClientOnly>
  //     );
  //   }

  //   const favorites = currentUser?.favoriteIds ?? [];

  //   const favoriteListings: SafeListings[] = listings.filter((item) =>
  //     favorites.includes(item.id)
  //   );

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
