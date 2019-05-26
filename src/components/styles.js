import styled, { createGlobalStyle, css } from 'styled-components';

const headerStyles = css`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
  }

  a {
    &,
    &:active,
    &:visited {
      color: #666;
    }

    &:hover {
      color: #999;
    }
  }
`;

export const H1 = styled.h1`
  ${headerStyles};
`;

export const H2 = styled.h2`
  ${headerStyles};
  margin: 0 0 20px 0;
	text-shadow: 0px 4px 0px rgba(206,189,132, .5);
`;

export const Paragraph = styled.p`
  font-size: 12px;
	line-height: 18px;
  margin: ${props => props.margin || "10px 0"};
  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth};
  `}

  ${props => props.textAlign && css`
    text-align: ${props.textAlign};
  `}
`;

export const Main = styled.main``;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 30px;
`;