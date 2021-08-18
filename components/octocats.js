import Octocat from "./octocat";
import {Grid} from "@material-ui/core";

export default function Octocats({octocats}) {

  return (
    <Grid
      container
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center">

      {octocats.map((node) => (
        <Octocat
          key={node.name}
          name={node.name}
          image={node.image}
          snippet={node.snippet}
          url={node.url}
          published={node.published}
        />
      ))}
    </Grid>
  )
}