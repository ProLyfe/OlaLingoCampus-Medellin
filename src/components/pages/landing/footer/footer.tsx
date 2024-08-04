import Link from "next/link";
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className="bg-h py-10 mobile:py-20">
      <div className="container_big">
        <div className="flex flex-col mobile:flex-row justify-between items-center gap-6">
          <div className="text-optional text-[28px]">Logo</div>
          <nav className="flex flex-col mobile:flex-row gap-6 mobile:gap-9 items-center">
            <Link className="text-optional font-medium text-lg" href={"/student"}>
              For students
            </Link>
            <Link className="text-optional  font-medium text-lg" href={"/teacher"}>
              For teacher
            </Link>
            <Link className="text-optional  font-medium text-lg" href={""}>
              Contacts
            </Link>
          </nav>
        </div>
        <div className="my-8" style={{borderTop: '1px solid rgba(255, 255, 255, 0.20)'}}></div>
        <div className={`${styles.footer_copyright} flex flex-col mobile:flex-row justify-between items-center gap-2`}>
          <div className="text-sm">© 2024. All Rights Reserved.</div>
          <div>
            <Link className="text-sm" href={""}>
              Terms of Service 
            </Link>
            <span> | </span>
            <Link className="text-sm" href={""}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
