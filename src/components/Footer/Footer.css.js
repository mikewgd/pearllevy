import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 30px;
  padding-top: 0;
  border-top: 1px solid #ccc;
  margin-top: 50px;
  text-align: center;
`;

export const OfficeAddress = styled.address`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 14px;
`;

export const EmailUs = styled.a`
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
`;

export const ReviewBtn = styled.a`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  max-width: 130px;
  text-align: center;
  margin: 16px auto;
  border: 1px solid #ccc;

  img {
    transform: translateX(3px);
  }
`;