
import React from 'react';

import {render,screen} from "@testing-library/react";

import Hero from "../landing_page/home/Hero";

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/images/homeHero.png");

    })
})