import styled from 'styled-components';

export const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 2px;
  width: 35%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderShell = styled.header`
   position: fixed;
   top: 0;
   z-index: 50;
   width: 100%;
   border-radius: 0 0 1rem 1rem;
   backdrop-filter: blur(12px);
   -webkit-backdrop-filter: blur(12px);
`;

export const AppShell = styled.div`
   min-height: 100vh;
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.text};
`;

export const HoverLift = styled.div`
   transition: transform 300ms ease;

   &:hover {
      transform: translateY(-3px);
   }
`;
