import styles from './subscription.module.scss';
import PricingCard from './pricing-card/pricing-card';
import CustomButton from "@/components/ui/button/button";
import PricingCardHead from './pricing-card/pricing-card-head/pricing-card-head'
import SubscriptionTabs from './subscription-tabs/subscription-tabs'
import { useRouter } from "next/router";

const Subscriptions = () => {
  const router = useRouter();

  const tabs = [
    {label: 'Monthly'},
    {label: 'Annually'},
  ]

  const handleSubscribeLater = () => {
    router.push("/student/language-choose");
  }

  return (
    <div className={styles.subscription_container}>
      <div className={`rounded-[40px] bg-white pt-10 px-8 pb-[60px] ${styles.subscription_card}`}>
        <div className='logo flex justify-center'>
          <img src="/assets/subscriptions/top-logo.svg" width={60} height={27} alt="logo" />
        </div>
        <div className='flex justify-center'>
          <div className={`${styles.subscription_header} flex flex-col items-center gap-3`}>
            <h1 className={`${styles.subscription_header_title} max-w-[439px] text-h font-bold text-center`}>
              Awesome! You&apos;re in! Subscribe and continue
            </h1>
            <p className='max-w-[716px] text-center text-lg font-normal'>
              You need to choose a subscription plan to utilize all the features of the platform to the fullest for the best learning outcome!
            </p>
          </div>
        </div>
        <div className='flex justify-center mb-6'>
          <SubscriptionTabs model={tabs} />
        </div>
        <div className={styles.pricing_section}>
          <PricingCard primary={true}>
            <PricingCardHead 
              title='Option 1'
              subtitle='Lorem ipsum dolor sit amet, consectetur elit.'
              badge='Most popular'
            />
            <div className='my-8'>
              <span className='text-h text-4xl font-semibold'>$30</span>
              <span className='text-secondary font-medium text-base'> / month</span>
            </div>
            <ul className={`${styles.pricing_list} flex flex-col gap-3 grow mb-12`}>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
            </ul>
            <div>
              <CustomButton
                className="w-full mb-4"
                btnSize="l"
                bgColor="main"
              >
                Subscribe now
              </CustomButton>
              <CustomButton
                className="w-full"
                btnSize="l"
                bgColor="light"
              >
                Subscribe later
              </CustomButton>
            </div>
          </PricingCard>
          <PricingCard>
            <PricingCardHead 
              title='Option 2'
              subtitle='Lorem ipsum dolor sit amet, consectetur elit.'
            />
            <div className='my-8'>
              <span className='text-h text-4xl font-semibold'>$30</span>
              <span className='text-secondary font-medium text-base'> / month</span>
            </div>
            <ul className={`${styles.pricing_list} flex flex-col gap-3 grow mb-12`}>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
              <li className='text-base text-txt'>Lorem ipsum dolor sit amet</li>
            </ul>
            <div>
              <CustomButton
                className="w-full mb-4"
                btnSize="l"
                bgColor="main"
              >
                Subscribe now
              </CustomButton>
              <CustomButton
                className="w-full"
                btnSize="l"
                bgColor="light"
              >
                Subscribe later
              </CustomButton>
            </div>
          </PricingCard>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions;
