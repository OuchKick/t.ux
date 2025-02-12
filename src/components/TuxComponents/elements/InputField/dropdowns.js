import React, { Component } from "react";
import styled from "styled-components";
import { dark_grey, medium_grey, pop_reg, pop_semiBold, tux_primart } from "../../utilities";

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  width: 280px;
  height: 48px;
  &:hover {
      border-radius: 10px 10px 0px 0px;
  }
`;

export const StyledLi = styled.li`
  text-align: center;
`;


export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  width: 280px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  width: 280px;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 14px;
  &:hover {
    background-color: rgba(120, 214, 218, 0.15);
    font: ${pop_semiBold};
    font-size: 14px;
    line-height: 21px;
    color: ${tux_primart} !important;
    border: 1px solid ${dark_grey};
  }
`;

export const DropDownArrow = styled.img`
  width: 13.98px;
  height: 8.9px;
  margin: 20px;
  position: absolute;
  margin-left: -30px;
  top: 19px;  
`;

export const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  font: ${pop_reg};
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  border-radius: 10px;
  padding: 20px 0 0 12px;
  border: 1px solid ${medium_grey};
  &:hover {
      border-radius: 10px 10px 0px 0px;
  }
`;

export const Label = styled.label`
  font: ${pop_reg};
  font-size: 10px;
  line-height: 21px;
  color: ${medium_grey};
  position: absolute;
  pointer-events: none;
  margin-left: 12px;
  margin-bottom: 13px;
  left: 12px;
  top: 15px;
  transition: 0.3s ease all;
  `;

class Menu extends Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
      <StyledUl>
        <DropDownLi>
          <Input placeholder="Input Text"/>
          <Label>Label</Label>
            <DropDownArrow src="/images/dropdown.png"/>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("MenuOption1")}>Menu Option 1</SubA>
            <SubA onClick={() => this.handleClick("MenuOption2")}>Menu Option 2</SubA>
            <SubA onClick={() => this.handleClick("MenuOption3")}>Menu Option 3</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

export default Menu;