import React from "react";

export default function CategorySidebar() {
  return (
    <>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline" />
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product02.png"
                  alt="clothes"
                  width={40}
                  height={30}
                  className="menu-title-img"
                />
                <p className="menu-title">Laptop</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shirt</p>
                  <data value={300} className="stock" title="Available Stock">
                    300
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">shorts &amp; jeans</p>
                  <data value={60} className="stock" title="Available Stock">
                    60
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">jacket</p>
                  <data value={50} className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">dress &amp; frock</p>
                  <data value={87} className="stock" title="Available Stock">
                    87
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product03.png"
                  alt="footwear"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Keyboards</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sports</p>
                  <data value={45} className="stock" title="Available Stock">
                    45
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Formal</p>
                  <data value={75} className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Casual</p>
                  <data value={35} className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Safety Shoes</p>
                  <data value={26} className="stock" title="Available Stock">
                    26
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product04.png"
                  alt="clothes"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Mouse</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Earrings</p>
                  <data value={46} className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Couple Rings</p>
                  <data value={73} className="stock" title="Available Stock">
                    73
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Necklace</p>
                  <data value={61} className="stock" title="Available Stock">
                    61
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product05.png"
                  alt="perfume"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Phones</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Clothes Perfume</p>
                  <data value={12} className="stock" title="Available Stock">
                    12 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Deodorant</p>
                  <data value={60} className="stock" title="Available Stock">
                    60 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">jacket</p>
                  <data value={50} className="stock" title="Available Stock">
                    50 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">dress &amp; frock</p>
                  <data value={87} className="stock" title="Available Stock">
                    87 pcs
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product06.png"
                  alt="cosmetics"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Television</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shampoo</p>
                  <data value={68} className="stock" title="Available Stock">
                    68
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunscreen</p>
                  <data value={46} className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Body Wash</p>
                  <data value={79} className="stock" title="Available Stock">
                    79
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Makeup Kit</p>
                  <data value={23} className="stock" title="Available Stock">
                    23
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product07.png"
                  alt="glasses"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Tablets</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunglasses</p>
                  <data value={50} className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Lenses</p>
                  <data value={48} className="stock" title="Available Stock">
                    48
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="../../../public/images/electronics/product08.png"
                  alt="bags"
                  className="menu-title-img"
                  width={40}
                  height={30}
                />
                <p className="menu-title">Routers</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shopping Bag</p>
                  <data value={62} className="stock" title="Available Stock">
                    62
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Gym Backpack</p>
                  <data value={35} className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Purse</p>
                  <data value={80} className="stock" title="Available Stock">
                    80
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Wallet</p>
                  <data value={75} className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
