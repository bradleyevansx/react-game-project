import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)}></Image>
    <CardBody>
      <HStack marginBottom={3} justifyContent={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
      <Heading justifyContent={"center"} textAlign={"center"} fontSize={"2xl"}>
        {game.name} <Emoji rating={game.rating_top}></Emoji>
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
