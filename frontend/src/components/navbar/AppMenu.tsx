import { NavItem } from '@/types/menu'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

type AppMenuProps = {
  menuItems: NavItem[]
  submenuClassName?: string
  labelOneClassName?: string
  labelTwoClassName?: string
  buttonThemeClassName?: string
  buttonThemeTwoClassName?: string
  buttonContainerClass?: string
  icon?: React.ReactNode
}

const AppMenu = ({
  menuItems,
  submenuClassName = '',
  labelOneClassName = '',
  labelTwoClassName = '',
  buttonThemeClassName = '',
  icon = '',
  buttonContainerClass = '',
}: AppMenuProps) => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index} className={item.children ? 'has-dropdown' : ''}>
          <Link to={item.url || '#'}>
            {item.label}
            <span>{(item.children || item.megaMenuItems) && <FaAngleDown size={15} />}</span>
          </Link>

          {item.megaMenuItems && (
            <div className="vl-mega-menu">
              <div className="vl-home-menu">
                <Row className="gx-4 row-cols-1 row-cols-lg-4">
                  {item.megaMenuItems.map((menu, menuIndex) => (
                    <Col key={menuIndex} className="mb-25">
                      <div className="vl-home-thumb fix p-relative z-index-1">
                        <img className="w-100" src={menu.image} alt="" />
                        <div className={buttonContainerClass}>
                          {menu.items.map((btn, btnIndex) => (
                            <div key={btnIndex} className={btn.label.toLowerCase().includes('multi') ? labelOneClassName : labelTwoClassName}>
                              <Link to={btn.url} className={buttonThemeClassName}>
                                {btn.label}
                                <span>{icon}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          )}

          {item.children && (
            <ul className={submenuClassName}>
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>
                  <a href={child.url}>{child.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default AppMenu
