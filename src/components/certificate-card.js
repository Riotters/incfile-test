import React from "react"
import styled from "styled-components"
import { color } from "./styles/colors"
import { shadow } from "./styles/shadows"
import Image from "./image"
import Label from "./form/label"
import Dropdown from "./form/dropdown"
import Button from "./button"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 470px;
    padding: 64px 40px 48px;
    position: relative;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 5px;

    h3 {
        text-align: center;
        max-width: 320px;
        margin-bottom: 32px;
    }
    .gatsby-image-wrapper {
        height: 152px;
        width: 152px;
        margin: 0 auto 24px;
    }

    label {
        width: 100%;
    }

    .label {
        margin-bottom: 24px;
    }

    .dropdown {
        width: 100%;
    }

    .price {
        font-family: MarkPro, sans-serif;
        font-size: 48px;
        line-height: 56px;
        color: ${color.black};
        margin-bottom: 8px;
    }

    .fee {
        font-family: Avenir, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey2};
        margin-bottom: 40px;
    }
`

const CertificateCard = ({ className, headline, price, image, dropdownOnePlaceholder, dropdownOneOptions, dropdownTwoPlaceholder, dropdownTwoOptions }) => {
  return (
    <Wrapper className={className}>
        <h3>{headline}</h3>
        {image && (
        <Image filename="clock" />
        )}
        {dropdownOnePlaceholder && (
            <Label className="label">
                Entity Type
            <Dropdown className="dropdown" placeholder={dropdownOnePlaceholder} options={dropdownOneOptions} />
            </Label>
        )}
        {dropdownTwoPlaceholder && (
            <Label className="label">
                State
            <Dropdown className="dropdown" placeholder={dropdownTwoPlaceholder} options={dropdownTwoOptions}/>
            </Label>
        )}
        <span className="price">${price}</span>
        <span className="fee">+ $10 State Fee</span>
        <Button theme="primary56" arrow>Order now</Button>
    </Wrapper>
  )
}

export default CertificateCard
