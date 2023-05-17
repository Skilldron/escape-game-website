import { AccordionButton, AccordionItem, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

const AccordionFaqs = ({ faq }) => {
  return (
    <AccordionItem w={"xl"}>
                <h2>
                  <AccordionButton>
                    <Box
                      fontWeight={"semibold"}
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      {faq.attributes.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={{textJustify: "inter-word"}} pb={4}>
                  {faq.attributes.response}
                </AccordionPanel>
              </AccordionItem>
  );
};

export default AccordionFaqs;
