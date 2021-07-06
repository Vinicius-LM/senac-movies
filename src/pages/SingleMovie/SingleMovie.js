import React from 'react';
import { useQuery } from '../../hooks';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const SingleMovie = () => {
    const query = useQuery();

    return (
        <div>
            <h1>{query.get('Title')}</h1>
            <img src={query.get('Poster')} />
            <Button
                variant="outlined"
                color="primary">
                <Link to="/">Voltar</Link>
            </Button>
        </div >
    )
}

export default SingleMovie;