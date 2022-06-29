import {
  Container,
  Text,
  Divider,
  Stack,
  Flex,
  Center,
  Link,
  Box,
} from "@chakra-ui/react";
import { Heading } from "../components/Heading";
import dbConnect from "../lib/dbConnect";
import Secreto from "../models/Secreto";
import Form from "../components/Form";

const Index = ({ msgs }) => {
  const form = {
    message: "",
  };
  return (
    <>
      <Heading />
      <Container maxW="container.lg" my="4">
        <Box w="full" h="12" mb="4">
          <Flex w="full" h="full" alignSelf="center" alignItems="center">
            <Box>
              <Text fontWeight="bold" fontSize="xl" letterSpacing="0.5px">
                Clay&#39;s Secreto Site
              </Text>
            </Box>
          </Flex>
        </Box>
        <Text
          textAlign="center"
          py="8"
          rounded="xl"
          w="full"
          fontSize="md"
          fontWeight="normal"
          letterSpacing="0.5px"
          fontStyle="italic"
          backgroundColor="gray.50"
        >
          Tell something to me, anonymously.
        </Text>

        <Form formId="message-form" msgForm={form} />
        <Divider orientation="horizontal" w="full" my="8" />
        <Text>Timeline:</Text>
        <Divider orientation="horizontal" w="0" my="4" />
        <Stack spacing="6" direction="column">
          {msgs.map((pesan) => (
            <Box
              w="full"
              p="4"
              rounded="xl"
              key={pesan._id}
              backgroundColor="gray.50"
            >
              <Stack direction="column">
                <Text>{pesan.message}</Text>
                <Text
                  fontSize="xs"
                  textColor="gray.500"
                  suppressHydrationWarning={true}
                >
                  {new Date(pesan.created_at).toLocaleString()}
                </Text>
              </Stack>
            </Box>
          ))}
        </Stack>
        <Center my="8">
          <Text textAlign="center" fontSize="xs">
            Made with ❤️ by clemiee.
            <br />
            Copyright ©️ 2022-present, Clemie McCartney. Source code available{" "}
            <Link color="blue.300" href="https://github.com/clemiee/secreto">
              here.
            </Link>
          </Text>
        </Center>
      </Container>
    </>
  );
};

/* Retrieves message(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Secreto.find({});
  const msgs = result.map((doc) => {
    const psn = doc.toObject();
    psn._id = psn._id.toString();
    return psn;
  });

  return { props: { msgs: JSON.parse(JSON.stringify(msgs)) } };
}

export default Index;
