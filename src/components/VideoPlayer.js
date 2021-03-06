// dependencies
import React from 'react';
import { Flex, Box, AspectRatio, Image, Button, Text, HStack } from '@chakra-ui/react';

// components
// import Button from "./Button";

// albums with videos
const albumWithVideos = [
	{
		title: 'Songs With Videos',
		songs: [
			{
				title: 'Rap N',
				link: 'https://www.youtube.com/embed/_4LsQ_kdLh0',
				id: 1
			},
			{
				title: 'Victory',
				link: 'https://www.youtube.com/embed/iYC9iMTC5QM',
				id: 2
			},
			{
				title: 'Last',
				link: 'https://www.youtube.com/embed/QM9xgHibvzM',
				id: 3
			},
			{
				title: 'Status',
				link: 'https://www.youtube.com/embed/LAJkL4dZpzk',
				id: 4
			},
			{
				title: 'doubleUp',
				link: 'https://www.youtube.com/embed/pwBFOuCrdr4',
				id: 5
			},
			{
				title: 'grinding',
				link: 'https://www.youtube.com/embed/AVrNHI4RdPM',
				id: 6
			}
		]
	}
];

// fake database
const albumData = [
	{
		title: 'Victory Lap',
		albumCover: '/img/victory-lap.jpg',
		songs: [
			{
				title: 'Rap N',
				link: 'https://www.youtube.com/embed/_4LsQ_kdLh0',
				id: 1
			},
			{
				title: 'Victory',
				link: 'https://www.youtube.com/embed/iYC9iMTC5QM',
				id: 2
			},
			{
				title: 'Last',
				link: 'https://www.youtube.com/embed/QM9xgHibvzM',
				id: 3
			},
			{
				title: 'Young',
				link: 'https://www.youtube.com/embed/3RlE03xOyV4',
				id: 4
			},
			{
				title: 'Dedication',
				link: 'https://www.youtube.com/embed/RXmfYM6dSFg',
				id: 5
			},
			{
				title: 'Blue',
				link: 'https://www.youtube.com/embed/r5ujo7icpH8',
				id: 6
			},
			{
				title: 'Hussle',
				link: 'https://www.youtube.com/embed/lxcrBGUYnxA',
				id: 7
			},
			{
				title: 'Status',
				link: 'https://www.youtube.com/embed/LAJkL4dZpzk',
				id: 8
			},
			{
				title: 'Succa',
				link: 'https://www.youtube.com/embed/rQEuF5QI0Q8',
				id: 9
			},
			{
				title: 'Keys',
				link: 'https://www.youtube.com/embed/eBYvq8CyNrA',
				id: 10
			},
			{
				title: 'grinding',
				link: 'https://www.youtube.com/embed/AVrNHI4RdPM',
				id: 11
			},
			{
				title: 'million',
				link: 'https://www.youtube.com/embed/5EDC_dAAqD0',
				id: 12
			},
			{
				title: 'loaded',
				link: 'https://www.youtube.com/embed/CTyRUel1xFY',
				id: 13
			},
			{
				title: 'realbig',
				link: 'https://www.youtube.com/embed/ZyGojDe_DI0',
				id: 14
			},
			{
				title: 'doubleUp',
				link: 'https://www.youtube.com/embed/pwBFOuCrdr4',
				id: 15
			},
			{
				title: 'right',
				link: 'https://www.youtube.com/embed/heFh5aQjwtI',
				id: 16
			}
		]
	},
	{
		title: 'No Pressure',
		albumCover: '/img/no-pressure.jpg',
		songs: [
			{
				title: 'effortless',
				link: 'https://www.youtube.com/embed/YqUrHLc0DqM',
				id: 17
			},
			{
				title: 'None of This',
				link: 'https://www.youtube.com/embed/3oyjOwcy5rg',
				id: 18
			},
			{
				title: 'Never Gone Know',
				link: 'https://www.youtube.com/embed/hnQEBeRqMPc',
				id: 19
			},
			{
				title: 'Thats How It Go (Love & Wa)',
				link: 'https://www.youtube.com/embed/mBbk-ZaqOLM',
				id: 20
			},
			{
				title: 'Pain',
				link: 'https://www.youtube.com/embed/mkVkemMZZ88',
				id: 21
			},
			{
				title: 'Skurr',
				link: 'https://www.youtube.com/embed/YZZOjKa6Tg8',
				id: 22
			},
			{
				title: 'Blueprint',
				link: 'https://www.youtube.com/embed/wwESzdRGOgE',
				id: 23
			},
			{
				title: 'stucc',
				link: 'https://www.youtube.com/embed/YA60W05DJlQ',
				id: 24
			}
		]
	},
	{
		title: 'Slauson Boy 2',
		albumCover: '/img/slauson-boy2.jpg',
		songs: [
			{
				title: ''
			}
		]
	}
];

