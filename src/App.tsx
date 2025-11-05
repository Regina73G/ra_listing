import './App.css';
import Listing from './components/Listing/Listing';
import type { Offer }  from'./components/Listing/Listing';
import etsyData from './etsy.json';

type RawOffer = {
  listing_id: number;
  state: string;
  title?: string;
  url?: string;
  price?: string;
  currency_code?: string;
  quantity?: number;
  MainImage?: {
    url_570xN?: string;
  };
};

function App() {
  const items: Offer[] = (etsyData as RawOffer[])
    .filter((item) => item.state === "active")
    .map((item) => ({
      listing_id: item.listing_id,
      url: item.url || "#",
      MainImage: {
        url_570xN: item.MainImage?.url_570xN || "#",
      },
      title: item.title || "Untitled item",
      currency_code: item.currency_code || "USD",
      price: item.price || "0.00",
      quantity: item.quantity ?? 0,
    }));

  return (
    <Listing items={items} />
  )
}

export default App