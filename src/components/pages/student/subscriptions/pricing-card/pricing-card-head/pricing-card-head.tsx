type PricingCardHeadProps = {
  title: string
  subtitle: string
  badge?: string
}

const PricingCardHead = ({ title, subtitle, badge }: PricingCardHeadProps) => {
  return (
    <>
      <div className="flex pb-[18px]">
        <h2 className='grow color-h text-lg font-semibold'>{ title }</h2>
        { badge && (
          <span className="flex items-center px-3 rounded-full bg-mainAdditional text-xs">
            { badge }
          </span>
        )}
      </div>
      <p className='color-txt text-base'>{ subtitle }</p>
    </>
  )
}

export default PricingCardHead;