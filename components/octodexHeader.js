import Image from "next/image";
import {Box, Grid, Typography} from "@material-ui/core";

const iconSize = 64;

export default function OctodexHeader() {
  return (
    <Box className="header">
      <Grid container spacing={2}>
        <Grid item>
          <Image src="/GitHub-Mark-64px.png" width={iconSize} height={iconSize} alt={"GitHub Mark"}/>
        </Grid>
        <Grid item>
          <Typography variant="h2" noWrap>
            GitHub Octodex RSS Feed
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}