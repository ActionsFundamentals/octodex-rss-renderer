import {Box, Grid, Link, Typography} from "@material-ui/core";
import packageJson from '../package.json';

export default function OctodexFooter() {
  return (
    <Box className="footer" width={"100%"}>
      <Grid
        container
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item>
          <Typography>
            Version: {packageJson.version}
          </Typography>
        </Grid>

        <Grid item>
          <Link href={"https://nextjs.org/"}>
            Powered by Vercel Next.js
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}