export default function VideoPlayer() {
	// setting the state of song to be a random song when component initially renders
	const [ song, setSong ] = React.useState(() => pickRandomDefault(albumWithVideos));
	// set the state of song to be an empty song string
	const [ albums, setAlbums ] = React.useState([]);
	//React useEFFect to fetch albumData
	React.useEffect(() => {
		setTimeout(() => {
			setAlbums(albumData);
		}, 3000);
	}, []);
	console.log(albums);

	// function to pick a random default song
	function pickRandomDefault(albumWithVideos) {
		// empty array to start for song links
		let songs = [];
		// loop over album data array to access album objects
		albumWithVideos.map((album) => {
			// songs array to start for the inital component render
			let arr = [];
			// spread the album.songs into the songs array
			arr = [ ...album.songs ];
			// setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs
			songs = [ ...songs, ...arr ];
		});
		// return songs at random index
		return songs[Math.floor(Math.random() * songs.length)];
	}

	// checking to see the value of random song
	console.log({ song });
	// checking to see what props are passed
	// function to pick a random song on button click

	function pickRandomSong(albumData) {
		// empty songs array to start
		let songs = [];
		// loop over albumData array to acces album objects
		albumData.map((album) => {
			console.log(album)
			let arr = [];
			// spread the album.songs into the songs array
			// console.log("Album songs")
			// console.log(album.songs)
			arr = [ ...album.songs ];
			console.log(arr)
			// setAllSongs keep data from previous songs create a new array inside spread the songs array and previous songs
			songs = [ ...songs, ...arr ];
		});
		// set song to random index of songs arr
		setSong(songs[Math.floor(Math.random() * songs.length)]);
	}

	function reloadPage() {
		console.log("Tony Montana Says 'Ok, I'M RELOOOAADDDINNNGGG!!!!!!!!!!!!!!!'")
		window.location.reload()
	}

	function albumSongs(album) {
		console.log(album)
		let arr = []

		arr = [...album.songs]
		console.log(arr)

		setSong(arr[Math.floor(Math.random() * arr.length)])
	}

	return (
		<Box>
			{/* headline */}
			<Flex justify="space-between" w="100%">
				<Text mt={3} fontSize="25px">
					All Money In
				</Text>
				<Text fontSize="50px">Nipsey Hussle </Text>
				<Text mt={3} fontSize="25px">
					No Money Out
				</Text>
			</Flex>
			{/* VideoPlayer */}
			<AspectRatio mb={2} w="100vw" h="80vh" ratio={1}>
				<iframe title={song.title} src={song.link} allowFullScreen />
			</AspectRatio>
			{/* Random Song Button */}
			<Button mb={3} onClick={() => pickRandomSong(albumData)}>
				Randomize
			</Button>

			<Button ml={2} onClick={reloadPage}>
				Video
			</Button>

			{/* Discography Section */}
			<Box>
				<Text mb={2} fontSize="50px">
					Discography
				</Text>
			</Box>

			<Box>
				{albumData.map((album) => {
					console.log(album);
					return (
                        <Box w='100%' h='100%' bg='red'>
						<AspectRatio key={album} mb={3} maxW="200px" maxh="200px" ratio={3 / 3}>
							<Image src={album.albumCover} alt="album artwork" objectFit="cover" />
						</AspectRatio>

                    <Button key={album.title} onClick={() => albumSongs(album)} songs={album.songs}>{album.title}</Button>
                       </Box>
					);
				})}
			</Box>
		</Box>
	);
}
