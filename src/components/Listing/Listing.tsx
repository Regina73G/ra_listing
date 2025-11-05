import "./Listing.css";

export type Offer = {
  listing_id: number
  url: string
  MainImage: {
    url_570xN: string
  }
  title: string
  currency_code: string
  price: string
  quantity: number
};

type ListingProps = {
  items: Offer[];
};

const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
}

export default function Listing({items = []}: ListingProps) {
  return(
    <div className="product-list">
      {items.map((item) => (
        <a className="product-card" key={item.listing_id} id={`id_${item.listing_id}`} href={item.url}>
          <img className="product-image" src={item.MainImage.url_570xN} alt={item.title} />
          <div className="product-info">
            <h3 className="product-title">{item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}</h3>
            <div className="price-container">
              <div className="product-price">
                {
                  currencySymbols[item.currency_code]
                  ? `${currencySymbols[item.currency_code]}${Number(item.price).toFixed(2)}`
                  : `${item.currency_code}${Number(item.price).toFixed(2)}`
                }
              </div>
              <span className={
                item.quantity < 10 
                ? "stock-badge stock-low"
                : item.quantity <= 20
                ? "stock-badge stock-medium"
                : "stock-badge stock-high"
              }>{item.quantity} left</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
} 