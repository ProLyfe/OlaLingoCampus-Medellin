type SectionTitleProps = {
  children: React.ReactNode
}

const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <h2 className="text-[32px] mobile:text-[44px] font-semibold text-h text-center">{ children }</h2>
  )
}

export default SectionTitle;
