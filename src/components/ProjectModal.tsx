import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Grid,
} from "@chakra-ui/react";

interface ModalProps {
  title: string;
  images: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  mobile?: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const ProjectModal: React.FC<ModalProps> = ({
  title,
  images,
  isOpen,
  onOpen,
  onClose,
  mobile,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" alignItems="center" justifyContent="center">
          <Grid templateColumns={mobile ? "repeat(2, 1fr)" : "1fr"} gap={2}>
            {images.map((elem) => {
              return (
                <Image
                  boxShadow="2xl"
                  rounded="md"
                  bg="white"
                  src={elem}
                  width={mobile ? 200 : 400}
                  borderRadius={10}
                  mb={10}
                />
              );
            })}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
