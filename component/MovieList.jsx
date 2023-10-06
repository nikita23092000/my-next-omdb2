import {Image, Card} from "semantic-ui-react";

const MovieList = ({movies})=>{
    <Card.Group>
        {movies.map((movie)=>
        <Card>
            <Card.Content>
                <Card.Header>{movie.Title}</Card.Header>
                <Card.Description>{movie.Year}</Card.Description>
                {movie.Poster !== "N/A" ?(
                    <Image src={movie.Poster} size="medium"/>
                ): (
                    <Image src="chess.jpg" size="medium"/>
                )}
                <Card.Meta>{movie.Type}</Card.Meta>
            </Card.Content>
        </Card>
        )}
    </Card.Group>
}