import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  Container,
  Header,
  UseWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UseWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/56605085?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Carlos</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UseWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
            type="up"
            title="Entradas" 
            amount="R$17.400,00" 
            lastTransaction="Última entrada dia 13 de abril" 
        />
        <HighlightCard 
            type="down"
            title="Saídas" 
            amount="R$7.500,00" 
            lastTransaction="Última saída 12 de dezembro" 
        />
        <HighlightCard 
            type="total"
            title="Total" 
            amount="R$10.500,00" 
            lastTransaction="Total" 
        />

      </HighlightCards>
    </Container>
  );
}
