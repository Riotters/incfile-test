import React, {useState} from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import ArrowSVG from "../../images/arrow.inline.svg"

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;
  border: 0;
  font-family: Avenir, sans-serif;
  font-size: 20px;
  line-height: 24px; 
  color: ${color.blue1};
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: ${color.orange1};

    svg {
      path {
        fill: ${color.orange1};
      }
    }
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: ${color.blue1};
    }
  }
`

const ShowUncompleted = ({ show, className, onStackItems }) => {
    let [stacked, setStacked] = useState(false);
    return (
        <Wrapper className={className} onClick={() => {
            var newValue = !stacked;
            onStackItems(newValue);
            setStacked(newValue);
        }}>
            {show && (
                <>
                    <Arrow>
                        <ArrowSVG/>
                    </Arrow>
                    {stacked ? 'Show More' : 'Show Less'}
                </>
            )}
        </Wrapper>
    )
}
export default ShowUncompleted
