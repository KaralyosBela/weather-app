import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material'

const cards = [1, 2, 3];

export const Home = () => {
  return (
    <Container>
      <Box>
        <Paper elevation={2} sx={{ py: 6, borderRadius: 2 }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{
              textAlign: 'center'
            }}>
            Get the latest weather information here
          </Typography>
          <Typography
            variant='body1'
            sx={{
              textAlign: {
                xs: 'justify',
                md: 'center'
              },
              px: 2,
            }}>
            Get the latest weather information here,
            Get the latest weather information here,
            Get the latest weather information here,
            Get the latest weather information here,
            Get the latest weather information here,
            Get the latest weather information here
          </Typography>
          <Stack direction='row' gap={1} justifyContent='center' sx={{ pt: 2 }}>
            <Button variant='contained'>About the site</Button>
            <Button variant='contained'>Go see the weather</Button>
          </Stack>
        </Paper>
      </Box>

      <Box sx={{mt: 2}}>
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 12 }}>
        {cards.map((card, index) => {
          return (
            <Grid item 
            xs={4} 
            key={index}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVvQxjPC6tOehqoCAYpe9TiUIgUm6SCLMkw&usqp=CAU"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      </Box>

    </Container>

  )
}
