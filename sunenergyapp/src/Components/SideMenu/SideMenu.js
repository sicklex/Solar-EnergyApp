import { Link } from "react-router-dom";
import logo2 from "../../utils/logo2.png";

import {
  Sidebar,
  Container,
  GraphicIcon,
  UnityIcon,
  GearIcon,
  Content,
  Li,
} from "./styles";

function SideMenu({ title, children }) {
  return (
    <Container>
      <Sidebar>
        <ul>
          <img src={logo2} alt="DevInHouse Logo" />
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Li>
              <GraphicIcon className="graphic-icon" />
              <p>Dashboard</p>
            </Li>
          </Link>
          <Link to="/units" style={{ textDecoration: "none" }}>
            <Li>
              <UnityIcon className="unity-icon" />
              <p>Unidades</p>
            </Li>
          </Link>
          <Link to="/consumption" style={{ textDecoration: "none" }}>
            <Li>
              <GearIcon className="gear-icon" />
              <p>Cadastro de energia gerada</p>
            </Li>
          </Link>
        </ul>
      </Sidebar>
      <Content>
        <div>
          <h1>{title}</h1>
        </div>
        {children}
      </Content>
    </Container>
  );
}

export default SideMenu;

// pass the SideMenu as children to the main container
