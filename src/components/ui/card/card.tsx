type CardProps = {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className='' }: CardProps) => {
  return (
    <div className={`bg-white rounded-[30px] p-6 w-full ${className}`}>
      { children }
    </div>
  )
}

export default Card;
