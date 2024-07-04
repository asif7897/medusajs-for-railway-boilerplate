"use client";

import React from 'react';
import MenuItem from './MenuItem';
import styles from './MegaMenu.module.css';

interface SubCategory {
    name: string;
    handle: string;
}

interface Category {
    main_category: string;
    sub_categories: SubCategory[];
    image: string[]
}

interface Props {
    Arr: Category[];
}

// MegaMenu component
const MegaMenu: React.FC<Props> = ({ Arr }) => {

    return (
        <nav className={`${styles.navbar} b-[transparent]`}>
            <ul className={styles.menu}>
                {Arr.map((menu, index) => (
                    <MenuItem key={index} title={menu.main_category} showMenu={menu.sub_categories.length > 0} image={menu.image} >
                        <div className={`${styles.megaMenuContent} flex flex-col poppins`}>
                            {menu.sub_categories && menu.sub_categories.map((subMenu, subIndex) => (
                                <div key={subIndex} className={styles.column}>
                                    {/* <h3 className='poppins'>{subMenu.name}</h3> */}
                                    <ul>
                                        <li><a href={`#${subMenu.handle}`} className='poppins font-[400]'>{subMenu.name}</a></li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </MenuItem>
                ))}
            </ul>

        </nav>
    );
};

export default MegaMenu;
