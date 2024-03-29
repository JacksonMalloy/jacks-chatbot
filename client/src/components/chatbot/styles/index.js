import styled from 'styled-components'

export const ChatContainer = styled.section`
  right: 0;
  bottom: 0;
  z-index: 100;
  height: 100vh;
  width: 50vw;
  position: fixed;
  border-radius: 3px;
  padding: 20px;
  font-size: 22px;
  overflow: none;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: ${(props) => props.theme.tabletMax}) {
    height: 100%;
    width: 100vw;
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    border-radius: 0px;
    background-color: ${(props) => props.theme.backgroundcolor};
    padding: 10px;
  }
`

export const ChatHeader = styled.header`
  padding: 10px 0px 30px 0px;
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: 6%;
  background-position: left;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.subprimary};

  span {
    padding-left: 55px;
    padding-top: 10px;
  }

  @media (max-width: 700px) {
    height: 100%;
    width: 100%;
    display: none;
  }
`

export const CloseChat = styled.span`
  cursor: pointer;
`

export const ChatMain = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 10px;

  &#style-4::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.primary};
  }

  &#style-4::-webkit-scrollbar {
    width: 5px;
    background-color: ${(props) => props.theme.primary};
  }

  &#style-4::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.subprimary};
    border: 2px solid ${(props) => props.theme.highlightcolor};
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
    padding-top: 30px;
  }
`

export const ChatFooter = styled.form`
  display: flex;
  position: relative;
  bottom: 0;

  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: 700px) {
    position: relative;
    width: 100%;
    font-size: 1rem;
    height: 60px;
  }
`

export const ChatInput = styled.input`
  margin-bottom: 0;
  border: none;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.subprimary};
  background-color: inherit;

  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: 700px) {
    padding-right: 15px;
    margin-left: 5px;
  }
`

export const ChatSubmit = styled.button`
  height: 40px;
  width: 110px;
  cursor: pointer;
  background-color: ${(props) => props.theme.highlightcolor};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.primary};
  box-shadow: 0px 0px 5px 1px inherit;

  &:disabled {
    box-shadow: 0px 0px 10px 5px ${(props) => props.theme.primary} inset;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.subprimary};
    opacity: 0.5;
    cursor: auto;
  }

  &:focus {
    display: none;
  }

  @media (max-width: 700px) {
    &:focus {
      display: block;
    }
  }
`

export const ConvLeftContainer = styled.div`
  text-align: left;
  padding-right: 30px;
  margin: ${(props) => (props.buttons ? '0.1rem 0 0 0.2rem' : 0)};

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    margin: ${(props) => (props.buttons ? '0.5rem 0 0.5rem 0.2rem' : 0)};
  }
`

export const ConvRightContainer = styled.div`
  text-align: right;
  padding-right: 60px;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    padding-right: 30px;
  }
`

export const ConvLeftBubble = styled.div`
  max-width: 350px;
  height: 100%;
  border-radius: ${(props) => (props.primary ? '20px' : '10px')};
  margin: 10px 0px;
  width: inherit;
  overflow-wrap: break-word;
  padding: 7px 20px;
  display: inline-block;
  font-size: 15px;
  word-spacing: 0.3px;
  color: ${(props) => props.theme.subprimary};
  text-align: start;
  border-bottom-left-radius: ${(props) => (props.primary ? '20px' : '4px')};
  background-color: ${(props) => props.theme.primary};

  border: ${(props) => (props.primary ? '1px solid #333333' : 'none')};
  border-color: ${(props) => (props.primary ? props.theme.subprimary : 'none')};
  cursor: ${(props) => (props.primary ? 'pointer' : 'auto')};

  @media (max-width: 700px) {
    margin: 2px;
    padding: 7px 15px;
  }
`

export const ConvRightBubble = styled.div`
  max-width: 350px;
  height: 100%;
  border-radius: 10px;
  margin: 10px 0px;
  width: inherit;
  overflow-wrap: break-word;
  padding: 7px 20px;
  display: inline-block;
  font-size: 15px;
  word-spacing: 0.3px;
  color: ${(props) => props.theme.primary};
  text-align: start;
  border-bottom-right-radius: 4px;
  background-color: ${(props) => props.theme.highlightcolor};

  @media (max-width: 700px) {
    margin: 5px;
    padding: 7px 15px;
  }
`
