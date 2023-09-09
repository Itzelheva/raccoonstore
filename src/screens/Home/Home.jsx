import { View, FlatList } from 'react-native'
import styles from "./Home.style"
import dataCategories from "../../data/dataCategories"
import { CategoryItem } from "./components"
import { Header } from '../../components'

const Home = () => {
  return (

    <View style={styles.container}>
      <Header title={"Home"} />
      <FlatList 
      data={dataCategories}
      keyExtractor={category => category}
      renderItem={({item}) => <CategoryItem category={item} />} //category={item} es cada uno de los items de la lista de categoria
      />
    </View>

  )
}

export default Home






{/* La screen home, será la pagina principal de la app donde se va a encontrar el menú principal 
y las opciones de navegación. Aquí ya se está usando el componente genérico de Header para poner
el nombre del screen */}

{/* Componente categories tiene un flatList para renderizar la lista de productos por categorias
- data: viene del array de objeto con la lista de productos por categorias
- rednderItem: renderización (lista) en el componente <categoryItem />
- keyExtractor: de cada una de las categorias que se esten iterando, esa misma categoria es el key*/}