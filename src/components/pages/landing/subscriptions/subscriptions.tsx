import styles from './subscription.module.scss';

import SectionTitle from '../section-title/section-title';

import SubscriptionTabs from '@/components/pages/student/subscriptions/subscription-tabs/subscription-tabs'
import PricingCard from '@/components/pages/student/subscriptions/pricing-card/pricing-card';
import PricingCardHead from '@/components/pages/student/subscriptions/pricing-card/pricing-card-head/pricing-card-head'
import CustomButton from "@/components/ui/button/button";

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
    <section className="bg-white py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <div className='mb-8'>
          <SectionTitle>Subscriptions</SectionTitle>
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
    </section>
  )
}

export default Subscriptions;
