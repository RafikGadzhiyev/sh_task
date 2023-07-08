import {SideNavigation} from "./components/SideNavigation.tsx";
import {SideProfile} from "./components/SideProfile.tsx";
import styled from "@emotion/styled";
import {MainPage} from "./components/MainPage.tsx";

const MainContainer = styled.div`
  display: flex;
    justify-content: space-between;
`

function App() {

  return (
    <MainContainer>
        <SideNavigation/>
        <MainPage/>
        <SideProfile/>
    </MainContainer>
  )
}

export default App
