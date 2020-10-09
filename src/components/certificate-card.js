import React, { useState } from "react";
import styled from "styled-components";
import { color } from "./styles/colors";
import { shadow } from "./styles/shadows";
import Image from "./image";
import Label from "./form/label";
import Dropdown from "./form/dropdown";
import Button from "../atomic/molecules/buttons/button";

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
  }
`;

const CertificateCard = ({ className, headline, content, image, dropdownOnePlaceholder, dropdownOneOptions, dropdownTwoPlaceholder, dropdownTwoOptions, dropdownThreePlaceholder, dropdownThreeOptions, priceColumn, fields }) => {
    const [extraFee, setExtraFee] = useState(0);
    const [showExtraFee, setShowExtraFee] = useState(false);
    const [entityType, setEntityType] = useState('LLC');

    async function fetchData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'GET',
        });
        return response.json();
    }

    const getPrice = (option) => {
        if (!option) {
            setShowExtraFee(false);
            setExtraFee(0);
            return;
        }

        let state = option.value;
        let priceColumnField = `${priceColumn}${entityType}`;

        let endpoint = `https://api.incfile.com/api/v1/get-price-by-state/?state=${state}`;
        if (fields) {
            endpoint += `&_fields=${fields}`;
        }

        fetchData(endpoint)
        .then(data => {
            setShowExtraFee(true);
            setExtraFee(data[priceColumnField]);
        });
    }

    const entityOptions = [
        { value: `LLC`, label: `LLC` },
        { value: `Corp`, label: `Corporation` },
        { value: `Npc`, label: `Nonprofit` },
    ];

  return (
    <Wrapper className={className}>
      <h3>{headline}</h3>
      {image && <Image filename={image} />}
      {dropdownOnePlaceholder && (
        <Label className="label">
          Entity Type
          <Dropdown className="dropdown" placeholder={dropdownOnePlaceholder} options={entityOptions} onChange={option => setEntityType(option.value)} />
        </Label>
      )}
      {dropdownTwoPlaceholder && (
        <Label className="label">
          State
          <Dropdown className="dropdown" placeholder={dropdownTwoPlaceholder} options={dropdownTwoOptions} onChange={getPrice} />
        </Label>
      )}
      {dropdownThreePlaceholder && (
        <Label className="label">
          State of Formation
          <Dropdown className="dropdown" placeholder={dropdownThreePlaceholder} options={dropdownThreeOptions} />
        </Label>
      )}
      {content && (
        <>
          {content.price && <span className="price">${content.price}</span>}
          {showExtraFee && <span className="fee">+${extraFee} State Fee</span>}
        </>
      )}
      <Button content={content.button} theme="primary56" margin="40px 0 0 0" arrow />
    </Wrapper>
  );
};

export default CertificateCard;
