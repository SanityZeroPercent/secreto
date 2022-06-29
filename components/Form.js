import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const Form = ({ formId, msgForm }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [form, setForm] = useState({
    message: msgForm.message,
  });

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      console.log("Failed to add messages");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    postData(form);
  };

  return (
    <>
      <Box w="full" my="4">
        <VStack spacing="4" align="start">
          <FormControl id={formId} isRequired>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <Textarea
              id="msg"
              name="message"
              onChange={handleChange}
              w="full"
              placeholder="Enter your message here...."
            />
          </FormControl>
          <Button onClick={handleSubmit} size="md" rounded="lg">
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Form;
