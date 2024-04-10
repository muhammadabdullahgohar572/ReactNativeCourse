import { FlatList, Text, StyleSheet, View, ScrollView } from "react-native";

const Scroll = () => {
  const movies = [
    {
      name: "The Shawshank ",
      year: 1994,
      creator: "Frank Darabont",
      genre: "Drama",
    },
    {
      name: "The Godfather",
      year: 1972,
      creator: "Francis Ford Coppola",
      genre: "Crime",
    },
    {
      name: "The Dark Knight",
      year: 2008,
      creator: "Christopher Nolan",
      genre: "Action",
    },
    {
      name: "Pulp Fiction",
      year: 1994,
      creator: "Quentin Tarantino",
      genre: "Crime",
    },
    {
      name: "Forrest Gump",
      year: 1994,
      creator: "Robert Zemeckis",
      genre: "Drama",
    },
    {
      name: "Inception",
      year: 2010,
      creator: "Christopher Nolan",
      genre: "Sci-Fi",
    },
    {
      name: "The Matrix",
      year: 1999,
      creator: "The Wachowskis",
      genre: "Action",
    },
    {
      name: "Interstellar",
      year: 2014,
      creator: "Christopher Nolan",
      genre: "Sci-Fi",
    },
    {
      name: "The Silence of the Lambs",
      year: 1991,
      creator: "Jonathan Demme",
      genre: "Crime",
    },
    {
      name: "Goodfellas",
      year: 1990,
      creator: "Martin Scorsese",
      genre: "Crime",
    },
    {
      name: "Schindler's List",
      year: 1993,
      creator: "Steven Spielberg",
      genre: "Biography",
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      year: 2003,
      creator: "Peter Jackson",
      genre: "Fantasy",
    },
    {
      name: "The Departed",
      year: 2006,
      creator: "Martin Scorsese",
      genre: "Crime",
    },
    {
      name: "Gladiator",
      year: 2000,
      creator: "Ridley Scott",
      genre: "Action",
    },
    {
      name: "Saving Private Ryan",
      year: 1998,
      creator: "Steven Spielberg",
      genre: "War",
    },
    {
      name: "The Green Mile",
      year: 1999,
      creator: "Frank Darabont",
      genre: "Drama",
    },
    {
      name: "The Prestige",
      year: 2006,
      creator: "Christopher Nolan",
      genre: "Mystery",
    },
    {
      name: "American History X",
      year: 1998,
      creator: "Tony Kaye",
      genre: "Drama",
    },
    {
      name: "The Usual Suspects",
      year: 1995,
      creator: "Bryan Singer",
      genre: "Crime",
    },
    {
      name: "Se7en",
      year: 1995,
      creator: "David Fincher",
      genre: "Crime",
    },
    {
      name: "The Lion King",
      year: 1994,
      creator: "Roger Allers, Rob Minkoff",
      genre: "Animation",
    },
  ];

  return (
    <>
      <Text style={{ fontSize: 30, fontWeight: "400", margin: 40 }}>
        Top 10 Serores Netfilx
      </Text>
      <ScrollView scrollIndicatorInsets={true}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style.listStyle}
          keyExtractor={(key) => {
            return key.name;
          }}
          data={movies}
          renderItem={({ item }) => {
            return (
              <>
                <View style={style.Viewstyle}>
                  <Text style={style.textstyle}> Name:{item.name}</Text>
                  <Text style={style.textstyle}> Genre:{item.genre}</Text>
                  <Text style={style.textstyle}> Creator:{item.creator}</Text>
                  <Text style={style.textstyle}> Year:{item.year}</Text>
                </View>
              </>
            );
          }}
        />
      </ScrollView>
    </>
  );
};
const style = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 25,
  },
  textstyle: {
    color: "white",
    backgroundColor: "#009688",
    color: "white",
    fontSize: 20,
    padding: 2,
  },
  Viewstyle: {
    margin: 20,
    padding: 5,
  },
});
export default Scroll;
