import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import { AspectRatio } from "@chakra-ui/react"
// apollo server

export default function Index() {
	return (
		<Layout>
			<Flex direction="column">
				Space X
				<AspectRatio maxW="560px" ratio={1}>
					<iframe title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
				</AspectRatio>
			</Flex>
		</Layout>
	);
}
