"use client";

import React from 'react';
import MenuItem from './MenuItem';
import styles from './MegaMenu.module.css';
import { StaticImageData } from 'next/image';
import LocalizedClientLink from '@modules/common/components/localized-client-link';

interface SubCategory {
    name: string;
    handle: string;
}

interface Category {
    main_category: string;
    sub_categories: SubCategory[];
    image: StaticImageData[] | string[] | any
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
                            <h3 className='poppins text-[15px] font-[600] font-[#000] mb-[10px]'>{menu.main_category}</h3>
                            {menu.sub_categories && menu.sub_categories.map((subMenu, subIndex) => (
                                <div key={subIndex} className={styles.column}>
                                    <ul>
                                        <li><LocalizedClientLink
                                            href={`/collections/${subMenu.handle}`}
                                            className='poppins font-[400]'>{subMenu.name}</LocalizedClientLink></li>
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
