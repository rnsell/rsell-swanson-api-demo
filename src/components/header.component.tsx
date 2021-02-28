import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getThemeValue, spacing, THEME_PROPS } from "../sc-utils";

export const StyledMenu = styled(Row)`
  margin: ${spacing(1)};
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};
  background-color: white;
  border: 1px solid ${getThemeValue(THEME_PROPS.PRIMARY_BORDER_COLOR)};
  line-height: 32px;
`;

export const Title = styled.h3`
  padding-left: ${spacing(2)};
  padding-right: ${spacing(1)};
  margin: 0;
`;

export const Subtitle = styled.span`
  padding-left: ${spacing(2)};
`;

export const TotalVotes = styled(Row)``;

interface HeaderProps {
  votes: number;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { votes } = props;

  return (
    <StyledMenu data-testid="header__menu">
      <Col xs={16}>
        <Row>
          <Title data-testid="header__title">Ron Swanson Quote Voter</Title>
          <Subtitle data-testid="header__sub-title">
            "Vote for your favorite quote!"
          </Subtitle>
        </Row>
      </Col>
      <Col xs={8}>
        <TotalVotes justify="end" data-testid="header__total_votes">
          Total Votes: {votes}
        </TotalVotes>
      </Col>
    </StyledMenu>
  );
};
