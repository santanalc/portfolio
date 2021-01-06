import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  date: string;
  title: string;
  text: string[];
}
export function Card(props: Props) {
  const { date, title, text } = props;
  return (
    <Box
      boxShadow="md"
      p="6"
      rounded="md"
      bg="#F6F9FA"
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      m="4"
      width={"80%"}
    >
      <Text fontSize={14} color="#8C8C8C">
        {date}
      </Text>
      <Text fontSize={14} color="#02A1E8">
        {title}
      </Text>
      <ul>
        {text.map((elem) => {
          return (
            <li>
              <Text fontSize={14} color="#4D4D4D">
                {elem}
              </Text>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}
