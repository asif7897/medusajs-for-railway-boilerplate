import React, { useState, ReactNode } from 'react';
import styles from './MegaMenu.module.css';
import classnames from 'classnames'
interface MenuItemProps {
  title: string;
  children: ReactNode;
  showMenu: boolean
  image: string[]
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
    // onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className={`${styles.Main_btn}  text-[#fff] uppercase`}>
        <div className='poppins font-[14px]'>
          {title}
        </div>
      </a>
      {isOpen && showMenu && <div className={`${styles.megaMenu} bg-[transparent]`} style={{
        left: `-${left}px`
      }}>
        <div className={`${styles.container_menu} bg-[#fff] w-full flex justify-center items-center`}>
          {children}
          <div>
            {image.length > 0 ? image.map((item, index) => {
              console.log(item ,'itemitem')
              return (
                <>
                  <div>
                    <img src={item} />
                  </div>
                </>
              )
            }) : ""}
          </div>
        </div>
      </div>}
    </li>
  );
};

export default MenuItem;
