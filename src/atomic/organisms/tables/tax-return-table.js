import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box"

import { color } from "../../atoms/styles/colors";
import Circle from "../../atoms/icons/circle";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    ul {
        margin-top: 16px;

        li {

        }
    }
`

const TaxReturnTable = ({ className, content }) => {
  let listLen = 0;
  let list1Arr = [];
  let list2Arr = [];
  
//   content.map(col => (
//     listLen = col.list.length > listLen ? col.list.length : listLen
//   ))

//     for (var i=0; i < listLen; i++ ) {
//         <div>
 
//         </div>
//     }


  return (
    <Wrapper className={className}>
        {/* {content.map(col => (
            <div>
                <Whitebox>
                    <h4>{col.header}</h4>
                </Whitebox>
                <ul>
                    {col.list.map(item => (
                        <li>
                            <Whitebox>
                                <p>{item}</p>
                            </Whitebox>
                        </li>
                    ))}
                </ul>
            </div>
        ))} */}
    </Wrapper>
  )
}

export default TaxReturnTable;
