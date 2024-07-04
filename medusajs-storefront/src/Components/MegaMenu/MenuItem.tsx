import React, { useState, ReactNode } from 'react';
import styles from './MegaMenu.module.css';
import classnames from 'classnames'
import img from '../../../public/assets/nf2535.png'
import Image from 'next/image';
import FadeDown from 'Components/Fade-effect/Down/down';
interface MenuItemProps {
  title: string;
  children: ReactNode;
  showMenu: boolean
  image: string[] | any
}

const MenuItem: React.FC<MenuItemProps> = ({ title, children, showMenu, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [left, setLeft] = useState(0)

  return (
    <li
      className={styles.menuItem}
      onMouseEnter={(event) => {
        setIsOpen(true)
        const button: any = event.target;
        const rect: any = button?.getBoundingClientRect();
        setLeft(rect.left)
      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className={`${styles.Main_btn}  text-[#fff] uppercase`}>
        <div className='poppins font-[14px]'>
          {title}
        </div>
      </a>
      {isOpen && showMenu && <div className={`${styles.megaMenu} bg-[transparent]`} style={{
        left: `-${left}px`
      }}>
        <FadeDown startAnimation>
          <div className={`${styles.container_menu} bg-[#fff] w-full flex justify-center items-start gap-[40px]`}>
            {children}
            <div className='flex gap-[40px]'>
              {image.length > 0 ? image.map((item: any, index: number) => {

                return (
                  <>
                    <div key={index}>
                      <Image src={item} alt="Description" width={180} height={100} />
                    </div>
                  </>
                )
              }) : ""}
            </div>
          </div>
        </FadeDown>
      </div>}
    </li>
  );
};

export default MenuItem;
