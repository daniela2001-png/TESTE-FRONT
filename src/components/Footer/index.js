import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer,
    FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterLink} from './FooterElements'

const Footer = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
                <FooterContainer>
                    <FooterWrap>
                        <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                            <FooterLinkTitle>Tempo</FooterLinkTitle>
                                <FooterLink to='/'>Como funciona</FooterLink>
                                <FooterLink to='/'>Testimonios</FooterLink>
                                <FooterLink to='/'>Politica de datos</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                            <FooterLinkTitle>Industria</FooterLinkTitle>
                                <FooterLink to='/'>Blog</FooterLink>
                                <FooterLink to='/'>Podcast</FooterLink>
                                <FooterLink to='/'>Tutoriales</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                            </FooterLinkItems>
                            </FooterLinksWrapper>
                        </FooterLinksContainer>
                    </FooterWrap>
                </FooterContainer>
        </div>
    )
}

export default Footer;