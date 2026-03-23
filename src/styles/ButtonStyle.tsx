import styled from "styled-components"

const Button = styled.button`
   padding: 0.5rem 1rem;
   background-color: #3b82f6;
   color: white;
   border-radius: 0.25rem;
   border: none;
   cursor: pointer;
   display: block;
   margin-top: 10px;
   
   &:hover {
      background-color: #2563eb;
   }
`

export { Button }