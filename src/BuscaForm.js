import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BuscaItem from './BuscaItem'
import { movies } from './data/movies';
import { Link } from 'react-router-dom';
import { NoEncryption } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

	form: {
		display: 'flex',
		justifyContent: 'space-between',

		'& > *': {
			margin: theme.spacing(1),
		},
	},

	titulo: {
		flexGrow: 1,
	},

	resultado: {
		display: 'flex',
		flexWrap: 'wrap',
		textDecoration: 'none',

		'& > *': {
			margin: theme.spacing(1),
		},
	},

}));

export default function BuscaForm() {
	const classes = useStyles();

	const [search, setSearch] = useState('');
	const [moviesFiltered, setMoviesFiltered] = useState(movies);

	useEffect(() => {
		if (search === '') {
			setMoviesFiltered(movies);
		}
		else {
			setMoviesFiltered(
				movies.filter(m => m.Title.toLowerCase().includes(search))
			);
		}
	}, [search])


	return (
		<>
			<form className={classes.form} noValidate autoComplete="off">
				<TextField
					className={classes.titulo}
					id="outlined-basic"
					label="Título"
					variant="outlined"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
				/>
				<Button variant="contained" color="primary">Buscar</Button>
			</form>

			<div className={classes.resultado}>
				{moviesFiltered.map(movie =>
					<Link to={`/single?Title=${movie.Title}&Poster=${movie.Poster}`}>
						<BuscaItem title={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster} />
					</Link>)
				}
			</div>
		</>
	);
}
