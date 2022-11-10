import React from "react";
import links from "./Links";
import NavLinks from "./NavLinks";
import { Event, LinkWrapper, NavbarWrapper, NavContainer, NavTitle } from "./style";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <div className="container" >
                <NavContainer>
                    <div>
                        <NavTitle>New <Event>Event</Event></NavTitle>
                    </div>
                    <LinkWrapper>
                        {
                            links.map((link , index)=>{
                                return (
                                <NavLinks 
                                navLink={link.navLink} 
                                navText={link.navText} 
                                key={index} />
                                );
                            })
                        }
                    </LinkWrapper>
                </NavContainer>
            </div>
        </NavbarWrapper>
    );
}
