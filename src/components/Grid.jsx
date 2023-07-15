import GridItem from './GridItem'
import '../styles/Grid.css'


function Grid({ data }) {
  return (
    <section className="grid">
      { data.map((apartement) => 
        <GridItem 
          key={ apartement.id }
          apartment= { apartement }
        />) }
    </section>
  )
}

export default Grid
