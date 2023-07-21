import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
              console.log(genre);
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2.5}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelecteSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
