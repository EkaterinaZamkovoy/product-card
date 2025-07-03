import styles from './ProductCard.module.css';

type Currency = 'RUB' | 'USD' | 'EUR';

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

export const ProductCard = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.origin}>Страна: {origin}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </div>
  );
};
