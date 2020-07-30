import React from "react";
import styled from "styled-components";
import BlueBox from "../../atoms/boxes/blue-box"
import Image from "../../atoms/image/image"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    
    .background {
        padding: 24px 32px 32px 128px;
        position: relative;

        .gatsby-image-wrapper {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            position: absolute !important;
            top: 24px;
            left: 24px;
        }

        h4 {
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            line-height: 24px;
        }
    }
`

const Avatar = styled.span``;

const ArticleFooter = ({ className }) => {
  return (
    <Wrapper className={className}>
        <BlueBox className="background">
            <Image className="avatar" filename="mattweik"/>
            <h4>Matt Weik</h4>
             <p>
                Matt Weik is the Founder/Owner of Weik Fitness, LLC and is a well-respected fitness expert/author with a global following. 
                He’s a certified strength and conditioning specialist, personal trainer, and sports nutritionist. 
                His work has been featured in over 85 fitness magazines and over 1,500 websites. You can contact Matt via www.weikfitness.com or on his social channels found on his website.
            </p>
        </BlueBox>
    </Wrapper>
  )
}

export default ArticleFooter;
