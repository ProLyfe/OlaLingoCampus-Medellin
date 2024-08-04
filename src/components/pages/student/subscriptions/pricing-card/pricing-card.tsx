import styles from './pricing-card.module.scss'

type PricingCardProps = {
  children?: React.ReactNode
  primary?: boolean
}

const PricingCard = ({ children, primary = false }: PricingCardProps) => {
  return (
    <div className={`${styles.pricing_card} ${primary ? styles.primary: ''}`}>
      { children }
    </div>
  )
}

export default PricingCard;
