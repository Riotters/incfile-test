  
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from './styles/colors';

const Pagination = ({ totalRecords, perPage, setCurrentPage }) => {

    //Set number of pages
    const pags = Math.ceil(totalRecords / perPage);      
    const numberOfPages = []
    for (let i = 1; i <= pags; i++) {
        numberOfPages.push(i);
    }

    // Current active button number
    const [currentButton, setCurrentButton] = useState(1);

    // Array of buttons what we see on the page
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages;
        }

        else if (currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3];
        }

        else if (currentButton === 3) {
            const sliced = numberOfPages.slice(1, 4);
            tempNumberOfPages = [...sliced];
        }

        else if (currentButton > 3 && currentButton < numberOfPages.length) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton - 1);
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
            tempNumberOfPages = ([sliced1, currentButton, ...sliced2]);
        }
    
        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentPage(currentButton);
    }, [currentButton]);


    return (
        <PaginationWrapper>
            <a
                href="#"
                className={`${currentButton === 1 ? 'hide' : ''}`}
                onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
            >{`<`}</a>

            {arrOfCurrButtons.map(((item, index) => {
                return <a
                    href="#"
                    key={index}
                    className={`${currentButton === item ? 'disabled active' : ''}`}
                    onClick={() => setCurrentButton(item)}
                >
                    {item}
                </a>
            }))}

            <a
                href="#"
                className={`${currentButton === numberOfPages.length ? 'hide' : ''}`}
                onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
            >{`>`}</a>
        </PaginationWrapper>
    );
}


export default Pagination;

const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-right: 15px;

    a{
        width: 42px;
        height: 42px;
        padding: 24px;
        font-family: 'Avenir';
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #4e4e4e;
        background: ${color.grey5};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: all  0.3s ease-out;

        &.active, &:hover{
            background-color: #5089fd;
            color: #fff;
        }

        &.disabled{
            pointer-events: none;
            cursor: default;
        }

        &.hide{
            display: none;
        }
    }
`