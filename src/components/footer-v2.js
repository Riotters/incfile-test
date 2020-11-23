import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color } from "../atomic/atoms/styles/colors";
import Container from "../atomic/container";
import LogoSVG from "../images/logo.inline.svg";
import ArrowSVG from "../images/arrow.inline.svg";
import FacebookSVG from "../images/facebook.inline.svg";
import YoutubeSVG from "../images/youtube.inline.svg";
import LinkedinSVG from "../images/linkedin.inline.svg";
import Button from "../atomic/molecules/buttons/button-action";
import List from "../atomic/organisms/accordion/footer-single";
import Curve from "../atomic/atoms/icons/curve";
import CurveSVG from "../images/green-curve.inline.svg";
import { validEmail } from "../helpers/form-validate";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { postHSForm } from '../api/Api';

//Texts
import { newsletter, footer } from "../static/footer";


const Wrapper = styled.div`
  padding-top: 56px;
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  
  @media (min-width: 768px) and (max-width: 991px) { 
    p:first-child, input {
        margin-bottom: 0;
        margin-right: 15px;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  height: 24px;
  margin-bottom: 32px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const NewsletterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  p {
    color: #1e1e1e;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;

    @media (min-width: 992px) {
      margin-bottom: 0;
    }

    span {
      color: ${color.grey2};
      font-family: Avenir, sans-serif;
      padding-left: 5px;
    }
  }
`;

const Label = styled.label`
  z-index: -1;
  color: ${color.white};
  position: absolute;
`;

const Newsletter = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 24px;
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  margin-right: 8px;
  padding: 6px 24px;
  color: #1e1e1e;
  font-family: Avenir, sans-serif;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  transition: border-color 0.3s ease;

  @media (min-width: 768px) {
    min-width: 200px;
    max-width: 300px
  }

  @media (min-width: 992px) {
    width: 246px;
    margin-top: 0;
    margin-bottom: 0;
  }

  &::placeholder {
    color: #757575;
  }

  &:hover,
  &:focus {
    border-color: #fd8550;
  }
  &.invalid {
    border-color: ${color.orange1};
}
`;

const Arrow = styled.div`
  display: none;
  width: 12px;
  margin: 10px 0;

  @media (min-width: 992px) {
    display: block;
    margin: 0 14px;
  }

  svg {
    transform: rotate(0);

    path {
      fill: #a4eed0;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 80px;
  border-bottom: 1px solid rgba(244, 244, 244, 0.9);
  position: relative;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Copyright = styled.p`
  color: #4f4f4f;
  font-family: Avenir, sans-serif;
  font-size: 16px;
  line-height: 19px;
  width: 290px;
  text-align: left;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 0;
  }
`;

const Social = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 0;
  }

  li {
    height: 32px;
    width: 32px;
    margin-left: 12px;

    a {
      height: 100%;
      width: 100%;
    }
  }
`;

const Footer = () => {
    const { register, errors, reset, handleSubmit, formState } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const [submittedData, setSubmittedData] = React.useState({});

    const signupNewsletter = data => {
        const formData = new FormData();
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
        formData.set('hs_form_id', '9b0b3b59-46d3-45c2-aae0-dc4897883b3d');
        formData.set('lifecyclestage', 'subscriber');

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });

        postHSForm(formData)
            .then(json => {
                setSubmittedData(data);
            });
        
        // Fire GA Tracking
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'newsletterSignupFormSubmission'
            });
        }
        
        Swal.fire(
            'Done!',
            'Thank you for submission',
            'success'
        );
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
      }, [isSubmitSuccessful, submittedData, reset]);

    return (
        <Wrapper>
            <Container>
                <Top>
                    <Logo>
                        <LogoSVG />
                    </Logo>
                    <NewsletterWrapper onSubmit={handleSubmit(signupNewsletter)}>
                        <p>
                            {newsletter.text}
                            <span>({newsletter.bracket})</span>
                        </p>
                        <Arrow>
                            <ArrowSVG />
                        </Arrow>
                        <Label for="newsletter">Newsletter</Label>
                        <Newsletter
                            className={errors.email ? 'invalid' : ''}
                            placeholder="Your E-mail"
                            name="email"
                            type="text"
                            ref={register({
                                required: true,
                                validate: value => validEmail(value) || `Email is not valid`
                            })}
                        />
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            content={newsletter.button}
                            theme="secondary40"
                            arrow="yes"
                            right="14px"
                            margin="0 auto 0 0"
                        />
                    </NewsletterWrapper>
                </Top>
                <Navigation>
                    <Curve right="-30" bottom="150">
                        <CurveSVG />
                    </Curve>
                    {footer.items.map((item) => (
                        <List content={item} />
                    ))}
                </Navigation>
                <Bot>
                    <Copyright>
                        © {new Date().getFullYear()}.{` `}Incfile.com{` `}All Rights Reserved.
          </Copyright>
                    <Social>
                        <li>
                            <a href="https://facebook.com/incfile" title="Facebook">
                                <FacebookSVG />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC-hfd-zO8SSMpOgLNYwLAXA" title="YouTube">
                                <YoutubeSVG />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/incfile-com/" title="LinkedIn">
                                <LinkedinSVG />
                            </a>
                        </li>
                    </Social>
                </Bot>
            </Container>
        </Wrapper>
    );
};

export default Footer;
