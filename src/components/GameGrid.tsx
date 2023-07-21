import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      padding={"10px"}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading &&
        data.map((data) => (
          <GameCardContainer key={data.id}>
            <GameCard key={data.id} game={data}></GameCard>
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
