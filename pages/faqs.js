import React from "react";
import {
  Accordion,
  Box,
  Container,
} from "@chakra-ui/react";
import Image from 'next/image'
import Head from "next/head";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import AccordionFaqs from "@/components/accordionFaqs";
import profilePic from '../public/contact.svg'
import Contact from "@/components/contact";


const Faqs = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta
          name="description"
          content="Si vous avez la moindre question concernant le déroulement des évènements de nos missions d'escape game. Venez découvrir notre FAQ qui répond à toutes vos questions !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingY={"25"}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            row={{ base: 3, md: 2 }}
            gap={3}
            justifyItems={"center"}
          >
            <GridItem
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              colSpan={2}
              p={6}
            >
              <h1>FAQs</h1>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}>
              <Accordion defaultIndex={[0]} allowMultiple>
                {faqs.data.map((faq) => (
                  <AccordionFaqs key={faq.id} faq={faq} />
                ))}
              </Accordion>
            </GridItem>
            {/* <GridItem display={"flex"} alignContent={"center"} justifyContent={'center'}>
              <Image src={profilePic} width="300" alt="Picture of the author" />
            </GridItem> */}
            <GridItem>
              <Contact />
            </GridItem>
          </SimpleGrid>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const faqs = await fetch("http://127.0.0.1:1337/api/faqs");
  const faqsJson = await faqs.json();
  return {
    props: {
      faqs: faqsJson,
    },
  };
}

export default Faqs;
