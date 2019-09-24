// @flow strict

import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { H3, spriteIcon } from "@mobileFight/ui/atoms"
import type { StyledEmptyUI } from "@mobileFight/ui/styled-with-flow"
import weaponImage from "@assets/weapon.png"

const menuItems = [
  {
    title: "Чат",
    to: "/chat",
  },
]

const products = [
  {
    title: "Крепкая дубина",
    price: 100,
    lvl: 1,
  },
  {
    title: "Железный меч",
    price: 10,
    lvl: 3,
  },
  {
    title: "Секира",
    price: 10,
    lvl: 3,
  },
  {
    title: "Гнутый меч",
    price: 10,
    lvl: 3,
  },
  {
    title: "Щит самоделка",
    price: 10,
    lvl: 3,
  },
]

const ProductItem: StyledEmptyUI = styled.li`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 1px solid #b69c66;
  padding: 18px 10px;
  display: flex;
  align-items: flex-start;
  transition: 0.4s;
  background-color: ${(props) => props.theme.colors.primaryLight};
  margin-bottom: 5px;
  user-select: none;
  cursor: pointer;

  > img {
    width: 80px;
    height: 80px;
  }
`

const ProductBody = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 15px;
  flex: 1 1 auto;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 25px;

  > p {
    margin: 0;
  }
`

const Price = styled.p`
  display: flex;
  align-items: center;

  > [type="money"] {
    margin: 0 2px;
  }
`

export function ProductsPage() {
  const silverIcon = (
    <spriteIcon.component
      icon={spriteIcon.indexes.money.silver}
      type="money"
      inline
    />
  )

  return (
    <ArenaTemplate footer={<ArenaFooter menuItems={menuItems} isNested />}>
      <>
        <H3 center>-Оружие-</H3>
        <ProductBody>
          {products.map((product) => (
            <ProductItem key={product.title}>
              <img src={weaponImage} alt="*" />
              <Description>
                <p>{product.title}</p>
                <p>Уроовень: {product.lvl}</p>
                <Price>
                  Цена: {silverIcon} {product.lvl}
                </Price>
              </Description>
            </ProductItem>
          ))}
        </ProductBody>
      </>
    </ArenaTemplate>
  )
}