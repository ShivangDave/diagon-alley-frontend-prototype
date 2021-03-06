import { useState, useEffect } from 'react'
import { Menu, Dropdown, Image, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = ({ setLoginView, itemCount }) => {

  const [ activeItem, handleItemClick ] = useState('')

  return (
    <>
      <Menu.Menu>
        <Menu.Item header>
          <Image
            src={'https://i.pinimg.com/originals/12/70/6b/12706b698669dfc5ebef671e6e65e69b.jpg'}
              alt={''} href={'/'}/>
        </Menu.Item>
      </Menu.Menu>

      <Menu secondary className="menu-container">
        <Dropdown text='All Departments' pointing className='link item'
            onClick={() => handleItemClick('All Departments')}
        >
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text='Clothing'>
                <Dropdown.Menu>
                  <Dropdown.Header>Mens</Dropdown.Header>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Womens</Dropdown.Header>
                  <Dropdown.Item>Dresses</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Item>Bags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item
            name='Cart'
            active={activeItem === 'cart'}
            onClick={() => handleItemClick('cart')}
            as={Link}
            to={'/cart'}
          >
            <Icon name={'cart'} />
            <Label color='black' floating>
              {
                itemCount
                ? itemCount : 0
              }
            </Label>
          </Menu.Item>
          <Menu.Item
            name='Alohomora'
            active={activeItem === 'Alohomora'}
            onClick={() => {
              handleItemClick('Alohomora')
              setLoginView(true)
            }}
          />
        </Menu.Menu>

      </Menu>
    </>
  )
}

export default Header;
